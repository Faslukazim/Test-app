import './index.css'

import { createApp } from 'vue'
import { FrappeUI } from 'frappe-ui'

import router from './router'
import App from './App.vue'

import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(FrappeUI)

app.use(resourcesPlugin)

app.component('Button', Button)
app.mount('#app')
