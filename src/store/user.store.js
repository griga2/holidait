import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import { useGlobalStore } from './global.store'


export const useUserStore = defineStore('user_store', () => {
    
    const store = useGlobalStore()
    const token = reactive({});
    const back_url = ref("http://localhost:3000");
    const acces_token = store.getToken();
    const login = ref('');
    const password = ref('');
    const name = ref('Виктор Корнеплод')
    
    return { token, name}
  })