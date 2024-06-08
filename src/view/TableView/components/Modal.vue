<script setup>

</script>

<template>
    <main>
        <slot name="header">
            
        </slot>
        <slot name="bt_row">

        </slot>
        <slot name='body'>

        </slot>
        <slot name="botton">

        </slot>
    </main>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
</template>

<style scoped>   
    slot [name=header] {
        height: 46px;
        width: 100% ;
    }

    slot [name=header] {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    main {
        background-color: #DCE6EF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2px;
        justify-content: start;
        min-width: 100px;
        min-height: 32px; 
    }                                                                                           

</style>