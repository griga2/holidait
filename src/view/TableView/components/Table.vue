<script setup>

import { useTableStore } from '../store/index'
import DayCircle from '../../../components/dayCircle.vue';


// access the `store` variable anywhere in the component ✨
const {
    table,
    updateTable,
    addSlave,
} = useTableStore();

updateTable();



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
            <table id="left_bar">
                <tr class="slave_name" v-for="row in table.value.rows">
                    <section>
                        <a class="slave">{{row.slave.name}}</a>
                    </section>
                </tr>
                <tr>
                    <section id="button">
                        <button @click="() => {
                            addSlave();
                        }" type="button">Button</button>
                    </section>
                </tr>
            </table>
            <div style='display:grid;
            grid-template-columns: 1800px 1800px 1800px;'>
            <table class="mount_table"
            style="
            padding-left:19vh">
                <tr class="mount_row" v-for="row of table.value.rows">
                    <td v-for="day of row.old.days">
                        <DayCircle :status="day.type" :is_dayoff="day.isDayoff"></DayCircle>
                    </td>
                </tr>
            </table>
            <table class="mount_table">
                <tr class="mount_row" v-for="row of table.value.rows">
                    <td v-for="day of row.now.days">
                        <DayCircle :status="day.type" :is_dayoff="day.isDayoff"></DayCircle>
                    </td>
                </tr>
            </table>
            <table class="mount_table">
                <tr class="mount_row" v-for="row of table.value.rows">
                    <td class="" v-for="day of row.next.days">
                        <DayCircle :status="day.type" :is_dayoff="day.isDayoff"></DayCircle>
                    </td>
                </tr> 
            </table>
            </div>
        </section>
       
    </main>

</template>

<style scoped>

.alertText {
    display: table;
    margin: 0 auto;
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
    border: 3px solid #1d1d24;
    border-radius: 10px;
    color: #a9a9c9;
    position: absolute;
    margin: auto;
}

#left_bar{
    width: 19vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    position: absolute;
}

* {
    font-family: santello;
}

.mount_row{
   
}

.slave_name{
    position: sticky;
    display: block;
    width: 100%;
    height: 48px;
    flex-direction: column;
    background: rgb(183, 178, 198);
    color: black;
    z-index: 3;
}

#slave_circle{
    height: 48px;

}

.day{
    border: 1px solid black;
    height: 48px;
    width: 48px;
}

.mount_table{
    border: 4px solid black;
    width: 1600px;
}

#main_table_block{
    display:inline-block;
    overflow-x: auto;
    width: 100%;
}

</style>
