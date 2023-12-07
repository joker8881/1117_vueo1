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
    {
      path: '/User/:userId',
      name: 'User',
      component: () => import('../views/User.vue'),
      props:true
    },
    {
      path: '/RouteFam',
      name: 'RouteFam',
      component: () => import('../views/RouteFam.vue'),
      children:[
        {
          path:'RouteChild1',
          component:() => import ('../components/RouteChild1.vue')
        },
        {
          path:'RouteChild2',
          component:() => import ('../components/RouteChild2.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: '/Vslot',
      name: 'Vslot',
      component: () => import('../views/Vslot.vue'),
    },
  ]
})

export default router
