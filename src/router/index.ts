import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: []
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: '',
          component: LoginView
        }
      ]
    }
  ]
})

export default router
