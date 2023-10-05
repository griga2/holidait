<script setup>

import { useTableStore } from '../store/index'

// access the `store` variable anywhere in the component ✨
const {
    table,
    updateTable,
} = useTableStore();

updateTable();

const old_table = new Array(table.old?.length);

</script>


<template>

    <head>
        <label>
            <input type="checkbox" class="alertCheckbox" autocomplete="off" />
            <div class="alert info">
              <span class="alertClose">x</span>
              <span class="alertText">Have a nice day!
              <br class="clear"/></span>
            </div>
          </label>
      </head>

    <main>
            
        <section id="main_table_block">
            <table id="left_bar">
                <tr class="slave_name" v-for="row in table.rows">
                    <article id="">
                        <a class="slave">{{row.slave.name}}</a>
                        <section id="button">
                            <button @click="() => {
                                table.rows.push({slave:{name:'Oleg'}})
                            }" type="button">Button</button>
                        </section>
                    </article>
                </tr>
            </table>
            <div style='display:grid;
            grid-template-columns: 1200px 1200px 1200px;'>
            <table class="mount_table">
                <tr class="mount_row" v-for="row in table.rows">
                    <td v-for="day in row.old">
                        <a class="day">{{day}}</a>
                    </td>
                </tr>
            </table>
            <table class="mount_table">
                <tr class="mount_row" v-for="row in table.rows">
                    <td v-for="day in row.now">
                       
                    </td>
                </tr>
            </table>
            <table class="mount_table">
                <tr class="mount_row" v-for="row in table.rows">
                    <td class="" v-for="day in row.next">
                        <a class="day">{{'d'}}</a>
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
    height: 49px;
    flex-direction: column;
    background: rgb(183, 178, 198);
    border: 1px solid;
    color: black;
    top: 70px;
    left: 70px;
}

#slave_circle{
    height: 45px;

}

.day{
    border: 1px solid black;
    height: 40px;
    width: 40px;
}

.mount_table{
    border: 1px solid black;
    width: 1200px;
    padding-left: 19vh;
    height: 49px;

}

#main_table_block{
    display:inline-block;
    overflow-x: auto;
    width: 100%;
}

</style>
