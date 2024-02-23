<script setup>
import {ref} from "vue"
const auth = ref(false)
</script>

<template>

    <main id="auth_main">
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
    position: fixed;
    margin: auto;
    background-color: #D1E3F4;
}
</style>    