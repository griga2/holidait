<script setup>


const table = {
    old:{
        length:31,
    },
    now:{
        length:30,
    },
    next:{
        length:31,
    },
    rows:[
        {
            slave:{

            },
            old:[
                {
                    type:"",
                    num:"",
                week_day:"",
                }
            ],
            now:[
                {
                    type:"",
                    num:"",
                week_day:"",
                }
            ],
            next:[
                {
                    type:"",
                    num:"",
                week_day:"",
                }
            ]
        }

    ]
};

const old_table = new Array(table.old.length);

</script>


<template>

    <head>

    </head>
    <main>
            
        <section id="main_table_block">
            <table id="left_bar">
                <tr class="slave_name" v-for="row in table.rows">
                    <article id="">
                        <a class="slave">{{row.slave.name}}</a>
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

<style>

#left_bar{
    height: 100%;
    width: 10vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    position: absolute;
    background-color: white;
}


#left_bar .slave{

}

.mount_row{
   
}

.slave_name{
    position: sticky;
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
}

#main_table_block{
    display:inline-block;
    overflow-x: scroll;
    width: 100%;
}

</style>
