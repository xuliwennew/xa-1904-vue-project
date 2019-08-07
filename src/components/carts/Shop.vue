<template>
  <div class="shop-group-item">
    <div class="shop-name">
      <input @change="shopCheck(sid)" type="checkbox" v-model="data.checked"
             class="check goods-check shopCheck">
      <h4>
        <a href="#">{{data.shopName}}</a>
      </h4>
      <div class="coupons">
        <span>领券</span>
        <em>|</em>
        <span>编辑</span>
      </div>
    </div>
    <jx-cart-shop-product-list :sid="sid" :data="data.products"></jx-cart-shop-product-list>
    <div class="shopPrice">
      本店总计：
      ￥<span class="shop-total-amount ShopTotal">16000</span>
    </div>
  </div>

</template>

<script>
  import ProductList from "./ProductList"

  export default {
    name: "shop",
    props:["data","sid"], //data 店铺信息 sid: 店铺的编号
    components: {
      "jx-cart-shop-product-list": ProductList
    },
    methods:{
      shopCheck(sid){
        this.$emit("shopCheck",sid)
      }
    }
  }
</script>

<style scoped>

</style>
