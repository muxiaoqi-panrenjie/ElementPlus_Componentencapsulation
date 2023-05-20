import { App } from 'vue';
import menu from './menu'
import mChooseIcon from './chooseIcon'
import mChooseArea from './chooseArea'
import mTrend from './trend'
import mChooseTime from './chooseDate' 
import mNotification from './notification'
import mList from './list'
import mChooseCity from './chooseCity'
import mprogress from './progress'
import mcalendar from './calendar'
import mform from './form'
import mtable from './table'
import modalForm from './modalForm';
const components = [
    menu,
    mChooseIcon,
    mChooseArea,
    mTrend,
    mChooseTime,
    mNotification,
    mList,
    mChooseCity,
    mprogress,
    mcalendar,
    mform,
    mtable,
    modalForm
  ]
export default {
    install(app: App) {
      components.map(item => {
        app.use(item)
      })
    }
}