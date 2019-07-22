import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as types from "@/store/types.js"
let storeX = new Vuex.Store({   
actions:{
  [types.CAN_CEL_LATION ]: ({state,commit}) => commit('increate_can',false),
  [types.IS_LOGIN]: ({state,commit},payload) => commit('increate_login',payload),
  [types.FOOTER_NO]:({start,commit},payload) => commit("increate_footer",payload),
  [types.FOOTER_DIS]:({start,commit},payload) => commit("increate_footer",payload),
  [types.USER_NAME]:({state,commit},payload) => commit('increate_user',payload),
  [types.USER_PASSWORD]:({state,commit},payload) => commit('increate_password',payload),
  [types.MASK_DIS]:({state,commit},payload) => commit("increate_LoginMask",payload)
},
mutations:{
  increate_can: (state,payload) => {state.userLogin=payload;state.LoginMask=false},
  increate_login:(state,payload) => state.userLogin=payload,
  increate_footer:(state,payload) => state.displayFooter=payload,
  increate_user:(state,payload) => state.username=payload,
  increate_password:(state,payload) => state.password=payload,
  increate_LoginMask:(state,payload) => state.LoginMask=payload,
  changeCartList(state,data){
    state.cartlist = data;
  }

},
state:{
  userLogin:false,
  displayFooter:true,
  username:'15012348449',
  password:'12345', 
  portrait:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3024387196,1621670548&fm=27&gp=0.jpg',//头像
  LoginMask:false,
  cartlist: [],
},
getters:{
  userLogin: state => state.userLogin,
  cartlist: state => state.cartlist,
  totalPrice(state){
    let totalPrice = 0
    state.cartlist.map(item=>{
      totalPrice +=(item.market_price)*1
    })
    return totalPrice
  }
}
})

export default storeX
