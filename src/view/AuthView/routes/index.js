import Auth from '../components/Auth.vue'
import Reg from '../components/Reg.vue'
import Start from '../components/Start.vue'

const Authroutes = [
    {
        path:'auth',
        name:"authorization",
        component: Auth,
    },
    {
        path:'reg',
        name:"registarion",
        component: Reg,
    },
    {
        path:'start',
        name:"startauth",
        component: Start,
    }
]
export default Authroutes 