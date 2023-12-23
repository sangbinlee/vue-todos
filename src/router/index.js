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
      path: '/todo',
      name: 'todo',
      component: () => import('../components/todo.vue')
    },
    {
      path: '/json',
      name: 'json',
      component: () => import('../components/json.vue')
    },
    {
      path: '/json-view/:id',
      name: 'json-view',
      component: () => import('../components/JsonView.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/Modal.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/SetupView.vue')
    },
    {
      path: '/dark',
      name: 'dark',
      component: () => import('../views/DarkView.vue')
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('../views/BoardView.vue')
    },
    {
      path: '/write',
      name: 'write',
      component: () => import('../views/BoardWrite.vue'),
      meta: {  
        breadcrumb: "write",
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Logins' })
//   else next()
// })


export default router
