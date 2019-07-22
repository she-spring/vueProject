<template>
  <div class="my">
    <div class="header">
        <van-nav-bar title="我的聚美" right-text="按钮" :border="false"
        @click-right="onClickRight" class="header-t"  left-arrow @click-left="onClickLeft"
      />
      <p class="nav" v-if="!userLogin">
          <van-icon name="user-circle-o" class="img" size="1rem" color="#fff"/>
          <router-link to="/login" active-class="use" tag="b"><i>请</i>登录</router-link>
          <span>|</span>
          <router-link to="/register" active-class="use" tag="b"><i>去</i>注册</router-link>
      </p>
      <div class="user" v-if="userLogin">
          <div class="user-t"></div>
          <div class="user-c">
            <img :src="portrait" alt="">
            <span>{{username}}<br/>普通会员</span>
          </div>
          <div class="user-b">
              <p>
                <b @click="wish"><van-icon name="like-o" size=".5rem"/><br/><span>心愿单</span></b>
                <b @click="remind"><van-icon name="passed" size=".5rem"/><br/><span>开售提醒</span></b>
                <b @click="Collection"><van-icon name="star-o" size=".5rem"/><br/><span>收藏</span></b>
              </p>
          </div>
      </div>
    </div>
      <h6></h6>
    <div class="Order">
      <van-icon name="orders-o" size=".3rem"/>
      <span>我的订单</span>
      <b @click="Order">查看全部订单</b>
    </div>
    <div class="payment">
      <p><van-icon name="pending-payment" size=".4rem" /><br><span>待付款</span></p>
      <p><van-icon name="send-gift-o" size=".4rem"/><br><span>待收货</span></p>
      <p><van-icon name="comment-o" size=".4rem"/><br><span>待评价</span></p>
      <p><van-icon name="after-sale" size=".4rem"/><br><span>退货/退款</span></p>
    </div>
      <h6></h6>
    <div class="Assets"><van-icon name="pending-payment" size=".4rem" /><span>我的资产</span></div>
    <div class="Assets-b">
        <span>现金券</span>
        <span>红包</span>
        <span>聚美余额</span>
        <span>礼品卡</span>
    </div>
      <h6></h6>
    <ul class="footer1">
      <router-link to="/service" tag="li"><van-icon name="phone-o" size=".4rem"/><span>售后服务</span><van-icon name="arrow" size=".4rem"/></router-link>
      <router-link to="/feedback" tag="li"><van-icon name="todo-list-o" size=".4rem"/><span>意见反馈</span><van-icon name="arrow" size=".4rem"/></router-link>
      <router-link to="/address" tag="li"><van-icon name="logistics" size=".4rem"/><span>收货地址</span><van-icon name="arrow" size=".4rem"/></router-link>
      <li @click="MaskDis" v-if="userLogin"><van-icon name="close" size=".4rem"/><span>退出登录</span><van-icon name="arrow" size=".4rem"/></li>
      <li v-if="!userLogin"><van-icon name="close" size=".4rem"/><span>未登录</span><van-icon name="arrow" size=".4rem"/></li>
      <li><van-icon name="service-o" size=".4rem"/><span>400-123-888</span><van-icon name="arrow" size=".4rem"/></li>
    </ul>
    <h5>没事请拨打服务热线:400-123-8888<br>拨打前请记住你的ID</h5>
     

    <div class="Mask" v-if="LoginMask">
        <div class="can">你确定要退出登录吗</div> 
        <div class="Cancellation">
            <span @click="cancel">朕再想想</span>
            <b @click="Cancellation">确定</b>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions , mapGetters, mapState} from 'vuex'
