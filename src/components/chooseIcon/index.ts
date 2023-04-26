import { App } from 'vue';
import mChooseIcon from './src/index.vue';

export default {
    install (app : App) {
        app.component('m-choose-icon',mChooseIcon)
    }
}