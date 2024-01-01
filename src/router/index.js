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
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/count',
      name: 'count',
      component: () => import('../views/count.vue')
    },
    {
      path: '/quiz',
      name: 'quizFrontShow',
      component: () => import('../views/Quiz/QuizFrontShow.vue')
    },
    {
      path: '/quizAnswer',
      name: 'quizAnswer',
      component: () => import('../views/Quiz/QuziFrontAnswer.vue')
    },
    {
      path: '/quizAnswerCheck',
      name: 'quizAnswerCheck',
      component: () => import('../views/Quiz/QuziFrontAnswerCheck.vue')
    },
    {
      path: '/quizStatic',
      name: 'quizStatic',
      component: () => import('../views/Quiz/QuziFrontStatic.vue')
    },
    {
      path: '/quizBackShow',
      name: 'quizBackShow',
      component: () => import('../views/Quiz/QuizB/QuizBackShow.vue')
    },
    {
      path: '/quizBackNewQuiz',
      name: 'quizBackNewQuiz',
      component: () => import('../views/Quiz/QuizB/QuizBackNewQuiz.vue')
    },
    {
      path: '/quizBackNewQuestion',
      name: 'quizBackNewQuestion',
      component: () => import('../views/Quiz/QuizB/QuizBackNewQuestion.vue')
    },
    {
      path: '/quziBackQuizCheck',
      name: 'quziBackQuizCheck',
      component: () => import('../views/Quiz/QuizB/QuziBackQuizCheck.vue')
    },
    {
      path: '/quziBackRespond',
      name: 'quziBackRespond',
      component: () => import('../views/Quiz/QuizB/QuizBackRespond.vue')
    },
    {
      path: '/quizBackStatic',
      name: 'quizBackStatic',
      component: () => import('../views/Quiz/QuizB/QuizBackStatic.vue')
    },
  ]
})

export default router
