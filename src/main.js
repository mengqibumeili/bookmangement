// 项目入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/globel.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
// 配置请求的根路径
axios.defaults.baseURL = ' https://mobile-ms.uat.homecreditcfc.cn/mock/60d1579a4a9639001d427e5e/book'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
