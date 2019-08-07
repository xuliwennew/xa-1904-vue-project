<template>
  <ul>
    <jx-cart-shop-product></jx-cart-shop-product>
    <jx-cart-shop-product></jx-cart-shop-product>
  </ul>

</template>

<script>
  import Product from "./Product"

  export default {
    name: "ProductList",
    components: {
      "jx-cart-shop-product":Product
    }
  }
</script>

<style scoped>

</style>
