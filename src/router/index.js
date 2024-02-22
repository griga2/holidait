import AuthView from "../view/AuthView/AuthView.vue"
import TableView from "../view/TableView/TableView.vue"
import LayoutView from "../view/LayoutView/LayoutView.vue"
import LauoytRoutes from '../view/LayoutView/router'
import {createRouter, createWebHistory} from 'vue-router'
import { checkAuth } from '../middlewire/router_auth.js'

import Authroutes from "../view/AuthView/routes"



  const routes = [
    
    { path: '/auth', component: AuthView, children: Authroutes, name:"auth" },
    { path: "/layout", component: LayoutView, children: LauoytRoutes},
    { path: '/table', component: TableView },
    { }
    // { path: '/', redirect: '/b'},
  ]

   const router = new createRouter({
    routes,
    history:createWebHistory("")
  })


  router.beforeResolve((to, from, next) => {
    if (!checkAuth(to, from)) {
      
    } else {
      next()
    }
  })

  export default router