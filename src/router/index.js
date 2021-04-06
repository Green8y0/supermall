import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const ShoppingCart = () => import('views/shoppingcart/ShoppingCart.vue')
const Me = () => import('views/me/Me.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart
  },
  {
    path: '/me',
    component: Me
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
