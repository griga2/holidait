<script setup>

import { useTableStore } from '../store/index'
import DayCircle from '../../../components/dayCircle.vue';


// access the `store` variable anywhere in the component ✨
const {
    table,
    current_period,
    current_slave,
    current_to_settings,
    updateTable,
    addSlave,
    updatePeriod,
    createPeriod,
    deletePeriod
} = useTableStore();

updateTable();

const resaisebleDayStatus = [
    "box",
    "box_start",
    "box_holi",
    "holi",

]

// console.log(table);
</script>
    

<template>

    <!-- <head>
        <label>
            <input type="checkbox" class="alertCheckbox" autocomplete="off" />
            <div class="alert info">
              <span class="alertClose">x</span>
              <span class="alertText">Have a nice day!
              <br class="clear"/></span>
            </div>
          </label>
      </head> -->

    <main>
            
        <section id="main_table_block">
            
            <div style='display:grid;
            grid-template-columns: 1800px 1800px 1800px;'>
            <table class="mount_table"
            style="
            padding-left:19vh">
                <tr class="mount_row" v-for="row of table.value?.rows">
                    <td class="day" v-for="day of row.old.days">
                        <DayCircle @click='async () => {
                            if (day.type === "empty" && !current_period) {
                                const data = {year:next?.year,mount:next?.mount,day:day?.number,slaveId:row.slave._id};
                                current_period = await createPeriod(data);
                                current_slave = row.slave._id;
                            } 
                            if (day.type === "empty" && current_period && current_slave === row.slave._id) {
                                current_slave = row.slave._id;
                                const data = {year:next?.year,mount:next?.mount,day:day?.number,periodId:current_period};
                                current_period = await updatePeriod(data);
                            }
                            if (resaisebleDayStatus.includes(day.status)) {
                                const data = {year:next?.year,mount:next?.mount,day:day?.number,periodId:current_period};
                                current_period = await updatePeriod(data); 
                            }
                            if (day.status == "holi_finish") {
                                current_period = "";
                                await deletePeriod(data);
                            }
                        }'
                        :status="day.type"
                        :is_dayoff="day.isDayoff"></DayCircle>
                    </td>
                </tr>
            </table>
            <table class="mount_table">
                <tr class="mount_row" v-for="row of table.value?.rows">
                    <td class="day" v-for="day of row.now.days">
                        <DayCircle :status="day.type" :is_dayoff="day.isDayoff"></DayCircle>
                    </td>
                </tr>
            </table>
            <table class="mount_table">
                <tr class="mount_row" v-for="row of table.value?.rows">
                    <td  class="day" v-for="day of row.next.days">
                        <DayCircle :status="day.type" :is_dayoff="day.isDayoff"></DayCircle>
                    </td>
                </tr> 
            </table>
            
            </div>
            
        </section>
        
        <table id="left_bar"
        :style="{
            top: (table.value?.rows?.length * 49 * -1) - 28 + 'px',
            left:'0px',
        }"
       >
            <tr class="slave_name" v-for="row in table.value?.rows">
                <section @click='async () => {
                    if (current_slave === row?.slave.slaveId) {
                        
                    }
                }'>
                </section>

                <section>
                    <a class="slave">{{row.slave.name}}</a>
                </section>
                <section v-if="current_to_settings"
                style="
                    position: sticky;
                    left:19vh;
                    height: 49px;
                    width: calc(100% - 19vh);
                ">

                </section>
            </tr>
            <tr>
                <section id="button">
                    <button @click="() => {
                        addSlave();
                        updateTable();
                    }" type="button">Button</button>
                </section>
            </tr>
        </table>
    </main>

</template>

<style scoped>

.alertText {
    display: table;
    margin: auto;
    text-align: center;
    font-size: 16px;
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
    position: relative;
    z-index: 4;
}

* {
    font-family: santello;
}

.mount_row{
   
}

.slave_name{
    position: sticky;
    display: flex;
    width: 100%;
    height: 47px;
    flex-direction: column;
    background: rgb(183, 178, 198);
    color: black;
    z-index: 3;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin: 1px;
}

#slave_circle{
    height: 49px;

}

.day{
    height: 46px;
    width: 46px;
}

.mount_table{
    width: 1600px;
}

#main_table_block{
    display: inline-block;
    overflow-x: scroll;
    width: 100%;
    position: relative;
}

</style>