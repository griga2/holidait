import {useGlobalStore} from '../store/global.store'
import axios from 'axios'


export const DeleteRequest = async (path, data) => {
  console.log(import.meta.env.VITE_API_ADRES)
  const back_url = import.meta.env.VITE_API_ADRES;
  const store = useGlobalStore();

    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${back_url}/${path}`,
        data : data,
        headers: {
          authorization: `Bearer ${await store.getToken()}`
        }
      };

      const response = await axios.request(config);
      console.log(data, response);
}

export const PostRequest = async (path, data) => {
  console.log(import.meta.env.VITE_API_ADRES)
  const back_url = import.meta.env.VITE_API_ADRES;
  const store = useGlobalStore();

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${back_url}/${path}`,
        data : data,
        headers: {
          authorization: `Bearer ${await store.getToken()}`
        }
      };

      const response = await axios.request(config);
      console.log(data, response);
}

export const GetRequest = async (path, data) => {
  console.log(import.meta.env.VITE_API_ADRES)
  const back_url = import.meta.env.VITE_API_ADRES;
  const store = useGlobalStore();

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${back_url}/${path}`,
        data : data,
        headers: {
          authorization: `Bearer ${await store.getToken()}`
        }
      };

      const response = await axios.request(config);
      console.log(data, response);
}

export const PutRequest = async (path, data) => {
  console.log(import.meta.env.VITE_API_ADRES)
  const back_url = import.meta.env.VITE_API_ADRES;
  const store = useGlobalStore();

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${back_url}/${path}`,
        data : data,
        headers: {
          authorization: `Bearer ${await store.getToken()}`
        }
      };

      const response = await axios.request(config);
      console.log(data, response);
}