import Vue from 'vue'
import VueRouter from 'vue-router'
import cart from "./routes/cart"
import center from "./routes/center"
import classify from "./routes/classify"
import home from "./routes/home"
Vue.use(VueRouter)

const routes = [
    cart,
    center,
    classify,
    home,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
