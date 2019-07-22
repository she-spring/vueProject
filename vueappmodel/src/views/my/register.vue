<template>
    <div class="register">
        <van-nav-bar
                title="注册"
                left-text="返回"
                right-text="登录"
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

        <van-cell-group>
            <van-field
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
                >
                <van-button slot="button" size="small" type="primary" @click="primary" >发送验证码</van-button>
            </van-field>
        </van-cell-group>

        <van-button type="primary" size="large" round @click="register" class="primary" :block="true">注册</van-button>
    </div>
</template>

<script>

import Vue from "vue"
import {NavBar,Toast,Field,Button,Cell, CellGroup,Dialog } from 'vant';
import * as types from "@/store/types.js"
Vue.use(NavBar).use(Toast).use(Field).use(Button ).use(Cell).use(CellGroup).use(Dialog);
export default {
  data(){
    return {
        username:'15012348449',
        password:'12345',
        sms: '',
        code: "69916"
    }
  },
  created(){
    this.$store.dispatch(types.FOOTER_NO,false)
  },
  destroyed(){
    this.$store.dispatch(types.FOOTER_DIS,true)
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      this.$router.replace('/login')
    },
    primary(){
      fetch('https://www.daxunxun.com/users/sendCode?tel=' + this.username)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data === 1) {
          Toast('该手机号已经注册')
        } else if (data === 0) {
          Toast('获取验证码失败')
        } else {
          this.code = data.code // 模拟操纵
        }
      })
    },
    register () {
      if (this.sms !== this.code) {
        Toast('验证码错误')
        return null
      }
      
      // 提交数据到服务器
      fetch('https://www.daxunxun.com/users/register', {
        method: 'post',
        headers: { // 看后端的接口
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        if (data === 1) {
          Toast('注册成功')
          this.$router.push('/login')
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '该用户已经注册，是否直接登录'
          }).then(() => {
              this.$router.push('/login')
          }).catch(() => {
          
          })
        } else {
            Toast('注册失败')
        }
      })
    } 
  },
  computed:{
    usernameState(){
      if(this.username===""){
          return ""
      }else if(!(/^1[3456789]\d{9}$/.test(this.username))){
          return "手机号格式错误"
      }else{
          return ""
      }
    },
    passwordState(){
      if(this.password===""){
          return ""
      }else if(this.password.length<5 || this.password.length>15){
            return "密码格式错误"
      }else{
          return ""
      }
    }
  },
}
</script>

<style lang="scss" scoped>
    .primary{
        margin-top:1rem;
    }
</style>
