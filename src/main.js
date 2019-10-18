import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import mock from '@/mock/index'
import * as filter from '@/filters/index'
import * as directives from '@/directives/index'
// 导入全局过滤器
Vue.use(ElementUI)
Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
