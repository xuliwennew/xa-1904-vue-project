<template>
  <x-loading v-if="isLoading"></x-loading>
  <div v-else>
    <jx-header></jx-header>
    <jx-cart-shop-list :add="addNum" :minus="minusNum" :pcheck="productSelectAll" @shopCheck="shopCheckAll"
                       v-if="cartInfo.shops" :data="cartInfo.shops"></jx-cart-shop-list>
    <jx-cart-footer @checkAll="cartCheckAll" v-if="cartInfo.shops" :data="cartInfo"></jx-cart-footer>
  </div>
</template>

<script>
  import Header from "../components/common/Header"
  import Footer from "../components/carts/Footer"
  import ShopList from "../components/carts/ShopList"
  import CartApi from "../apis/CartApi"
  import XLoading from "../components/common/XLoading"

  export default {
    name: "ShopCart",
    components: {
      "jx-header": Header,
      "jx-cart-footer": Footer,
      "jx-cart-shop-list": ShopList,
      XLoading
    },
    created() {
      this._initPageData()
    },
    data() {
      return {
        isLoading:true,
        cartInfo: {}  //组件中的数据
      }
    },
    methods: {

      /**
       *  统计
       **/
      _count(cartinfo){
        let total =0
        cartinfo.shops.forEach((shop, sid) => {
          shop.products.forEach((product, pid) => {
             if(product.checked){
               console.log(11111)
               total += product.price * product.num
             }
          })
        })
        return total;
      },

      /**
       * @private
       */
      _initPageData() {
        setTimeout(()=>{
          CartApi.getCartInfoByUserId(data => {
            console.log(data)
            let total = this._count(data)
            data.totalPrice = total;
            this.cartInfo = data;
            console.log(this.cartInfo)
            this.isLoading = false;
          })
        },3000)
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
      shopCheckAll(sid) {
        console.log(sid)
        let checked = this.cartInfo.shops[sid].checked;
        this.cartInfo.shops[sid].products.forEach((product, pid) => {
          product.checked = checked
        });

        //当店铺列表中的店铺的状态有一个为false,全选的状态false, 只有全部为true,true
        //for forEach for in map filter reduce
        let isChecked = this.cartInfo.shops.every((shop, sid, arr) => {
          return shop.checked == true
        })

        this.cartInfo.checked = isChecked
      },

      /**
       *  商品单选
       * @param sid 店铺的编号
       * @param pid 商品的编号
       */
      productSelectAll(sid, pid) {
        console.log(sid, pid)
        //判断是那个店铺被点击了
        let isChecked = this.cartInfo.shops[sid].products.every((product, pid, arr) => {
          return product.checked == true
        })

        //当前的店铺的状态
        this.cartInfo.shops[sid].checked = isChecked;

        let issChecked = this.cartInfo.shops.every((shop, sid, arr) => {
          return shop.checked == true
        })

        //cartinfo的状态
        this.cartInfo.checked = issChecked

      },

      /**
       * 根据店铺编号+商品编号，修改商品的数量
       * @param sid
       * @param pid
       */
      addNum(sid, pid) {
        console.log(sid, pid)
        this.cartInfo.shops[sid].products[pid].num++
      },

      /**
       * 根据店铺编号+商品编号，修改商品的数量
       * @param sid
       * @param pid
       */
      minusNum(sid, pid) {
        console.log(sid, pid)
        if (this.cartInfo.shops[sid].products[pid].num <= 1) {
          this.cartInfo.shops[sid].products[pid].num = 1
        } else {
          this.cartInfo.shops[sid].products[pid].num--
        }
      }


    },
    watch: {
      /**
       * 监听cartinfo
       * @param o
       * @param n
       */
      cartInfo: {
        //n 变化的值，o 旧值
        handler(n, o) {

          console.log("data变化了:"+n.totalPrice)
          if(n.totalPrice >=1000){
            console.log("送1000积分！")
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  @import "../assets/carts.css";
</style>
