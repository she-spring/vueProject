<template>
  <div class="service">
      <van-nav-bar title="售后服务" left-text="返回" left-arrow @click-left="onClickLeft" class="header">
          <van-icon name="wap-home" slot="right" size=".5rem" />
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions , mapGetters, mapState} from 'vuex'
import { NavBar,Toast ,Icon, Overlay, Dialog } from 'vant'
import * as types from "@/store/types.js"
Vue.use(NavBar).use(Icon ).use(Dialog ).use(Overlay).use(Toast)
export default {
  created(){
    this.$store.dispatch(types.FOOTER_NO,false)//去除footer
  },
  destroyed(){
    this.$store.dispatch(types.FOOTER_DIS,true)//加载footer
  },
  methods:{
    onClickLeft(){
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
