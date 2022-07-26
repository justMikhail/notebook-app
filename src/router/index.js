import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../pages/PostsPage.vue')
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: () => import('../pages/PostDetailPage.vue')
    }
  ]
})

export default router
