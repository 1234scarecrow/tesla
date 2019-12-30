import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import self from '../components/tesla/self.vue'
import personalCenter from '../components/tesla/personalCenter.vue'
import reguser from '../components/tesla/reguser.vue'
import artical from '../components/tesla/artical.vue'

Vue.use(VueRouter)

const routes = [
  // {path: '/',name: 'home',component: Home},
  // {path: '/about',name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {path:'/self',name:'self',component:self},
  {path:'/personalCenter',name:'personalCenter',component:personalCenter},
  {path:'/reguser',name:'reguser',component:reguser},
  {path:'/artical',name:'artical',component:artical}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
