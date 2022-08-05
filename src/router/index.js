import { createRouter, createWebHashHistory } from 'vue-router'
import MemoPage from '@/views/NotesPage.vue'
import StatsPage from '@/views/StatsPage.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: MemoPage
  },
  {
    path: '/stats',
    name: 'stats',
    component: StatsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
