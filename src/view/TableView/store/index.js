import { defineStore } from "pinia"
import { reactive } from "vue"

export const useTableStore = defineStore('table_store', () => {
    
    const table = reactive({});
    const back_url = ref("http://192.168.0.13:3000/")


    const updateTable = async () => {
      const config = {
        
      }
    }
    
    
  
    return {  }
  })