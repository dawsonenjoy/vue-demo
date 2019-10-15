import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import mock from '@/mock/index'
Vue.use(ElementUI)
Vue.config.productionTip = true

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
