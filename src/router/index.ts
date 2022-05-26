import { createRouter, createWebHashHistory, Router } from 'vue-router'
import routes from './router'
const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route as Router
