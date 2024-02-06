    <script setup>

    import { useTableStore } from '../store/index'
    import DayCircle from '../../../components/dayCircle.vue';
    import { storeToRefs } from 'pinia';

    // access the `store` variable anywhere in the component ✨

    const store = useTableStore()
    const {
        tables,
        current_period,
        current_slave,
        current_to_settings
    } = storeToRefs(store);

    store.updateTable();

    const resaisebleDayStatus = [   
        "holi_start",
        "holiday",
        "holi_finish",
    ]
    const clickDay = async (table,day,row) => {

                                        if (current_slave.value != row.slaveId) {
                                            current_slave.value = '';
                                            current_period.value = '';
                                        }

                                    
                                        if (day.type === "empty" && !current_period.value) {
                                            console.log('create period');
                                            current_slave.value = row.slaveId;
                                            const data = {year:table?.year,mounth:table?.mounth,day:day?.number,slaveId:row.slaveId};
                                            current_period.value = await store.createPeriod(data);
                                        } else if (day.type === "empty" && current_period.value && current_slave.value === row.slaveId) {
                                            console.log('update period');
                                            current_slave.value = row.slaveId;
                                            const data = {year:table?.year,mounth:table?.mounth,day:day?.number,periodId:current_period.value,slaveId:row.slaveId};
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
                                            const data = {year:table?.year,mounth:table?.mounth,day:day?.number,periodId:current_period.value,slaveId:row.slaveId};
                                            current_period.value = await store.updatePeriod(data);
                                        }
                                        console.log(day);
                                        console.log(row);
                                        console.log(current_period.value, "current period id");
                                        console.log(current_slave.value, "current slave id");
                                    }
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
                </di        v>
            </label>
        </head> -->   

        <main>
                
            <section id="main_table_block"
            class = 'c_scroll'>
                
                <div style='display:grid;
                grid-template-columns: 1800px 1800px 1800px 1800px 1800px;'>
                    <table
                    v-for="table in tables.value?.tables"
                    class="mount_table">
                        <tr class="mount_row" v-for="row of table.rows">
                                <td class="day" v-for="day of row.days">
                                    <DayCircle
                                    @click='clickDay(table,day,row)'
                                    :status="day.type"
                                    :is_dayoff="day.isDayoff"></DayCircle>
                                </td>
                        </tr>
                    </table>
                </div>
                
            </section>
            
            <table id="left_bar"
            :style="{
                top: (tables.value?.slaves?.length * 49 * -1) - 14 + 'px',
                left:'0px',
            }"
        >
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
                        left:19vh;
                        height: 49px;
                        width: calc(100% - 19vh);
                    ">

                    </section>
                </tr>
                <tr>
                    <section id="button">
                        <button @click="() => {
                            store.addSlave();
                            store.updateTable();
                        }" type="button">Button</button>
                    </section>
                </tr>
            </table>
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
        width: calc(100% - 190px);
        position: relative;
        margin-left:19vh;
    }

    </style>