<template>
  <div class="home">
      <Header></Header>
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(itm,idx) of bannerlist" :key="idx">
          <img :src="itm" alt />
        </van-swipe-item>
      </van-swipe>
      <Prolist :prolist="prolist"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/header.vue'
import Prolist from '@/components/Prolist.vue'

import { Area , Swipe, SwipeItem, Icon } from 'vant';
import axios from 'axios'
import * as types from "@/store/types.js"

Vue.use(Area)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Icon)
export default {
  data(){
    return {
      prolist: [],
      bannerlist: []
    }
  },
  components: {
    Icon,
    Prolist,
    Header
  },
  mounted() {
    //请求商品列表的数据
    // console.log(this.$route)
    axios.get('http://localhost:3000/prolists').then(res=>{
      // console.log(res.data[0].data.item_list)
      this.prolist =res.data[0].data.item_list
    }).catch(err=>{
      console.log(err)
    })
    //轮播图数据请求
      axios.get('https://www.daxunxun.com/banner').then(res=>{
      // console.log(res.data)
        let arr = []
        res.data.map(itm => {
          arr.push('https://www.daxunxun.com' + itm)
          // console.log(arr)
          this.bannerlist = arr
        })
        }).catch(err=>{
          console.log(err)
        })
  },
  created() {
    this.$store.dispatch(types.FOOTER_NO,true)//去除footer
  },
  destroyed() {
    this.$store.dispatch(types.FOOTER_DIS,false)//加载footer
  }
}
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 3rem;
  img {
    width: 100%;
  }
}
</style>

