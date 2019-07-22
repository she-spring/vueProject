<template>
    <div class="header">
          <a href="" class="logo">
            <van-icon name="location-o" color="#FE4070" size=".5rem"/>
          </a>
          <form action="" class="search">
            
              <input type="text" placeholder="家电满199立减100">
          </form>
          <div class="City" @click="Citys">
            <span>北京</span><van-icon name="arrow-down" />
          </div>
          <div class="City-whole" v-if="CityWhole">
              <van-area 
                :area-list="areaList" 
                value="110101" 
                columns-num="2"
                />
          </div>
      </div>
</template>

<script>
import AreaList from '@/plugins/AreaList.js'//地址数据
export default {
  data(){
    return {
      areaList:AreaList,
      CityWhole:false
    }
  },
  methods:{
    Citys(){
      this.CityWhole=true
    },
  },
  mounted(){

   
  }
}
</script>

<style lang="scss" scoped>
$W:100%;
$H:.44rem;
    
.header{
  width:$W; 
  height:$H;
  margin:.2rem 0;
  display: flex;
  justify-content:space-around;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: .1rem;
  .logo{
    width:19%;
    height:$H;
  }
  .search{
    width:60%;
    height:$H;
    // border:.01rem solid #333;
    border-radius:.3rem;
    background-color: #F5F5F5;
    input{
      border:none;
      outline:none;
      line-height:$H;
      background-color: #F5F5F5;
     margin-left: 0.6rem;
    }
  }
  .City{
    width:19%;
    height:$H;
    
  }
  .City-whole{
    width:100%;
    height:100%;
    position: absolute;
    background:#fff;
    z-index:999;
  }
}
</style>
