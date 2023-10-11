import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import axios from 'axios'

export const useTableStore = defineStore('table_store', () => {
    
    const table = reactive({});
    const back_url = ref("http://192.168.0.10:3000");
    const current_period = ref('');
    const current_slave = ref('');
    const current_to_settings = ref('')


    const deletePeriod = async (periodId) => {
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${back_url.value}/period`,
        data : {periodId:periodId}
      };

      const response = await axios.request(config);
      console.log(response.data)

      await updateRow();
    }


    const createPeriod = async (day) => {

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/period`,
        data : day
      };

      const response = await axios.request(config);
      console.log(response.data)

      await updateRow();
    }

    const updatePeriod = async (day) => {

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/updatePeriod`,
        data : day
      };
      
      const response = await axios.request(config);
      console.log(response.data)

      await updateRow();
    }

    const updateRow = async (id) => {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/row`,
        data : id
      };

      const response = await axios.request(config);
      console.log(response.data)

      await updateRow();
    }
    
    const deleteSlave = async (id) => {
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${back_url.value}/slave`,
        data : slave
      };

      const response = await axios.request(config);
      console.log(response.data)

      await updateTable();
    }

    const updateSlave =  async (slave) => {``

      let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: `${back_url.value}/slave`,
        data : slave
      };

      const response = await axios.request(config);
      console.log(response.data)

      table.value.rows?.map( (row) => {
        if (row.slave.id == response.data.row.slave.id) {
          row = response.data;
        }
        }
      )
    }

    const addSlave =  async () => {
      const data = {
        "dangenMasterId":"6515bd540e4a06f8edfffbb9",
        "name":"slave 3"
      }

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/slave`,
        data : data
      };

      const response = await axios.request(config);
      console.log(response.data)

      table.value.rows?.push()
    } 

    const updateTable = async () => {

      const data = {
        "dangenMasterId":"6515bd540e4a06f8edfffbb9",
        "year":2023,
        "mounth":5,
      }

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/table`,
        data : data
      };

      const response = await axios.request(config);
      // console.log(response.data)

      table.value = await response.data;  


      console.log((table.value?.rows?.length * 49 * -1 ) + 'px')
      console.log(table.value.rows.length);
    }
    
    const create = async () => {

      const data = {
        "dangenMasterId":"6515bd540e4a06f8edfffbb9",
        "year":2023,
        "mounth":5,
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
      console.log(table.value);
    }

    return { table,
      current_period,
      current_to_settings,
      current_slave,
      updatePeriod,
      updateTable,
      createPeriod,
      addSlave,
      updateSlave,
      deletePeriod, 
      deleteSlave}
  })

  