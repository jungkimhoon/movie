import axios from "axios";
import router from '../../router';

const state = {
    token: null,
    loginState: false,
    myInfo: {}
}

const mutations = {
    'LOGIN' (state, payload) {
        axios.post('http://localhost:8088/user', payload)
            .then(res => {
                let token = res.headers["authorization"];
                if(token != undefined) {
                    state.token = token;
                    console.log(state.token)
                    state.loginState = true;
                    localStorage.setItem("access_token", token)
                }
            })
            .catch(error => console.log(error))
    },
    'MYPAGE' (state) {
        axios.post('http://localhost:8088/myPage', {},{
            headers: {
                authorization: state.token
            }
        })
        .then(res => {
            console.log(res.data)
            state.myInfo = res.data;
        })
        .catch(error => {
            alert('재로그인 하세요.');
            localStorage.clear();
            state.loginState = false;
            state.token = undefined;
            router.push('/');
        })
    },
    'LOGOUT' (state) {
        state.token = undefined;
        state.loginState = false
    },
    'UPDATE_MY_INFO'(state, {email, age, password, country}){
        axios.put('http://localhost:8088/myPage', {
                email: email,
                age: age,
                password: password,
                country: country
        },{
            headers: {
                authorization: state.token
            }
        })
            .then(res => {
                alert('수정완료');
                router.push('/');
            })
            .catch(error => console.log(error))
    }
};

const actions = {
    'LOGIN'({ commit }, payload){
        commit('LOGIN', payload)
    },
    'MYPAGE'({ commit }){
        commit('MYPAGE')
    },
    'LOGOUT'({ commit }){
        alert('로그아웃')
        commit('LOGOUT')
    },
    updateMyInfo({ commit }, info){
        commit('UPDATE_MY_INFO', info)
    }
};

const getters = {
    loginCheck (state){
        return state.loginState;
    },
    myInfo (state){
        return state.myInfo;
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}
