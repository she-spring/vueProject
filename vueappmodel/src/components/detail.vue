<template>
  <div class="box">
    <div class="container">
      <van-nav-bar 
        left-text=""
        right-text="分享"
        left-arrow
        @click-left="onClickLeft"

      />
      <div class="content1">
        <img :src="images" alt />
        <div class="info">
        <span class="price">￥{{market_price}}</span>
        <span class="yogoumai">已购买{{fake_total_sales_number}}件</span>
        <div class="name">{{name}}</div>
        <div class="address">地址</div>
        <div class="yunfei">运费</div>
        <div class="intr">说明</div>
        </div>
        <div class="pro">
          <div class="title">商品参数</div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"/>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart()"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="addCart()"/>
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </footer>   
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import Vant from 'vant'
import * as types from '@/store/types.js'
import { NavBar, Swipe, SwipeItem, } from 'vant'
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem)

export default {
//  props: ['details'],

  data () {
    return {
      images: '',
      market_price:'',
      fake_total_sales_number:'',
      name:''  
    }
  },

  mounted () {
    //请求接口数据
    const id = this.$route.params.id
    console.log(id)
    axios.get(`http://localhost:3000/details?id=${id}`).then(res => {
      console.log(res.data)
      this.images = res.data[0].image_url_set.dx_image.url["800"]
      this.market_price = res.data[0].market_price
      this.fake_total_sales_number = res.data[0].fake_total_sales_number
      this.name = res.data[0].name
      this.arr = res.data
    })
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    },
    goCart(){
        this.$router.push('/cart')
    },
    addCart() {
     this.$store.commit('changeCartList',this.arr)
    }, 
  },
}
</script>

<style lang="scss" scoped>
.content1 {
  overflow:auto;
  .info{
    margin: .3rem;
  }
  .price{
    color: #FE4679;
    font-size: 28px;
  }
  .name{
    color: #333;
    font-size: 14px;
    margin-top: .4rem;
  }
  .title{
    font-size: 14px;
    color: #333;
    margin: .3rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .info>span:nth-child(2){
    margin-left: 2rem;
  }
  .address,.yunfei,.intr{
    height: .6rem;
    border-bottom: 1px solid #f5f5f5;
    margin-top: .1rem;
    color: #C1C1C1;
    font-size: 14px;

  }
  .address{
    margin-top: .5rem;
  }
  .procontent{
    width: 100%;
    background-color: #ccc;
  }
}
</style>
