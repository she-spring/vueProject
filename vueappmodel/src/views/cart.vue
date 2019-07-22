<template>
    <div class="cart">
      <div class="Mask" v-if="!userLogin"> 请登录</div>
      <van-nav-bar title="购物车" right-text="分享" left-arrow @click-left="onClickLeft" @click-right="onClickRight" class="header"/>
      <div class="content" v-show="userLogin" v-if="cartlist.length> 0">
         <ul class="cartlist">
           <li class="item" v-for="(item , index) of cartlist" :key="index" >
            <input type="checkbox">
            <div class="img">
                <img :src="item.image_url_set.dx_image.url['320']" alt="">
            </div>
            <div class="info">
                <p>{{item.short_name}}</p>
                <span class="price">
                    <span>￥{{item.market_price}}</span>
                </span>
                <div>
                  <!-- <button class="btn">-</button>
                   <input type="text" value="1">
                   <button class="btn">+</button> -->
                   <button @click="deleteItem(item.id)">删除</button>

                </div>
            </div>
        </li>
         </ul>
      <van-submit-bar
        :price="totalPrice*100"
        button-text="提交订单"
        @submit="onSubmit"
      >
      </van-submit-bar>
      </div>
      <div class="content" v-show="userLogin" v-else>
       您还没有选购呢，快去逛逛吧<button @click="GO()">去逛逛</button>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import {mapState} from 'vuex'
import { NavBar,Toast,SubmitBar  } from 'vant';
import * as types from "@/store/types.js"
Vue.use(NavBar);
Vue.use(SubmitBar);
export default {  
    computed:{
      ...mapState({
      cartlist(state){
      return state.cartlist
     }
      }),
    ...mapState({
      userLogin(state){
       return state.userLogin
      }
    }   
    ),
    totalPrice(){
      return this.$store.getters.totalPrice
    },
  },
  mounted(){
    if(!this.userLogin){
      setTimeout(()=>{
        this.$router.push('/login')
      },1000)
    }
    //请求数据
    console.log(this.cartlist)   
  },

  methods:{
    GO(){
      this.$router.push('/')
    },
    onClickRight() {
      Toast('此功能待开发');
    },
    onClickLeft(){
      this.$router.back()
    },
    onSubmit(){
      Toast('此功能待开发');
    },

  },

}
</script>

<style lang="scss" scoped>
.cart{
  width:100%;
  height:100%;
  .Mask{
    width:50%;
    height:2rem;
    border:.1rem solid #fc5e9f;
    font:800 .40rem/2rem "";
    position:fixed;
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;  
    }
}
.cartlist {
    width: 98%;
    margin: 0.1rem 1%;
    // height: 1000px;
    background-color: #F5F5F5;
    overflow: auto;
    display: flex;
    flex-direction: column;
.item{
        width: 100%;
        height: 2rem;
        display: flex;
        flex-direction: row;
        background-color: #fff;
        margin-bottom: .2rem;
        .img{
            width: 30%;
            height: 99%;
        }
        .info{
            width: 60%;
            margin-left: 8%;
            p{
            font-size: 14px; 
            }
            .price{
                margin-top: 0.4rem;
                span{
                    font-size:18px;
                    color: #FE4070;
                }
            }
            .comment{
                color: #cccccc;
            }
        }
    }
    input{
      width: 0.5rem;
    }
    .btn{
      width: 0.3rem;
      background-color: #FE4070;
    }


   
}

</style>

