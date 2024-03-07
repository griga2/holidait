import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import axios from 'axios'
import {useGlobalStore} from '../../../store/global.store'

export const useTableStore = defineStore('table_store', () => {
    

    const dateNow = new Date()
    const tables = reactive({});
    const back_url = ref("http://localhost:3005");
    const current_period = ref('');
    const current_slave = ref('');
    const current_to_settings = ref('')
    const token = ref('')
    const data_now = reactive({
      year:dateNow.getFullYear(),
      mounth: dateNow.getMonth(),
    })
    const loader = ref(true);
  
    const globalStore = useGlobalStore();

    const getToken = async () => {
      token.value = await globalStore.getToken();
    } 

    const deletePeriod = async (periodId) => {
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${back_url.value}/period`,
        data : {periodId:periodId},
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);
      console.log(response.data)

      tables.tables.map((row) => {
        if (row.slave._id === response.data.slave._id) {
          row = response.data.row;
          console.log("row is update");
        }
      }) 
    }

    

    const createPeriod = async (data) => {
      console.log(data, "create prod resp data")
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/period`,
        data : data,
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);

      console.log(response.data, 'create period');

      tables.value.tables.map(table => {
        if (table.mounth === data.mounth) {
          return table.rows.map( row => {
            if (row.slaveId === data.slaveId) {
              const el = response.data.tables.filter((el=>{
                if(el.mounth === data.mounth) {
                    console.log("up period ");
                    return el;
                  }
                })
              )
              console.log(el);
              row.days = el[0].rows[0].days;
            }
            return row  
          })
        } else {
          return table
        }
      })

      
      return response.data.periodId;
    } 

    const updatePeriod = async (data) => {

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${back_url.value}/period`,
        data : data,
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };
      
      const response = await axios.request(config);
      console.log(response.data.tables)

      tables.value.tables.map(table => {
        if (table.mounth === data.mounth) {
          return table.rows.map( row => {
            if (row.slaveId === data.slaveId) {
              const el = response.data?.tables.filter((el=>{
                if(el.mounth === table.mounth) {
                    console.log("up period ");
                    return el;
                  }
                })
              )
              console.log(el);
              row.days = el[0].rows[0].days;
            }
            return row  
          })
        } else {
          return table
        }
      }) 

      return response.data.periodId;
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

      tables.value = response.table;
    }

    const updateSlave =  async (slave) => {``

      let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: `${back_url.value}/slave`,
        data : slave,
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);
      console.log(response.data)

      tables.value.tables?.map( (row) => {
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
        data : data,
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);
      console.log(response.data)

      tables.value.rows?.push();
    } 

    const updateTable = async () => {
      console.log("updateTable")
      const data = {
        "dangenMasterId":"652ed059c5d1200b6f3b2ab5",
        "year":data_now.year,
        "mounth":data_now.mounth
      }

      await getToken();

      console.log(token.value, 'token in get table')

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/table`,
        data : data,
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);
      // console.log(response.data)

      tables.value = await response.data;  


      console.log(response.data);
      console.log(tables.value?.tables?.length);
    }

    return { tables,
      current_period,
      current_to_settings,
      current_slave,
      updatePeriod,
      updateTable,
      createPeriod,
      loader,
      // updateRow,
      data_now,
      addSlave,
      updateSlave,
      deletePeriod, 
      deleteSlave}
  })

  