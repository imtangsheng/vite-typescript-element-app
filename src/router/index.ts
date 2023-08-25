import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'test',
      component: () => import('@/views/test.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue') 
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/404.vue')
    },
  ]
})

export default router