import AuthView from "../view/AuthView/AuthView.vue"
import TableView from "../view/TableView/TableView.vue"
import {createRouter, createWebHistory} from 'vue-router'



  const routes = [
    { path: '/auth', component: AuthView },
    { path: '/table', component: TableView }
  ]

   const router = new createRouter({
    routes,
    history:createWebHistory("")
  })

  export default router