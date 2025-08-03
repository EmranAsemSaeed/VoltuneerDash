import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/volunteers',
    name: 'Volunteers',
    component: () => import('@/views/VolunteersView.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('@/views/EventsView.vue')
  },
  {
    path: '/matches',
    name: 'Matches',
    component: () => import('@/views/MatchesView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router