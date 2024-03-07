<script setup>
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(["delete","block","go_left","go_right"])
const props = defineProps(["periodId",""])

</script>

<template>
    <main>
        <article @click="$emit('block',props.periodId)">
            блок
        </article>
        <article @click="$emit('delete',props.periodId)">
            дел
        </article>
        <article @click="$emit('go_left',props.periodId)">
            лув
        </article>
        <article @click="$emit('go_right',props.periodId)">
            прав
        </article>
    </main>
</template>

<style scoped>
    main{
        background-color: grey;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px;
        justify-content: center;
    }

    main article{
        background-color: #FFFFFF;
        height: 40px;
        width: 40px;
        border-radius: 5px;
        margin: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>