import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import axios from 'axios'

export const useGlobalStore = defineStore('global_store', () => {
  
  const getToken = async () => {
    return await localStorage.getItem('acces_token');
  }

  const saveToken = async (token) => {
    await localStorage.setItem('acces_token', token);
  }

  const getRefreshToken = async () => {
    return await localStorage.getItem('acces_token');
  }

  const updateToken = async () => {
    
  }

  return { 
      getToken,
      saveToken
    }
  })