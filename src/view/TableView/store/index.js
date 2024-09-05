import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import axios from 'axios'
import {useGlobalStore} from '../../../store/global.store'
import { PutRequest, PostRequest, DeleteRequest, GetRequest } from "../../../middlewire/api"
export const useTableStore = defineStore('table_store', () => {
    

    const dateNow = new Date()
    const tables = reactive({});
    // const back_url = ref("http://147.45.102.34:3005");
    const back_url = ref(import.meta.env.VITE_API_ADRES);
    // const back_url = ref('https://api.holidator.ru')

    const current_period = ref('');   
    const current_slave = ref('');
    const current_to_settings = ref('')
    const token = ref('')
    const input_mode = ref('holiday')
    const input_mods = ref(['holiday','work time']);
    const data_now = reactive({
      year:dateNow.getFullYear(),
      mounth: dateNow.getMonth(),
    })
    const loader = ref(true);
  
    const globalStore = useGlobalStore();

    const getToken = async () => {
      token.value = await globalStore.getToken();
    } 

    const changeInputMode = () => {
      let index = input_mods.value.indexOf(input_mode.value)
      input_mode.value = input_mods.value[index + 1 < input_mods.value.length ? index + 1 : 0];
    }

    const goTable = async (axes) => {
      if (axes == 'left') {
        console.log('left')
        data_now.mounth = data_now.mounth - 1;
        data_now.year = data_now.mounth - 1 >= 0 ? data_now.year - 1 : data_now.year;
      }
      if (axes == 'right') {
        console.log('right')
        data_now.mounth = data_now.mounth + 1;
        data_now.year = data_now.mounth + 1 >= 11 ? data_now.year + 1 : data_now.year;
      }
      console.log(data_now)
      
      await updateTable();
      return false;
    }

    const CreateWorkDay = async (data) => {
      console.log(data, "create prod resp data")
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url.value}/shift`,
        data : data,
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);

      console.log(response.data, 'create period');

      await updateRow(data, response);

      return response.data.periodId;
    }
    
    const deletePeriod = async (data) => {
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${back_url.value}/period`,
        data : {
          periodId: data.periodId ,
          slaveId: data.slaveId,
          update_year: data.update_year,
          update_mounth: data.update_mounth
        },
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);
      console.log(data, response)

      updateRow(data, response)
    }

    const updateShift = async (data) => {
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${back_url.value}/shift`,
        data : data,
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);
      console.log(data, response)

      updateRow(data, response)
    }
    
    const deleteWorkday = async (data) => {
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${back_url.value}/shift`,
        data : {
          shiftId: data.shiftId ,
          slaveId: data.slaveId,
          update_year: data.update_year,
          update_mounth: data.update_mounth
        },
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);
      console.log(data, response)

      updateRow(data, response)
    }

    const updateRow = (data, response) => {
      tables.value.tables.map(table => {
            return table.rows.map( row => {
              if (row.slaveId === data.slaveId) {
                const el = response.data.tables.filter((el=>{
                  if(el.mounth === table.mounth) {
                      return el;
                    } 
                  })
                )
                console.log(el);
                row.days = el[0].rows[0].days;
              }
              return row
            })
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

      updateRow(data, response)

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

      updateRow(data, response)

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

    const updateSlave =  async (slave) => {
      console.log( {slave : slave});
      console.log(slave);
      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${back_url.value}/slave`,
        data : {slave : slave},
        headers: {
          authorization: `Bearer ${token.value}`
        }
      };

      const response = await axios.request(config);
      console.log(response.data)
    }

    const addSlave =  async () => {
      const data = {
        "dangenMasterId":"652ed059c5d1200b6f3b2ab5",
        "name":"slave 3"
      }

      console.log(back_url.value);

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
      tables.value.tables.slaves.map((el) => {
        return {
          id: el.id,
          name: el.name,
          is_changed: false
        }
      })
    } 

    return { tables,
      current_period,
      deleteWorkday,
      current_to_settings,
      current_slave,
      updatePeriod,
      changeInputMode,
      updateTable,
      createPeriod,
      loader,
      input_mode,
      CreateWorkDay,
      data_now,
      updateShift,
      addSlave,
      updateSlave,
      deletePeriod, 
      goTable,
      deleteSlave}
  })

  