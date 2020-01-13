import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title:'成大學代會'
    }
  },
  {
    path: '/conference_choose',
    name: 'conference_choose',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ConferenceChoose.vue'),
    meta:{
      title:'登入會議'
    }
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
