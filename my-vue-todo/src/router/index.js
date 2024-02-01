import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import ShoppingCar from '../views/ShoppingCar.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/shopping',
    component: ShoppingCar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router