import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import signin from "./components/user/signin.vue";
import signup from "./components/user/signup.vue";
import search from "./components/search/search.vue";
import store from "./store/store"

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/signin', component: signin},
    { path: '/signup', component: signup},
    { path: '/search/:search', component: search},
    { path: '/logout',
      beforeEnter(to, from, next) {
          alert('로그아웃 되었습니다.');

          store.state.token = null;
          localStorage.clear();

          next('/');
      }
    }
]

export default new VueRouter({mode:'history', routes,
    scrollBehavior(to, from, savedPosition){
        return {
            x : 0,
            y : 0
        }
    }
})
