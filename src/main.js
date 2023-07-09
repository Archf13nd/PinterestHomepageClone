import './assets/css/main.css'

import breakpointsPlugin from './_breakpoints_plugin.js'
import iconDirective from './directives/icon.js'
import i18n from './includes/i18n'
import { registerSW } from 'virtual:pwa-register'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

registerSW({ immediate: true })

const app = createApp(App)

app.use(router)
app.use(breakpointsPlugin)
app.use(i18n)
app.directive('icon', iconDirective)

app.mount('#app')
