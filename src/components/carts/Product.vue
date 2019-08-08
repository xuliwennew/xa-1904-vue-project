<template>
  <li class="list-li" :data-type="0">
    <div class="shop-info">
      <input type="checkbox" @change="pcheck(sid,pid)" v-model="data.checked"
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
            <a class="minus" @click="minus(sid,pid)">-</a>
            <span class="num">{{data.num}}</span>
            <a class="plus" @click="add(sid,pid)">+</a>
          </div>
        </div>
      </div>
    </div>
    <div class="del" :data-type="0"></div>
  </li>
</template>

<script>
  export default {
    name: "Product",
    props: ["data", "pid", "sid","pcheck","add","minus"]  //data 商品信息  pid 商品编号 sid 店铺的编号
  }
</script>

<style scoped>
  .list-li {
    position: relative;
    overflow-x: hidden;
    transition: all 0.2s;
  }

  .list-li[data-type="0"] {
    transform: translate3d(0, 0, 0);
  }

  .list-li[data-type="1"] {
    transform: translate3d(-100px, 0, 0);
  }

  .del {
    position: absolute;
    top: 0;
    right: -100px;
    background-color: red;
    height: 100%;
    width: 100px;
  }
  .del[data-type="1"] {
    transform: translate3d(0px, 0, 0);
  }


</style>
