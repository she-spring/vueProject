import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store.js'
import './registerServiceWorker'
import '@/plugins/font.js'

import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
