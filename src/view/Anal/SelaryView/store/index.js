import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import axios from 'axios'
import {useGlobalStore} from '../../../../store/global.store'


export const useSelaryAnalStore = defineStore('analSelatyStore', () => {

    const back_url = ref(import.meta.env.VITE_API_ADRES);
    const token = ref('')
    const anal = ref();
    const total = ref();
    const startDate = new Date()
    const date = ref([new Date(), new Date().setDate(startDate.getDate() + 7)]);
   

    const globalStore = useGlobalStore();
    const getToken = async () => {
        token.value = await globalStore.getToken();
      } 

    const getAnal = async () => {
        // console.log(start_time.value.getTime())
        console.log(date.value)
        // console.log(finish_time.value.getTime())
        const data = {
            dangenMasterId: "652ed059c5d1200b6f3b2ab5",
            paginationInput:{
                period:{
                    start:date.value[0].getTime(),
                    finish:date.value[1].getTime(),
                },
                pagination:{
                    
                }
            }
        };
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${back_url.value}/anal/salary`,
            data: data,
            headers: {
              authorization: `Bearer ${token.value}`
            }
          };
          const response = await axios.request(config);
          console.log(data, response)
          anal.value = response.data.slaves;
          total.value = response.data.total;
    }

    return {
        anal,
        getAnal,  
        total,
        getToken,
        date,
        token,
    }
})