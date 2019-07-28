import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
Vue.use(VueRouter)
// 初始化router对象
const router = new VueRouter({
  // 路由规则 routes
//   指定渲染位置app.vue
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'home', path: '/', component: Home }
  ]
})
export default router
