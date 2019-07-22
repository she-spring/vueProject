<template>
  <div class="add_address">
    <van-nav-bar title="新增地址" left-text="返回" left-arrow @click-left="onClickLeft"/>
        <van-address-edit
          :area-list="areaList"
          show-postal
          show-delete
          show-set-default
          show-search-result
          :search-result="searchResult"
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
  </div>
</template>

<script>
import Vue from 'vue'
import * as types from "@/store/types.js"
import { NavBar, Button, AddressEdit, Toast} from 'vant';
import AreaList from '@/plugins/AreaList.js'//地址数据
Vue.use(NavBar).use(Button).use(AddressEdit).use(Toast);
export default {
  data() {
    return {
      areaList:AreaList,
      searchResult: []
    }
  },
  methods:{
    onClickLeft(){
      this.$router.back()
    },
    onSave() {
      Toast('save');
      console.log(this.areaList)
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add_address{
  width:100%;
}
</style>
