<script setup>

import { useTableStore } from '../store/index'
import DayCircle from '../../../components/dayCircle.vue';
import { storeToRefs,  } from 'pinia';
import {onMounted, ref  } from "vue"
import PeriodModal from "./Modal.vue"
// access the `store` variable anywhere in the component ✨

const store = useTableStore()
const {
    tables,
    current_period,
    current_slave,
    load,
    data_now,
    input_mode,
    current_to_settings,
    loader,
} = storeToRefs(store);

const scroll_main = ref(null)

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
        case 0 : {
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

const click_left = (event, day) => {
    event.preventDefault();
    console.log(day)
    if(day.type != 'empty') {
        model_day.value = day
    } else {
        model_day.value=''
    }
}

const model_day = ref("");
const holiday_types = ['holi_start','holi_finish','holiday','box',"box_start",'box_finish'];
const workday_types = ['shift','shift_start','shift_finish'];

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

    if (input_mode.value === 'holiday') {
                                    if (workday_types.includes(day.type)) {
                                        //notify
                                        return 0
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
        } else if (input_mode.value === 'work time') {
                                    if (holiday_types.includes(day.type)) {
                                        //notify
                                        return 0;
                                    }
                                    if (day.type === "empty" && !current_period.value) {
                                        console.log('create work day');
                                        current_slave.value = row.slaveId;
                                        const data = {year:table?.year,mounth:table?.mounth,day:day?.number,slaveId:row.slaveId, update_year:data_now.value.year, update_mounth: data_now.value.mounth};
                                        current_period.value = await store.CreateWorkDay(data);
                                    } 
        }

        console.log(day);
        console.log(row);
        console.log(current_period.value, "current period id");
        console.log(current_slave.value, "current slave id");
}

const goRight  = () => {
    scroll_main.value.scrollBy(700, 0);
    checkToUpdate();
}

onMounted(() => {
    scroll_main.value.scrollLeft = 2500;
    metka_go = true;
    setTimeout(() => {
        metka_go = false;
    }, 5000)
})

const goLeft  = ( ) => {
    scroll_main.value.scrollBy(-700,0);
    checkToUpdate();
}

let a = "";
let metka_go = true;

const checkToUpdate = () => {
    console.log(scroll_main.value.scrollWidth - scroll_main.value.scrollLeft, metka_go)
    clearTimeout(a);
    a = setTimeout(async () => {
        if (scroll_main.value.scrollLeft < 300 && !metka_go) {
            console.log('go left')
            metka_go = true;
            metka_go = await store.goTable('left');
            metka_go = false;

        } else if (scroll_main.value.scrollWidth - scroll_main.value.scrollLeft < 2000 && !metka_go) {
            console.log('go right')
            metka_go = true;
            metka_go = await store.goTable('right');
            metka_go = false;
        }
    }, 200) 
}

const start_time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
})
const finish_time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
})

</script>
    
