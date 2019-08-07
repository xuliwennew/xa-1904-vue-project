import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import ShopCart from "../views/ShopCart"

let router = new VueRouter({
  routes:[
    {path:"/",component:ShopCart}
  ]
})


export default router;
