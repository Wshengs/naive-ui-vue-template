import {createApp} from 'vue'
import App from './App.vue'
import routes from './router'
import './assets/style.css'
import Title from '_components/title.vue'
const app = createApp(App)
app.component("Title", Title)
app.use(routes).mount('#app')

