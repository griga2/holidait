<script setup>
 import GearSvg from "../../../assets/svg/gear.svg";
 import GoOuth from "../../../assets/svg/go_outh.svg";

const {

} = defineProps()

</script>


<template>
    <main>
        <section
        @click="() => {}">
            <img :src="GearSvg" alt="my-logo" />
            <p>Личные настройки</p>
        </section>
        <section
        @click="() => {}"       
        style="margin-top: 10px;">
            <img :src="GoOuth" alt="my-logo" />
            <p>Выход</p>
        </section>
    </main>
</template>

<style scoped>

main{
    position: relative;
    padding: 10px 0px;
    z-index: 50;
    display: flex;
    height: 100px;
    width: 220px;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: -2px -2px 5px 2px rgba(0, 0, 0, 0.2);
}

section{
    display: flex;
    flex-direction: row;
    width: 100%;
    transition: all 0.2s;
    height: 42px;
    padding: 5px 10px;

}

section p {
    padding-left: 5px;
}
section .activ{
    background-color: #C0D2E2;
}

section:hover{
    background-color: #C0D2E2;
}
 
</style>