import { createRouter, createWebHashHistory } from 'vue-router';
import MemoPage from '@/views/NotesPage.vue';
import StatsPage from '@/views/StatsPage.vue';
import EditorPage from '@/views/EditorPage.vue';
import AuthPage from '@/views/AuthPage.vue';

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
  },
  {
    path: '/editNote/:id',
    name: 'edit-note',
    component: EditorPage
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
