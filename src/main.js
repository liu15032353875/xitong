import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  // router挂载实例
  router,
  // 实例化根实例  render()渲染APP组件  然后挂载到#app的容器内
  render: h => h(App)
}).$mount('#app')
