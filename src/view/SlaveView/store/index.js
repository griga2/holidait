import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import axios from 'axios'

export const useTableStore = defineStore('slaveStore', () => {

    const slaves = ref();

    const getSlaves = () => {
        
    }

    return {
        slaves,
        getSlaves,  
    }
})