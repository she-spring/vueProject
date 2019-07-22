<template>
    <div class="login">
            <van-nav-bar
                title="登录"
                left-text=""
                right-text="注册"
                :left-arrow="true"
                :border="true"
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
            <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                     :error-message="usernameState"
                />

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    :error-message="passwordState"
                    required
                />
            </van-cell-group>

        <van-button type="warning" size="large"  round @click="login" class="primary">登录</van-button>
    </div>
</template>

<script>
import Vue from "vue"
import {NavBar,Toast,Field,Button,Cell, CellGroup,Dialog } from 'vant';
import {mapGetters,mapActions,mapState} from 'vuex'
import * as types from "@/store/types.js"
Vue.use(NavBar).use(Toast).use(Field).use(Button ).use(Cell).use(CellGroup).use(Dialog);
export default {
   created(){
    this.$store.dispatch(types.FOOTER_NO,false)//去除footer
  },
  destroyed(){
    this.$store.dispatch(types.FOOTER_DIS,true)//加载footer
  },
 computed: {
   ...mapState(['password',"username"]),
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    usernameIcon () {
      if (this.username === '') {
        return ''
      } else if ((/^1[3456789]\d{9}$/.test(this.username))) {
        return 'checked'
      } else {
        return ''
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 5) {
        return '密码格式错误'
      } else {
        return ''
      }
    },
    passwordIcon () {
      if (this.password === '') {
        return ''
      } else if (this.password.length >= 5) {
        return 'checked'
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions([
     types.USER_NAME,types.USER_PASSWORD
    ]),
    onClickLeft(){
      this.$router.back()
    },
    onClickRight(){
      this.$router.replace('/register')
    },
    login(){
      if (this.usernameIcon !== 'checked') {
        Toast('手机号格式错误')
        return null
      }
      if (this.passwordIcon !== 'checked') {
        Toast('密码格式错误')
        return null
      }
      // 提交数据到服务器
      fetch('https://www.daxunxun.com/users/login', {
        method: 'post',
        headers: { // 看后端的接口
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        if (data === 1) {
          
          
          this.$store.dispatch(types.IS_LOGIN,true)
          this.$router.back()
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '该用户还未注册，是否注册'
          }).then(() => {
            
            this.$router.push('/register')
          }).catch(() => {
           
          })
        } else if (data === -1) {
          Toast('密码错误')
        } else {
          Toast('登录失败')
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
    .primary{
        margin-top:1rem;
    }
</style>

