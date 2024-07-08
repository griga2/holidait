import MainView from '../../../view/MainView/MainView.vue'
import SlavesView from '../../SlaveView/SlaveView.vue'
import TestComponents from '../../TestCompinentov.vue'
import AnalSelaryView from '../../Anal/SelaryView/SelaryView.vue'

const LauoytRoutes = [
    { path: '/cadrs', component: SlavesView},
    { path: '/main', component: MainView },
    { path: '/structure', component: SlavesView},
    { path: '/testc', component: TestComponents},
    { path: '/selary_anal', component: AnalSelaryView}
]

export default LauoytRoutes;            