<template>
  <div>
    <jx-header></jx-header>
    <jx-cart-shop-list @shopCheck="shopCheckAll" v-if="cartInfo.shops" :data="cartInfo.shops"></jx-cart-shop-list>
    <jx-cart-footer @checkAll="cartCheckAll" v-if="cartInfo.shops" :data="cartInfo"></jx-cart-footer>
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
      "jx-header": Header,
      "jx-cart-footer": Footer,
      "jx-cart-shop-list": ShopList
    },
    created() {
      this._initPageData()
    },
    data() {
      return {
        cartInfo: {}  //组件中的数据
      }
    },
    methods: {

      /**
       * @private
       */
      _initPageData() {
        CartApi.getCartInfoByUserId(data => {
          console.log(data)
          this.cartInfo = data;
        })
      },

      /**
       * 全选 或反选
       */
      cartCheckAll() {
        console.log(this.cartInfo.checked)
        let checked = this.cartInfo.checked; //整个cartinfo状态
        this.cartInfo.shops.forEach((shop, sid) => {
          shop.checked = checked;
          shop.products.forEach((product, pid) => {
            product.checked = checked
          })
        })
      },

      /**
       * 根据店铺的编号修改状态
       * 店铺的全选与反选
       * @param sid
       */
      shopCheckAll(sid){
        console.log(sid)
        let checked = this.cartInfo.shops[sid].checked;
        this.cartInfo.shops[sid].products.forEach((product,pid)=>{
           product.checked = checked
        })
      }

    }
  }
</script>

<style scoped>
  @import "../assets/carts.css";
</style>
