import './assets/css/main.css'
import breakpointsPlugin from './_breakpoints_plugin.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.maxWidth

app.use(breakpointsPlugin)
app.use(router)

app.mount('#app')
