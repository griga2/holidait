import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import axios from 'axios'

export const useTableStore = defineStore('table_store', () => {
    
    const table = reactive({});
    const back_url = ref("http://26.212.63.71:3000");
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

      table.rows.map((row) => {
        if (row.slave._id === response.data.slave._id) {
          row = response.data.row;
          console.log("row is update");
        }
      }) 
    }


    const createPeriod = async (data) => {
      console.log(data)
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/period`,
        data : data
      };

      const response = await axios.request(config);
      console.log(response.data)

      table.value.rows.map((row) => {
        if (row.slave._id === response.data.slave._id) {
          row = response.data;
          console.log("row is update");
        }
      }) 
    } 

    const updatePeriod = async (data) => {

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/updatePeriod`,
        data : data
      };
      
      const response = await axios.request(config);
      console.log(response.data)

      table.rows.map((row) => {
        if (row.slave._id=== response.data.slave._id) {
          row = response.data;
          console.log("row is update");
        }
      }) 
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

      table = response.table;
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
        "dangenMasterId":"652ed059c5d1200b6f3b2ab5",
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
      console.log("updateTable")
      const data = {
        "dangenMasterId":"652ed059c5d1200b6f3b2ab5",
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


      console.log(response.data);
      console.log(table.value?.row?.length);
    }
  

    return { table,
      current_period,
      current_to_settings,
      current_slave,
      updatePeriod,
      updateTable,
      createPeriod,
      // updateRow,
      addSlave,
      updateSlave,
      deletePeriod, 
      deleteSlave}
  })

  