import { NavBar,Toast ,Icon, Overlay, Dialog } from 'vant'
import * as types from "@/store/types.js"
Vue.use(NavBar).use(Icon ).use(Dialog ).use(Overlay).use(Toast)
export default {
  methods:{
    ...mapActions([
      types.CAN_CEL_LATION
    ]),
      onClickRight() {
        Toast('还没做功能');
      },
      onClickLeft() {
        this.$router.back()
      },
      wish(){
        Toast('心愿单');
      },
      remind(){
        Toast('开售提醒');
      },
      Collection(){
        Toast('收藏');
      },
      Order(){
        Toast('订单');
      },
      cancel(){
        this.$store.dispatch(types.MASK_DIS,false)
      },
     MaskDis(){
       this.$store.dispatch(types.MASK_DIS,true)
     }
    },
  computed:{
    ...mapGetters(["userLogin"]),
    ...mapState(['username','portrait',"LoginMask"])
  }
}
</script>

<style lang="scss" scoped>
$W:100%;
*{margin:0;padding:0;}
h6{width:100%;height:.2rem;background:#f1f1f1;}
.header{
  font:800 .32rem/2 "";
  width:$W;
  .van-nav-bar__title{color:#fff; }
  .header-t{ background:#fc5e9f;border:none; }
  .nav{
    width:100%; height:2rem; background:#fc5e9f; border-bottom:.01rem solid #f1f1f1;
    b{ width:2rem;height:1rem;color:#fff;
    i{color:#00f;margin:0 .1rem; }}
    span{ margin:0 .5rem;color:#fff}
    .img{width:100%;height:1rem;display:block;margin:0 auto;}
  }
  .user{
    height:2rem;background:#fc5e9f;position:relative;
    .user-t{ background:#fc5e9f;height:1rem;width:100%;}
    .user-c{position:absolute;width:3rem;height:1rem;overflow:hidden;top:.5rem;left:1rem;
    img{width:1rem;height:1rem;border-radius:50%; background:#99f;overflow: hidden;float: left;}
    span{width:2rem;height:1rem;float: left;font:.12rem/.22rem "";}}
    .user-b{ background:#fff;height:1rem;width:100%;
     p{float:right;width:60%;height:.5rem;margin-top:.2rem;
    b{text-align:center;font:800 .2rem/.2rem "";float: left;width:30%;}}}}}
.Order{
  width:100%;height:.5rem;font:.14rem/.5rem "";border-bottom:.01rem solid #f1f1f1;
  i{float: left;width:.5rem;height:.5rem;margin-top:.1rem;margin-left:.2rem;};
  span{float: left;width:1srem;height:.5rem};
  b{float:right;width:2rem;height:.5rem;}}
.payment{width:100%;height:1rem;display:flex;flex-direction: row; justify-content:space-between;
      p{width:20%;text-align: center;display:flex;flex-direction: column;
          i{line-height:.5rem}}}
.Assets{width:100%;height:.5rem;border-bottom:.01rem solid #f1f1f1;
      i{float: left;width:1rem;line-height:.5rem};
      span{float: left;width:1rem;line-height:.5rem}}
.Assets-b{width:100%;height:1rem;display:flex;flex-direction: row;justify-content:space-between;
        span{width:20%;line-height:1rem;text-align: center;display:flex;flex-direction: column;}}
.footer1{width:100%;
    li{height:.5rem;border-bottom:.01rem solid #f1f1f1;
        span{float: left; width:75%;text-align:left;font:800 .25rem/.5rem "";};
        i{float: left;margin-left:.1rem;width:10%;line-height:.5rem;}}}
h5{width:100%;background:#f1f1f1;text-align: left;padding:0 .2rem;box-sizing: border-box;}
.Mask{position: absolute;width:3rem;height:2rem;top:0;bottom:0;left:0;right:0;margin:auto;background:#f99;border:.01rem solid red;
    .can{width:100%;height:.95rem;font:800 .3rem/1rem "";};
    .Cancellation{background:#0f0;width:3rem;height:1rem;z-index:999;font:800 .2rem/1rem "";
        span{float: left;width:1.48rem;line-height:1rem;margin:0 auto;border:.01rem solid #fff;};
        b{float:right;width:1.48rem;line-height:1rem;margin:0 auto;border:.01rem solid #fff;}}}
</style>
