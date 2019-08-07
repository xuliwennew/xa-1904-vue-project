<template>
   <div>
     <jx-header></jx-header>
     <jx-cart-shop-list></jx-cart-shop-list>
     <jx-cart-footer></jx-cart-footer>
   </div>
</template>

<script>
  import Header from "../components/common/Header"
  import Footer from "../components/carts/Footer"
  import ShopList from "../components/carts/ShopList"
  import CartApi from "../apis/CartApi"
  export default {
    name: "ShopCart",
    components: {
      "jx-header":Header,
      "jx-cart-footer":Footer,
      "jx-cart-shop-list":ShopList
    },
    created(){
       this._initPageData()
    },
    data(){
       return {
          cartInfo:{}
       }
    },
    methods:{

      /**
       * @private
       */
      _initPageData(){
          CartApi.getCartInfoByUserId(data=>{
            console.log(data)
            this.cartInfo= data;
          })
      }
    }
  }
</script>

<style scoped>
  @import "../assets/carts.css";
</style>
