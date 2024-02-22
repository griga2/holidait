<script setup>
import {ref} from "vue"
const auth = ref(false)
</script>

<template>

    <main>
        <RouterView></RouterView> 
    </main>

</template>

<style scoped>
*{
    padding:0px;
    margin:0px;
}
main{
    width: 100%;
    height: 100%;
    text-align: center;
    /* border: 2px solid black; */
    padding: 20px;
    border-radius: 0px;
    color: #D1E3F4;
    position: absolute;
    margin: auto;
}
</style>