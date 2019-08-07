<template>
  <div class="shopping">
    <jx-cart-shop></jx-cart-shop>
    <jx-cart-shop></jx-cart-shop>
  </div>
</template>

<script>
  import Shop from "./Shop"

  export default {
    name: "ShopList",
    components: {
      "jx-cart-shop": Shop
    }
  }
</script>

<style scoped>

</style>
