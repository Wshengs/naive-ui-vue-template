import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: {name: 'HelloWorld'}
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: () => import(/* webpackChunkName: "HelloWord" */ '_pages/HelloWorld.vue')
    }
]
export default routes
