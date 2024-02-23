import MainView from '../../../view/MainView/MainView.vue'
import SlavesView from '../../SlaveView/SlaveView.vue'
import TestComponents from '../../TestCompinentov.vue'

const LauoytRoutes = [
    { path: '/cadrs', component: SlavesView},
    { path: '/main', component: MainView },
    { path: '/structure', component: SlavesView},
    { path: '/testc', component: TestComponents}
     
]

export default LauoytRoutes;