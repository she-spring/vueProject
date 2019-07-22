<template>
  <div class="address">
      <van-nav-bar title="地址管理" left-text="返回" left-arrow @click-left="onClickLeft"/>

            <van-address-list
              v-model="chosenAddressId"
              :list="list"
              :disabled-list="disabledList"
              disabled-text="以下地址超出配送范围"
              @add="onAdd"
              @edit="onEdit"
            />

      <div class="Tips">最多保留十条有效地址,每月新增或者修改地址为十次,你本月也修改或新增<i>0</i>次</div>
      <!-- <div class="footer"><van-button type="info" text="新增地址" to="/add_address"></van-button></div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import * as types from "@/store/types.js"
import { NavBar, Button, AddressList, Toast} from 'vant';
Vue.use(NavBar).use(Button).use(AddressList).use(Toast);
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  created(to,from,next){
    this.$store.dispatch(types.FOOTER_NO,false)//去除footer
  },
destroyed(){
     this.$store.dispatch(types.FOOTER_DIS,true)//加载footer
  },
  methods:{
    onClickLeft(){
      this.$router.replace('/my')
    },
    onAdd() {
      this.$router.push('/add_address')
    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }
  },
}
</script>

<style lang="scss" scoped>
.address{
  .list{width:100%;}
  .Tips{width:100%;padding:0 .2rem;box-sizing:border-box;text-indent:2em;text-align:left;color:#999;}
  .footer{position: fixed;width:100%;height:1rem;bottom:0}
}
</style>
