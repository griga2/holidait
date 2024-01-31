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
    border: 2px solid black;
    padding: 20px;
    border-radius: 0px;
    font-family: system-ui;
    color: #a9a9c9;
    position: absolute;
    margin: auto;
}
</style>