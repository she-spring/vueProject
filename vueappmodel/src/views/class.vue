<template>
  <div class="class">
    <Header/>
    <div class="content">
      <div class="left">
        <ul>
          <li class="item" v-for="item of classifys" :key="item.id">
          </li>
        </ul>
      </div>
      <div class="right">
        商品分类的页面
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from '@/components/header.vue'
import * as types from "@/store/types.js"
export default {
  data(){
    return{
      list:[],
    }
  },
  components:{
      Header
  },
  created(){
    axios({url:'/api/classify'}).then(res=>{
      this.list=res.data.data
      })
  },
}
</script>

<style lang="scss" scoped>
.navsub{
  color:#fff;
  background:#f99;
  }
.class{
  width:100%;
  .content{
    width:100%;
    overflow: hidden;
    box-sizing:border-box;
    font:.14rem/2 "";
    .left{
      width:30%;float: left;
      box-sizing:border-box;
      border-right:.01rem solid #999;
      overflow: hidden;
      margin-bottom:1rem;
      }
    .right{
      float:left;
      width:70%;
      box-sizing:border-box;
      overflow: hidden;
      }
      }
      }

</style>
