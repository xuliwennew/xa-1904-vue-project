<template>
  <li>
    <div class="shop-info">
      <input type="checkbox" v-model="data.checked"
             class="check goods-check goodsCheck"/>
      <div class="shop-info-img">
        <a href="#">
          <img :src="data.pic"/>
        </a>
      </div>
      <div class="shop-info-text">
        <h4>
          {{data.title}}
        </h4>
        <div class="shop-brief">
          <span>重量:{{data.attrs.weight}}</span>
          <span>颜色:{{data.attrs.color}}</span>
          <span>版本: {{data.attrs.version}}</span>
        </div>
        <div class="shop-price">
          <div class="shop-pices">
            ￥<b class="price">{{data.price}}</b>
          </div>
          <div class="shop-arithmetic">
            <a class="minus">-</a>
            <span class="num">{{data.num}}</span>
            <a class="plus">+</a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: "Product",
    props: ["data", "pid", "sid"]  //data 商品信息  pid 商品编号 sid 店铺的编号
  }
</script>

<style scoped>

</style>
