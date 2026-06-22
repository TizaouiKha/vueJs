import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/pages/Home.vue'
import Checkout from '../src/pages/Checkout.vue'
import Dashboard from '../src/pages/Dashboard.vue'
import DashboardAccount from '../src/pages/DashboardAccount.vue'
import DashboardOrders from '../src/pages/DashboardOrders.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/checkout', component: Checkout },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: 'account', component: DashboardAccount },
      { path: 'orders', component: DashboardOrders },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
