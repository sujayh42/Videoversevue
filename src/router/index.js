import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sub',
    name: 'sub',
    component: () => import('../views/sub.vue')
  },
  {
    path: '/sub2',
    name: 'sub2',
    component: () => import('../views/sub2.vue')
  },
  {
    path: '/HomeView',
    name: 'home1',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue')
  },
  {
    path: '/single1',
    name: 'single1',
    component: () => import('../views/single1.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
