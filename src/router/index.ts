import { createRouter, RouteRecordRaw ,createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue"
import Menu from "@/views/menu/menu.vue"
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/menu',
        component:Menu
    }
]
const router = createRouter({
    routes,
    history:createWebHistory()
})
export default router