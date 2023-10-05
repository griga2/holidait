import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import axios from 'axios'

export const useTableStore = defineStore('table_store', () => {
    
    const table = reactive({});
    const back_url = ref("http://192.168.0.13:3000");


    const updateTable = async () => {

      const data = {
        "dangenMasterId":"6515bd540e4a06f8edfffbb9",
        "year":"2023",
        "mounth":"5"
    }

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/table`,
        data : data
      };

      const response = await axios.request(config);
      console.log(response.data)

      table.value = response.data;
    }
    
    
  
    return { table, updateTable }
  })