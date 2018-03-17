import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import DriveThrough from '@/components/Drive-Through'
import Register from '@/components/Register'
import Cart from '@/components/Cart'
import Balance from '@/components/Balance'
import test from '@/components/test'
import Orders from '@/components/Orders'
import About from '@/components/About'
import Order from '@/components/Order'
import Profile from '@/components/Profile'
import Scanner from '@/components/Scanner'
import DineIn from '@/components/DineIn'



import Not from '@/components/404'
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: function (to, from, next) {
        next()
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    
    {
      path: '/drive_through',
      name: 'Drive Through',
      component: DriveThrough,
      beforeEnter: function (to, from, next) {
        next()
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: function (to, from, next) {
        next()
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      beforeEnter: function (to, from, next) {
        next()
      },
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter: function (to, from, next) {
        window.localStorage.removeItem('userToken')
        next('/')
      },
    },
    {
      path: '/orders',
      name: 'Orders',
      component:Orders,
      beforeEnter: function (to, from, next) {
        next()
      }
    },
    {
      path: '/order',
      name: 'Order',
      component:Order
    },
    
    {
      path: '/balance',
      name: 'Balance',
      component:Balance,
      beforeEnter: function (to, from, next) {
        if(window.localStorage.getItem('userToken')!=null){
          next()          
        }else{
          next('/login')
        }
      },
      
    },
    {
      path: '/scanner',
      name: 'Scanner Dine In',
      component:Scanner      
    },
    {
      path: '/dine_in',
      name: 'Dine In',
      component:DineIn      
    },
    {
      path: '/about',
      name: 'About',
      component:About
    },
    { path: '*', component: Not }
  ]
})

// router.beforeEach((to,from,next)=>{
//   alert(123)
//   next()
// });

export default router
