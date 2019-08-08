<template>
  <ul>
    <jx-cart-shop-product :add="add" :minus="minus" :pcheck="pcheck" :data="product" :sid="sid" :pid="pid" v-for="(product,pid) in data"></jx-cart-shop-product>
  </ul>

</template>

<script>
  import Product from "./Product"

  export default {
    name: "ProductList",
    props:["data","sid","pcheck","add","minus"], //data 商品列表信息 sid 店铺的编号
    components: {
      "jx-cart-shop-product":Product
    }
  }
</script>

<style scoped>

</style>
