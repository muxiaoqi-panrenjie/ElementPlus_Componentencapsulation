import { App } from 'vue';
import menu from './menu'
import mChooseIcon from './chooseIcon'
const components = [
    menu,
    mChooseIcon
  ]
export default {
    install(app: App) {
      components.map(item => {
        app.use(item)
      })
    }
}