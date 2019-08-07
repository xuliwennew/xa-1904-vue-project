<template>
  <div class="payment-bar">
    <div class="all-checkbox">
      <input @change="sCheckAll" type="checkbox" v-model="data.checked" class="check goods-check"/>
      全选
    </div>
    <div class="shop-total">
      <strong>
        总价：
        <i id="AllTotal" class="total">{{data | countTotalPrice}}</i>
      </strong>
      <span>减免：100</span>
    </div>
    <a href="#" class="settlement">结算</a>
  </div>
</template>

<script>
  export default {
    name: "JXfooter",
    props: ["data"] , //cartinfo props readonly
    methods:{
      //向父组件发起请求
      sCheckAll(){
        this.$emit("checkAll")
      }
    },
    filters:{
      /**
       * 用来计算总价格的一个过滤器  computed ->data filter -> xxx
       * @param cartinfo
       * @returns {number}
       */
      countTotalPrice(cartinfo){
        let total =0;
        cartinfo.shops.forEach((shop,sid)=>{
          shop.products.forEach((product,pid)=>{
             if(product.checked){
               total += product.price * product.num
             }
          })
        })
        return total
      }
    }
  }
</script>

<style scoped>

</style>
