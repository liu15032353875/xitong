import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
Vue.use(ElementUI)
// 给VUE添加一个原型属性，在vue实例和组件中不用重复去引用，使用this.$http就能只用该方法
Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  // router挂载实例
  router,
  // 实例化根实例  render()渲染APP组件  然后挂载到#app的容器内
  render: h => h(App)
}).$mount('#app')
