import { createRouter, createWebHashHistory } from 'vue-router';
import {useAuthStore} from '@/stores/storeAuth';
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
  routes,
})

// navigation guards
router.beforeEach(async (to) => {
  const authStore = useAuthStore();
  if (!authStore.user.id && to.name !== 'auth') {
    return { name: 'auth' };
  }
  if (authStore.user.id && to.name === 'auth') {
    return false;
  }
})

export default router;
