import Auth from '../components/Auth.vue'
import Reg from '../components/Reg.vue'
import Start from '../components/Start.vue'

const Authroutes = [
    {
        path:'auth',
        component: Auth,
    },
    {
        path:'reg',
        component: Reg,
    },
    {
        path:'start',
        component: Start,
    }
]
export default Authroutes 