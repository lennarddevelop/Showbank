import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ShowDetail from '../views/ShowDetail.vue'
import Search from '../views/Search.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/show/:id',
    component: ShowDetail,
    name: 'ShowDetail'
  },
  {
    path: '/search',
    component: Search,
    name: 'Search'
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
