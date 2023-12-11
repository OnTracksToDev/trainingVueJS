import { createRouter, createWebHistory } from 'vue-router'
import PageParent from '../views/PageParent.vue'
import StoreView from '../views/StoreView.vue'
import ArticlesDetailsView from '../views/ArticlesDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageParent
    },
    {
      path: '/boutique',
      name: 'store',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: StoreView
    },
    {
      path: '/articles/:id',
      name: 'ArticlesDetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ArticlesDetailsView
    }
  ]
})

export default router
