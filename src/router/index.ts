import { createRouter, RouteRecordRaw ,createWebHistory} from 'vue-router'
import Container from "@/components/container/index.vue"
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        component:Container,
    }
]
const router = createRouter({
    routes,
    history:createWebHistory()
})
export default router