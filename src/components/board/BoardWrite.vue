<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="container">
                <h2>글 제목</h2>
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">글 제목</span>
                    <input type="text" class="form-control" placeholder="글제목 입력 ..." aria-describedby="basic-addon1" v-model="subject">
                </div>
                <br>
                <h2>작성자</h2>
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">작성자&nbsp;</span>
                    <input type="text" class="form-control" readonly value="ADMIN" aria-describedby="basic-addon1" v-model="writerName">
                </div>
            </div>
        </div>

        <div class="panel-body">
            <div class="container">
                <h2>글 내용</h2>
                <textarea class="form-control col-sm-5" rows="20" v-model="content"></textarea>
            </div>
            <div class="container">
                <br><br>
                <button class="btn btn-primary btn-lg" @click="writeBoard">작성완료</button>
            </div>
        </div>
    </div>


</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            subject : '',
            writerName : 'ADMIN',
            content : ''
        }
    },
    methods : {
        writeBoard(){
            const postData = {
                subject : this.subject,
                writerName : this.writerName,
                content : this.content
            }
            axios.post('http://localhost:8088/board', postData,
                {
                    headers: {
                        authorization: this.$store.getters.auth_token
                    }
            })
                .then(res => {
                    console.log(res)
                    alert("작성완료")
                    this.$router.push('/board/list')
                })
                .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.panel {
    background-color: rgba( 255, 255, 255, 0 );
    border: 0px;
}

h2{
    color:white;
}
</style>
