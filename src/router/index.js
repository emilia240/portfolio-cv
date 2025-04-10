import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/selected-works',
      name: 'selected-works',
      component: () => import('../views/SelectedWorksView.vue'),
    },
  ],
})

export default router

