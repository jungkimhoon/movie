import axios from "axios";
import router from '../../router';

const state = {
    token: null,
    loginState: false,
}

const mutations = {
    'LOGIN' (state, payload) {
        state.loginState = true;
        state.token = payload;
    },
    'LOGOUT' (state) {
        state.token = null;
        state.loginState = false;
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
    'LOGIN'({ commit }, formData){
        axios.post('http://localhost:8088/user', {
            email: formData.email,
            password: formData.password
        })
        .then(res => {
            const resToken = res.headers["authorization"];
            if(resToken == undefined){
                alert('다시 시도하세요.');
                router.push('/signin');
            }else {
                commit('LOGIN', resToken);
            }
            // localStorage.setItem("access_token", token)
        })
        .catch(error => console.log(error))
    },
    'LOGOUT'({ commit }){
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
    auth_token (state){
        return state.token;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
