import AuthView from "../view/AuthView/AuthView.vue"
import TableView from "../view/TableView/TableView.vue"
import {createRouter, createWebHistory} from 'vue-router'
import Authroutes from "../view/AuthView/routes"


  const routes = [
    
    { path: '/auth', component: AuthView, children: Authroutes },
    { path: '/table', component: TableView }
  ]

   const router = new createRouter({
    routes,
    history:createWebHistory("")
  })

  export default router