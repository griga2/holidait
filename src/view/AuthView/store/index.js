import { defineStore } from "pinia";
import {ref} from "vue";
import axios from 'axios';
import { useGlobalStore } from '../../../store/global.store'


export const useAuthStore = defineStore('auth_store', () => {

  const globalStore = useGlobalStore()

  const login = ref('');
  const password = ref('');
  const fio = ref('');
  const mail = ref('');
  const phone = ref('');
  const company = ref('');
  const check_password = ref('');
  const password_is_good = ref('');

  // const back_url = 'http://147.45.102.34:3005'
  const back_url = ref('http://api.holidator.ru')
  // const back_url = "http://localhost:10001";

  const Registration = async () => {
  
    
        const data = {
            "name": fio.value,
            "mail": mail.value,
            "password": password.value,
            "phone": phone.value
        }
  
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${back_url}/auth/reg`,
          data : data,
        };
  
        const response = await axios.request(config);
        console.log(response.data)
  
        table.value = response.data;
    }

    const Login = async () => {

        const data = {
          login:login.value,
          password:password.value
      }

        console.log(data)

  
        let config = {
          method:'post',
          maxBodyLength: Infinity,
          url:`${back_url}/auth/login`,
            data:data,
        };
        
        try {
          const response = await axios.request(config);
          console.log(response);
          if ( response.status === 201) {
            await globalStore.saveToken(response.data.token); 
            return 201;
          } 
        } catch (err) {
          if (err.response.status == 401) {
            return 401;
          } else {
            return 500;
          }
        }
      }
    
    return {Registration, Login, login, password, fio, mail, company, check_password, password_is_good}

  })