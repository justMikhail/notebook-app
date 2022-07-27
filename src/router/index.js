import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import PostsPage from '../pages/PostsPage.vue';
import PostDetailsPage from '../pages/PostDetailPage.vue';
import ModalsPage from '../pages/ModalsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsPage
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostDetailsPage
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsPage
    }
  ]
});

export default router;
