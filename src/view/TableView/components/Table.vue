<script setup>


dfndfnconst table = {
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
                        <a class="day">
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="40.0198" y="40.7456" width="40" height="40" rx="6" transform="rotate(-180 40.0198 40.7456)" fill="#9AB0FE"/>
                                <path d="M8.53484 39.2305L38.4638 9.30153C41.6136 6.1517 39.3828 0.765991 34.9282 0.765991H4.9993C2.23787 0.765991 -0.000701904 3.00457 -0.000701904 5.76599V35.6949C-0.000701904 40.1494 5.38501 42.3803 8.53484 39.2305Z" fill="#FFE1A8"/>
                                <path d="M15.2834 0.779186L39.9984 26.2793L40.1506 12.7322L40.2162 6.89613L40.0006 4.30765L39.0024 2.29009L37.5025 1.28141L35.5025 0.777178L33.0025 0.777426L27.0025 0.778022L15.2834 0.779186Z" fill="#FF7A7A"/>
                                </svg>
                        </a>
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
