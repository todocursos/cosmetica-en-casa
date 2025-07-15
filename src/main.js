import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import router from './router'

// Components
import App from './App.vue'


createApp(App)
.use(vuetify)
.use(router)
.mount('#app')
