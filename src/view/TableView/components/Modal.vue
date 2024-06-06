<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps(['item_type','item_id'])
const emit = defineEmits(["delete","block","go_left","go_right"])

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
    main > slot[name=bt_row]{
        background-color: #DCE6EF;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px;
        justify-content: center;
    }

</style>