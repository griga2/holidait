import { defineStore } from "pinia";
import {ref} from "vue";
export const useAuthStore = defineStore('auth_store', () => {
  const login = ref('');
  const password = ref('');
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
          data : data,
          acces_token: acces_token.value
        };
  
        const response = await axios.request(config);
        console.log(response.data)
  
        table.value = response.data;
    }

    const Login = async () => {

        const data = {
          login:login.value,
          pasword:password.value
      }
  
        let config = {
          method:'post',
          maxBodyLength: Infinity,
          url:`${back_url.value}/table`,
            acces_token: acces_token.value,
            data:data,
        };
  
        const response = await axios.request(config);
        console.log(response.data)
  
        table.value = response.data;
      }
    
    return {Registration, Login, login, password}
  })