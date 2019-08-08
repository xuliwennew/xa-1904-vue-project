<template>
  <div class="shopping">
    <jx-cart-shop :add="add" :minus="minus" :pcheck="pcheck" @shopCheck="shopCheck" :key="sid" :data="shop" :sid="sid" v-for="(shop,sid) in data"></jx-cart-shop>
  </div>
</template>

<script>
  import Shop from "./Shop"

  export default {
    name: "ShopList",
    props:["data","pcheck","add","minus"], //data 代表店铺列表
    components: {
      "jx-cart-shop": Shop
    },
    methods:{
      shopCheck(sid){
        console.log(sid)
        this.$emit("shopCheck",sid)
      }
    }
  }
</script>

<style scoped>

</style>