<!-- v-keyup.left="goLeft()" v-keyup.right="goRight()"   -->
<template>
    <main  >    
        <section id="main_table_block" @scroll="() => {
            model_day=null;
            checkToUpdate();
        }" ref="scroll_main">
            <article 
                @click="goLeft()"
                class="nav_arraw"
                style="left: 190px;"
                :style="{
                    'margin-top':tables.value?.slaves.length * 42 + 'px'
                }">
                лев
            </article>
            <article
                @click="goRight()"
                class="nav_arraw"   
                style="right: 10px;"
                :style="{
                    'margin-top':tables.value?.slaves.length * 42 + 'px'
                }">
                прав
            </article>
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

                        <section class="slave_row">
                            <article @click="slave.is_changed = !slave.is_changed">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: relative; top: 3px;">
                                <path d="M7.92296 7.92308C9.83472 7.92308 11.3845 6.37329 11.3845 4.46154C11.3845 2.54978 9.83472 1 7.92296 1C6.01121 1 4.46143 2.54978 4.46143 4.46154C4.46143 6.37329 6.01121 7.92308 7.92296 7.92308Z" stroke="#2E4E69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.61538 19.4615H1V17.1538C1.01225 15.9812 1.3215 14.8308 1.89888 13.8101C2.47626 12.7894 3.30292 11.9317 4.30165 11.3171C5.30038 10.7025 6.4386 10.3511 7.60997 10.2956C8.78135 10.2402 9.94767 10.4825 11 11" stroke="#2E4E69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.0001 13.3077L13.754 20.5539L10.4771 21L10.9386 17.7231L18.1694 10.4769L21.0001 13.3077Z" stroke="#2E4E69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </article>
                            <a style="color: #2E4E69" v-if="!slave.is_changed" class="">{{slave.name}}</a>
                            <input v-else type="text" v-model="slave.name" @change="() => {store.updateSlave(slave); slave.is_changed = false;}">
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
                                @contextmenu="click_left($event, day)"
                                @click='clickDay(table,day,row)'
                                :status="day.type"
                                :is_dayoff="day.isDayoff"></DayCircle>
                                <PeriodModal v-if="model_day == day" style="position: fixed; z-index: 30"
                                :periodId="day.periodId"
                                :style="{
                                    'margin-left': '-' + scroll_main.scrollLeft - 70 + 'px'
                                }"
                                v-click-away="() => {model_day = ''}" >
                                <template v-slot:header>
                                    <section style="display: flex; flex-derection: row">
                                        <VueDatePicker v-model="start_time" time-picker></VueDatePicker>
                                        <VueDatePicker v-model="finish_time" time-picker></VueDatePicker>
                                    </section>
                                </template>
                                <template v-slot:bt_row>y
                                    
                                    <article    
                                    v-if="holiday_types.includes(day.type)"
                                    class="bt_modal">
                                        блок
                                    </article>
                                    <article
                                    v-if="workday_types.includes(day.type)"
                                    class="bt_modal">
                                        коп
                                    </article>
                                    <article
                                    class="bt_modal"
                                    @click="() => {
                                        store.deletePeriod({periodId:day.periodId, year:table?.year,mounth:table?.mounth,day:day?.number, slaveId:row.slaveId, update_year:data_now.year, update_mounth: data_now.mounth}); 
                                        current_period = '';
                                    }">
                                        дел
                                    </article>
                                    <article 
                                    v-if="holiday_types.includes(day.type)"
                                    class="bt_modal"
                                    @click="() => {store.goLeftPeriod(day.periodId)}">
                                        лeв
                                    </article>
                                    <article
                                    v-if="holiday_types.includes(day.type)"
                                    class="bt_modal"    
                                    @click="() => {store.goLeftPeriod(day.periodId)}">
                                        прав
                                    </article>
                                </template>
                                </PeriodModal>
                            </td>
                    </tr>
                </table>
            </div>
        </section>
    </main>
</template>



<style scoped>

.slave_row{
    display: flex;
    flex-direction: row;
    padding: 5px;
    justify-content: start;
    gap: 5px;
    align-items: center;

    font-size: 18px;
    color: #2E4E69;
    font-weight: 600;
}

.bt_modal{
        background-color: #FFFFFF;
        height: 40px;
        width: 40px;
        border-radius: 5px;
        margin: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
}

/* import url('../../../assets/style.scrollbar.css'); */
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

.data_picker{
    width: 150px;
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
    overflow-x: auto;
    padding-left:19vh;
    width: calc(100%);
    padding-top: 40px;
    padding-bottom: 60px;
    scroll-behavior: smooth;
}

/* width */
#main_table_block::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  border-radius: 5px;
}

/* Track */
#main_table_block::-webkit-scrollbar-track {
  background: #C0D2E2;
  height: 3px;
  height: 3px;
  border-radius: 5px;   
}

/* Handle */
#main_table_block::-webkit-scrollbar-thumb {
  background: #DCE6EF;
  border-radius: 5px;
}

/* Handle on hover */
#main_table_block::-webkit-scrollbar-thumb:hover {
  background: #DCE6EF;
}

.nav_arraw{
    position: absolute;
    background-color: #f1f1f1;
    margin-top: 44px;
    padding: 5px;
    z-index: 20;
}   
</style>