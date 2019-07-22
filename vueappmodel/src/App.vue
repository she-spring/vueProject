<template>
  <div id="app">
    <router-view></router-view>

    <ul id="footer" v-show="displayFooter">
        <router-link to="/" active-class="footer" tag="li">
         <van-icon name="wap-home" size=".4rem"/>
          <span>首页</span>
        </router-link>
        <router-link to="/class" active-class="footer" tag="li">
          <van-icon name="qr" size=".4rem"/>
          <span>分类</span>
        </router-link>
        <router-link to="/cart" active-class="footer" tag="li">
          <van-icon name="shopping-cart-o" size=".4rem"/>
          <span>购物车</span>
        </router-link>
        <router-link to="/my" active-class="footer" tag="li">
          <van-icon name="contact" size=".4rem"/>
          <span>我的</span>
        </router-link>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'
  import { Icon } from 'vant';
  Vue.use(Icon);
  export default {
    computed:{
      ...mapState([
        'displayFooter'
      ])
    }
  }
</script>

<style lang="scss">
$W:100%;
li{
  list-style: none
  }
*{
  margin:0;
  padding:0
  }
#app {
  font-size:.14rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  overflow: auto;
  // display: flex;
}
#footer{
  height:1rem;
  position:fixed;
  bottom:0;
  margin:0 auto;
  width:$W;
  background: #ffffff;;
  border-top:.01rem solid #cccccc;
  display:flex;
  justify-content:space-around;
  li{
    margin:0.1rem .1rem;
    // font-weight: bold;
    color: #9C9C9C;
    width:1rem;
    i{
        width:1rem;
        height:.5rem;
        display:block;
      }
      span{
        width:1rem;
        height:.5rem;
        display: block;
        // font:800 .3rem/.5rem "";
      }
    &.router-link-exact-active {
      color: #f99;
    }
  }
}
</style>
