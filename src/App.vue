<script setup>
import DayCircle from './components/dayCircle.vue';
import TableView from './view/TableView/TableView.vue';


</script>

<template>
    <!-- <TableView></TableView> -->
    <div style="display: flex; flex-direction: row;"> 
    <DayCircle :is-dayoff="true" :status='"empty"'></DayCircle>
    <DayCircle :is-dayoff="true" :status='"box_start"'></DayCircle>
    <DayCircle :is-dayoff="true" :status='"box"'></DayCircle>
    <DayCircle :is-dayoff="true" :status='"box_holi"'></DayCircle>
    <DayCircle :is-dayoff="true" :status='"holi"'></DayCircle>
    <DayCircle :is-dayoff="true" :status='"holi_finish"'></DayCircle>
    </div>

</template>

<style scoped>


</style>
