import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import KittensIndex from '../views/KittensIndex.vue'
import KittensShow from '../views/KittensShow.vue'
import KittensNew from '../views/KittensNew.vue'
Vue.use(VueRouter)
import KittensEdit from '../views/KittensEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kittens',
    name: 'KittensIndex',
    component: KittensIndex
  },
  {
    path: '/kittens/new',
    name: 'kittens-new',
    component: KittensNew
  },
  {
    path: '/kittens/:id',
    name: 'kittens-show',
    component: KittensShow
  },
  {
    path: '/kittens/:id/edit',
    name: 'kittens-edit',
    component: KittensEdit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
