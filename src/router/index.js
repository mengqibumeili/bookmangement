// 导入组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import User from '../components/user.vue'
import Book from '../components/book.vue'
import Welcome from '../components/welcome.vue'
import Borrowing from '../components/borrowing.vue'
import Visual from '../components/visual.vue'
Vue.use(VueRouter)

// 配置组件路由
const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/home',
    component: Home,
    redirect: '/visual',
    children:[
      { path: '/welcome', component: Welcome },
      {
        path:'/userlist',
        component:User
      },
      {
        path:'/booklist',
        component:Book
      },
      {
        path:'/borrowing',
        component:Borrowing
      },
      {
        path:'/visual',
        component:Visual
      },
    ]
  },
 
]

// 创建路由
const router = new VueRouter({
  routes
})

// 暴露接口
export default router
