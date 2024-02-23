<script setup>

import p_selectbox from '../components/p_selectbox.vue'
import p_input from '../components/p_input.vue'

import {ref} from 'vue'

const value = ref("");

</script>

<template>
    <main>
        Test component

        <p_selectbox
                :width="350" 
                :value="value"
                @change_variant="(variant) => {
                    value=variant;
                }"
                :title="'Должность'"    
                :variants='[{
                    text:"Разработчик 1С",
                    value:"hui"
                }]'
            ></p_selectbox>
            <p_input
                :title="'Должность'"
                v-model="name"
            ></p_input>
    </main>
</template>