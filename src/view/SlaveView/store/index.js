import { defineStore } from "pinia"
import { reactive,ref } from "vue"
import { PostRequest } from "../../../middlewire/api"

export const useSlavesStore = defineStore('slaveStore', () => {

    const slaves = ref();

    const getSlaves = () => {
        PostRequest(
            'slaves/slaves',
            {
                dangenMaseterId:""
            }
        )
    }

    return {
        slaves,
        getSlaves,  
    }
})