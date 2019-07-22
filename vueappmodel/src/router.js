import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

  import Home from '@/views/Home.vue'
  import Class from '@/views/class.vue'
  import detail from "@/components/detail.vue"

  import Cart from '@/views/cart.vue'
  import My from '@/views/my.vue'
  import Register from '@/views/my/register.vue'
  import Login from '@/views/my/login.vue'
  import Address from '@/views/my/address.vue'
  import Add_address from '@/views/my/add_address.vue'
  import Feedback from '@/views/my/feedback.vue'
  import Service from '@/views/my/service.vue'


let routes=[
  
      { 
        path: '/',
        name: 'home', 
        component: Home
      },
      { 
        path: '/class',
        name: 'class',
        component:Class,
      },

      { 
        path: '/detail/:id',
        name: 'detail',
        component:detail
      },
      { 
        path: '/cart',
        name: 'cart',
        component:Cart
      },
      { 
        path:'/my',
        name:'my',
        component:My
      },
      {
        path:"/register",
        name:"register",
        component:Register
      },
      {
      path:"/login",
      name:'login',
      component:Login
      },
      {
      path:"/address",
      name:'address',
      component:Address
      },
        {
          path:"/add_address",
          name:'add_address',
          component:Add_address
        },
        {
          path:"/feedback",
          name:'feedback',
          component:Feedback
        },
        {
          path:"/service",
          name:'service',
          component:Service
        }
  
]


let router=new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
