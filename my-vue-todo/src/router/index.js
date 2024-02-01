import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import Car from '../views/Car.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/car',
    component: Car
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router