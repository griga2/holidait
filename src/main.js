import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueClickAway from "vue3-click-away";

const pinia = createPinia();

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
  })


app.use(VueClickAway) 
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
