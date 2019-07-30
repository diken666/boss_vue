// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import '../static/css/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
