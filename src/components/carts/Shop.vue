<template>
  <div class="shop-group-item">
    <div class="shop-name">
      <input type="checkbox"
             class="check goods-check shopCheck">
      <h4>
        <a href="#">苹果专卖店</a>
      </h4>
      <div class="coupons">
        <span>领券</span>
        <em>|</em>
        <span>编辑</span>
      </div>
    </div>
    <jx-cart-shop-product-list></jx-cart-shop-product-list>
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
    components: {
      "jx-cart-shop-product-list": ProductList
    }
  }
</script>

<style scoped>

</style>
