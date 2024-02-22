import {useGlobalStore} from '../store/global.store'

const auth_routers = [
    'registarion',
    'authorization',
    'startauth',
    'authglobal'
]

export const checkAuth = async (to, from) => {
    // const globalStore = useGlobalStore();

        // if (auth_routers.includes(to.name)) {
        //     if (await globalStore.getToken()) {
        //         if (await globalStore.getRefreshToken()) {
        //             globalStore.updateToken();
        //         } else {
        //             return 0;
        //         }
        //     } else {

        //     }
        // } else {
        //     return 0;
        // }
}