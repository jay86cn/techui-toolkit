import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as echarts from 'echarts';
window.echarts=echarts;

// import TechUIToolkit from "../package/techui-vue3-toolkit-source/index"
import TechUIToolkit from "../publish/techui-vue3-toolkit/index"
// import TechUIToolkit from "techui-vue3-toolkit"
import "./utils/license.js"

import vue3api from '@/plugins/vue3api'
import common from '@/plugins/common'
import vant from '@/plugins/vant'

const app = createApp(App);
TechUIToolkit(app).then(()=>{
  app.use(router)
  app.use(store)
  app.use(vue3api)
  app.use(common)
  app.use(vant)
  app.mount('#app')
})