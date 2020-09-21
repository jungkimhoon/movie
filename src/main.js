import Vue from 'vue';
import App from './App.vue';


import axios from 'axios';
import router from './router';
import store from './store/store';


axios.defaults.headers.get['Accepts'] = 'application/json'
axios.defaults.headers.common['X-Naver-Client-Id'] = 'wp1eFPIkPNkn71JUjuX1';
axios.defaults.headers.common['X-Naver-Client-Secret'] = 'VQsaz1sI4e';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, Content-Length, X-Requested-With';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
