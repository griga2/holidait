<script setup>

import { useTableStore } from '../store/index'
import DayCircle from '../../../components/dayCircle.vue';
import { storeToRefs,  } from 'pinia';
import {onMounted} from "vue"

// access the `store` variable anywhere in the component ✨

const store = useTableStore()
const {
    tables,
    current_period,
    current_slave,
    load,
    data_now,
    current_to_settings,
    loader,
} = storeToRefs(store);

const convertDayType = (_day_type) => {
    switch(_day_type) {
        case 1 : {
          return "пн";
          break;  
        };
        case 2 : {
          return "вт"; 
        };
        case 3 : {
          return "ср";
        };
        case 4 : {
          return "чт"; 
        };
        case 5 : {
            return "пт"; 
        };
        case 6 : {
            return "сб";  
        };
        case 7 : {
            return "вс";  
        };
    }
}

store.updateTable();

const resaisebleDayStatus = [   
    "holi_start",
    "holiday",
    "holi_finish",
]       

const getTamplates = () => {
    let str = '';
    // console.log(tables.value.value?.tables, 'check');
    const a =tables.value.value?.tables?.forEach(table => {
        let length = table.rows[0]?.days?.length;

        str += `${length * 46 - 10}px `
    });

    return str;
}

const convertMounth = (_mouth) => {
    switch(_mouth) {
        case 0 : {
          return "январь";
          break;  
        };
        case 1 : {
          return "февраль";
          break;  
        };
        case 2 : {
          return "март"; 
        };
        case 3 : {
          return "апрель";
        };
        case 4 : {
          return "май"; 
        };
        case 5 : {
            return "июнь"; 
        };
        case 6 : {
            return "июль";  
        };
        case 7 : {
            return "август";  
        };
        case 8 : {
          return "сентябрь"; 
        };
        case 9 : {
            return "октябрь"; 
        };
        case 10 : {
            return "ноябрь";  
        };
        case 11 : {
            return "декабрь";  
        };
    }
}


const clickDay = async (table,day,row) => {

                                    if (current_slave.value != row.slaveId) {
                                        current_slave.value = '';
                                        current_period.value = '';
                                    }

                                
                                    if (day.type === "empty" && !current_period.value) {
                                        console.log('create period');
                                        current_slave.value = row.slaveId;
                                        const data = {year:table?.year,mounth:table?.mounth,day:day?.number,slaveId:row.slaveId, update_year:data_now.value.year, update_mounth: data_now.value.mounth};
                                        current_period.value = await store.createPeriod(data);
                                    } else if (day.type === "empty" && current_period.value && current_slave.value === row.slaveId) {
                                        console.log('update period');
                                        current_slave.value = row.slaveId;
                                        const data = {year:table?.year,mounth:table?.mounth,day:day?.number,periodId:current_period.value,slaveId:row.slaveId, update_year:data_now.value.year, update_mounth: data_now.value.mounth};
                                        current_period.value = await store.updatePeriod(data);
                                        setTimeout(() => {
                                            current_period.value = '',
                                            current_slave.value = ''
                                        }, 10000)
                                    } else if (resaisebleDayStatus.includes(day.type) && !current_period.value)
                                    {
                                        console.log(day,'resible period');
                                        current_period.value = day.periodId;
                                    } else if (resaisebleDayStatus.includes(day.type) && current_period.value)
                                    {
                                        console.log(day,'update resible period');
                                        current_period.value = day.periodId;
                                        const data = {year:table?.year,mounth:table?.mounth,day:day?.number,periodId:current_period.value,slaveId:row.slaveId, update_year:data_now.value.year, update_mounth: data_now.value.mounth   };
                                        current_period.value = await store.updatePeriod(data);
                                    }
                                    console.log(day);
                                    console.log(row);
                                    console.log(current_period.value, "current period id");
                                    console.log(current_slave.value, "current slave id");
                                }

</script>
    

<template>

    <main>    
        <section id="main_table_block">
            
            <div style='display:grid;'
            :style="{
                'grid-template-columns': getTamplates()
            }">
            <table id="left_bar">
                    <tr class=  "slave_name" v-for="slave in tables.value?.slaves">
                        <section @click='async () => {
                            if (current_slave === slave?.id) {
                                
                            }
                        }'>
                        </section>

                        <section>
                            <a class="slave">{{slave.name}}</a>
                        </section>
                        <section v-if="current_to_settings"
                        style="
                            position: sticky;
                            left: 19vh;
                            height: 49px;
                            width: calc(100% - 19vh);
                        ">

                        </section>
                    </tr>
                    <tr>
                        <section id="add_button"
                            @click="() => {
                                store.addSlave();
                                store.updateTable();
                            }" type="button">
                            +
                        </section>
                    </tr>
                </table>
                <table
                v-for="table in tables.value?.tables"
                class="mount_table">
                    <tr>
                        <td colspan="2" style="width: 40px; position: relative; height: 40px; white-space: nowrap;"><span>{{ convertMounth(table.mounth) }}</span></td>
                        <td v-for="day in (table.rows[0]?.days?.length > 4 ? table.rows[0]?.days?.length - 4 : 0)"></td>
                        <td style="width: 40px; position: relative; right: -20px;" colspan="3">{{ convertMounth(table.mounth) }} </td>
                    </tr>
                    <tr>
                        <td class="day_head" v-for="day in table?.rows[0]?.days || []">
                                {{ day.number + ", " }}
                            {{ convertDayType(day.weekDay) }}
                        </td>
                    </tr>
                    <tr class="mount_row" v-for="row in table?.rows">
                            <td class="day" v-for="day in row?.days">
                                <DayCircle
                                @click='clickDay(table,day,row)'
                                :status="day.type"
                                :is_dayoff="day.isDayoff"></DayCircle>
                            </td>
                    </tr>
                </table>
            </div>
        </section>
    </main>
</template>



<style scoped>
@import url('../../../assets/style.scrollbar.css');
.alertText {
    display: table;
    margin: auto;
    text-align: center;
    font-size: 16px;
}

/* .mount_table{
    border-left: 1px solid black;
} */

.day_head{
    width: 42px;
    height: 16px; 
    text-align: center;
    font-size: 12px;
    padding-left: 2px;
    color: #2E4E69;
}

#main {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.button {
    background-color: #43499f; 
    border: none;
    color: rgb(0, 0, 0);
    padding: 15px 32px; 
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

#add_button{
    height: 40px;
    background-color: #FFFFFF;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

#okno {
    width: 300px;
    height: 300px;
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    color: #a9a9c9;
    position: absolute;
    margin: auto;
}

#left_bar{
    width: 19vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 4;
    top: 140px;
    left: 0px;
    background-color: #DCE6EF ;
    border-radius: 0px 20px 20px 0px;
    padding-top: 30px;
    padding-bottom: 10px;
    justify-content: center;
    align-items: center;
}

.slave_name{
    position: sticky;
    display: flex;
    width: 100%;
    height: 40px;
    flex-direction: column;
    background: #FFFFFF;
    color: black;
    z-index: 3;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-bottom: 4px;
}

#slave_circle{
    height: 49px;
}

.day{
    height: 40px;
    width: 40px;
}   

#main_table_block{
    display: inline-block;
    overflow-x: scroll;
    padding-left:19vh;
    width: calc(100%);
    padding-top: 40px;
    padding-bottom: 60px;
}

</style>s