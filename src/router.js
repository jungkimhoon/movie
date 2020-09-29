import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import signin from "./components/user/signin.vue";
import signup from "./components/user/signup.vue";
import search from "./components/search/search.vue";
import myPage from "./components/user/mypage.vue";
import boardWrite from "./components/board/BoardWrite.vue";
import boardList from "./components/board/BoardList.vue";
import boardRead from "./components/board/BoardRead.vue";

import store from "./store/store";
import logout from "./components/user/logout";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/signin', component: signin},
    { path: '/signup', component: signup},
    { path: '/search/:search', component: search},
    { path: '/logout', component: logout},
    { path: '/myPage', component: myPage},
    { path: '/board/write', component: boardWrite},
    { path: '/board/list', component: boardList},
    {
        path : '/board/:idx',
        component : boardRead
    },
]

export default new VueRouter({mode:'history', routes,
    scrollBehavior(to, from, savedPosition){
        return {
            x : 0,
            y : 0
        }
    }
})
