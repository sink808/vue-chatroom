// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import Home from './components/home/home'
import BootstrapVue from 'bootstrap-vue'
import { formatDate } from './filter'
import VueSocketIO from 'vue-socket.io'
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000/',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))
Vue.config.productionTip = false

Vue.component('home', Home)
Vue.filter('formatDate', formatDate) // 全域的filter

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
