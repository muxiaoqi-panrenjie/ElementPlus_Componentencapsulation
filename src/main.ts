import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'
import components from './components'
// 创建一个vue的应用实例
const app = createApp(App)
// 安装一个插件
app.use(router)
app.use(ElementPlus)
app.use(components);
for (let i in Icons) {
    // 注册全部组件
    app.component(`el-icon-${toLine(i)}`,(Icons as any )[i]);
}
// 将应用实例转化成挂载在一个容器元素中
app.mount('#app')
