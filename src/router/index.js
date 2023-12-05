import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/VtextAndVmodel',
      name: 'VtextAndVmodel',
      component: () => import('../views/VtextAndVmodel.vue')
    },
    {
      path: '/Vfor',
      name: 'Vfor',
      component: () => import('../views/Vfor.vue')
    },
    {
      path: '/Von',
      name: 'Von',
      component: () => import('../views/Von.vue')
    },
    {
      path: '/p',
      name: 'p',
      component: () => import('../views/p.vue')
    },
    {
      path: '/Vbind',
      name: 'Vbind',
      component: () => import('../views/Vbind.vue')
    },
    {
      path: '/VifandVshow',
      name: 'VifandVshow',
      component: () => import('../views/VifandVshow.vue')
    },
    {
      path: '/WatchAndComputed',
      name: 'WatchAndComputed',
      component: () => import('../views/WatchAndComputed.vue')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/props.vue')
    },
    {
      path: '/DataFlow',
      name: 'DataFlow',
      component: () => import('../views/DataFlow.vue')
    },
    {
      path: '/ProvideandInject',
      name: 'ProvideandInject',
      component: () => import('../views/ProvideandInject.vue')
    },
  ]
})

export default router
