import { createApp } from 'vue'
import App from './App.vue'
import mdsp from '@crasty/mdsp-vue'

const app = createApp(App)
app.use(mdsp)
app.mount('#app')
