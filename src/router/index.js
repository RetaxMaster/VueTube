import { createRouter, createWebHistory } from 'vue-router'
import Searcher from '@/views/Searcher.vue'
import About from '@/views/About.vue'

const routes = [

  {
    path: '/',
    name: 'Searcher',
    component: Searcher
  },

  {
    path: '/about',
    name: 'About',
    component: About
  }

  /* {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/ * webpackChunkName: "about" * / '../views/About.vue')
  } */

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
