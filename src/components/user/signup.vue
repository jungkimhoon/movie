<template>
    <div id="signup">
        <div class="signup-form">
            <form @submit.prevent="onSubmit">
                <div class="input">
                    <label for="email">메일</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email">
                </div>
                <div class="input">
                    <label for="age">나이</label>
                    <input
                        type="number"
                        id="age"
                        v-model.number="age">
                </div>
                <div class="input">
                    <label for="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password">
                </div>
                <div class="input">
                    <label for="confirm-password">비밀번호 확인</label>
                    <input
                        type="password"
                        id="confirm-password"
                        v-model="confirmPassword">
                </div>
                <div class="input">
                    <label for="country">국가</label>
                    <select id="country" v-model="country">
                        <option value="korea">Korea</option>
                        <option value="usa">USA</option>
                        <option value="india">Japan</option>
                        <option value="germany">China</option>
                    </select>
                </div>
                <div class="input inline">
                    <input type="checkbox" id="terms" v-model="terms">
                    <label for="terms">가입 동의</label>
                </div>
                <div class="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            email: '',
            age: null,
            password: '',
            confirmPassword: '',
            country: 'korea',
            terms: false
        }
    },
    methods: {
        onSubmit () {
            const formData = {
                email: this.email,
                age: this.age,
                password: this.password,
                confirmPassword: this.confirmPassword,
                country: this.country,
                terms: this.terms
            }
            console.log(formData)
            axios.post('http://localhost:8088/users', formData)
                 .then(res => {
                     alert('가입완료');
                     this.$router.push('/');
                 })
                 .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>
.signup-form {
    width: 400px;
    margin: 30px auto;
    padding: 20px;
}

.input {
    margin: 10px auto;
}

.input label {
    display: block;
    color: white;
    font-weight: bold;
    font-size: 15px;
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
    border: 1px solid black;
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
    color: darkred;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
}

.submit button:hover,
.submit button:active {
    background-color: darkred;
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
