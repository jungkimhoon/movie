<template>
    <div id="signup">
        <div class="signup-form">
            <h1>마이페이지</h1><hr>
            <form @submit.prevent="onSubmit">
                <div class="input">
                    <label for="email">메일</label>
                    <input
                        type="email"
                        id="email"
                        v-model="info.email">
                </div>
                <div class="input">
                    <label for="age">나이</label>
                    <input
                        type="number"
                        id="age"
                        v-model.number="info.age">
                </div>
                <div class="input">
                    <label for="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        v-model="info.password">
                </div>
                <div class="input">
                    <label for="confirm-password">비밀번호 확인</label>
                    <input
                        type="password"
                        id="confirm-password"
                        v-model="info.confirmPassword">
                </div>
                <div class="input">
                    <label for="country">국가</label>
                    <select id="country" v-model="info.country">
                        <option value="korea">Korea</option>
                        <option value="usa">USA</option>
                        <option value="japan">Japan</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div class="submit">
                    <button type="button" @click="updateMyInfo">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
   data(){
       return{
           info: {}
       }
   },
    created() {
        axios.post('http://localhost:8088/myPage', {},{
            headers: {
                authorization: this.$store.getters.auth_token
            }
        })
            .then(res =>  {
                console.log('마이페이지');
                this.info = res.data
            })
            .catch(error => {
                console.log(error)
                alert('에러');
                localStorage.clear();
                this.$store.state.loginState = false;
                this.$store.state.token = undefined;
                this.$router.push('/');
            })
    },
    methods : {
       updateMyInfo(){
           const info = {
               email: this.info.email,
               age: this.info.age,
               password: this.info.password,
               country: this.info.country
           }

           this.$store.dispatch('updateMyInfo', info)
       }
    }

}
</script>

<style scoped>
.signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
}

.input {
    margin: 10px auto;
}

.input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
}

.input.inline label {
    display: inline;
}

.input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
}

.input.inline input {
    width: auto;
}

.input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
}

.input select {
    border: 1px solid #ccc;
    font: inherit;
}

.hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
    background-color: #8d4288;
}

.hobbies input {
    width: 90%;
}

.submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
}

.submit button:hover,
.submit button:active {
    background-color: #521751;
    color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
}
</style>
