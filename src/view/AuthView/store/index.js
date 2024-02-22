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

  const back_url = 'http://localhost:3001'

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
  
        const response = await axios.request(config);
        console.log(response.data)
        const resp_data = response.data.name;
  
        if ( response.status === 201) {
          await globalStore.saveToken(response.data.token); 
          return 201;
        } else if (response.status == 402) {
          return 402;
        } else {
          return false;
        }
      }
    
    return {Registration, Login, login, password, fio, mail, company, check_password, password_is_good}
  })