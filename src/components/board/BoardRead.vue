<template>
    <div>
        <div class="panel-body">
            <div class="container">
                <h4>글 제목</h4>
                <div class="well well-sm">
                   {{board_data.subject}}
                </div>
                <br>
                <h4>작성자</h4>
                <div class="well well-sm">
                    {{board_data.writerName}}
                </div>
            </div>
        </div>

        <div class="panel-body">
            <div class="container">
                <h4>글 내용</h4>
               <pre>{{board_data.content}}</pre>
            </div>
        </div>
        <div class="container">
            <button class="btn btn-primary btn-lg" @click="goBack()">목록으로</button>
        </div>
        <br>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            idx : this.$route.params.idx,
            board_data : ''
        }
    },
    created(){
        axios.get('http://localhost:8088/board/'+this.idx,{
            headers: {
                authorization: this.$store.getters.auth_token
            }
        })
            .then(res => {
               this.board_data = res.data;
               console.log(res.data)
            })
            .catch(err => console.log(err))
    },
    methods :{
        goBack(){
            window.history.back();
        }
    }
}
</script>

<style scoped>
h4{
    color: white;
}
</style>
