import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import { useGlobalStore } from './global.store'


export const useUserStore = defineStore('user_store', () => {
    
    const store = useGlobalStore()
    const token = reactive({});
    const back_url = ref("http://147.45.102.34:3005");
    // const back_url = ref("http://localhost:3005");
    const login = ref('');
    const password = ref('');

    const Login = async () => {

      const data = {
        login:login.value,
        pasword:password.value
    }

      let config = {
        method:'post',
        maxBodyLength: Infinity,
        url:`${back_url.value}/table`,
        data:data,
      };

      const response = await axios.request(config);
      console.log(response.data)

      table.value = response.data;
    }

  

    const Registration = async () => {

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
    
    return { token, name}
  })