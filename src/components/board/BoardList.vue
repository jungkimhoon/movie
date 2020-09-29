<template>
    <div class="container">
        <div class="panel-body">
            <ul class="list-group">
                <li class="list-group-item" v-for="movie in movies">
                    <p class="list-group-item-text article-id">#{{ movie.id }}&emsp;{{ $moment(movie.writeDate).format('YYYY-MM-DD') }}</p>

                    <span class="badge">{{ movie.writerName }}</span>
                    <a @click="go_read(movie.id)">{{ movie.subject }}</a>
                </li>
            </ul>
        </div>
        <infinite-loading @infinite="infiniteHandler" spinner="default">
            <div slot="no-more" style="color: rgb(102, 102, 102); font-size: 14px; padding: 10px 0px;"></div>
        </infinite-loading>
    </div>
</template>

<script>
import axios from 'axios';
import InfiniteLoading from "vue-infinite-loading";

export default {
    data(){
        return{
            movies: [],
            loadNum: 0
        }
    },
    methods : {
        go_read(idx){
            this.$router.push('/board/'+idx)
        },
        infiniteHandler($state) {
            axios.get('http://localhost:8088/board/list/'+this.loadNum,{
                headers: {
                    authorization: this.$store.getters.auth_token
                }
            })
                .then(res => {
                    if(res.data.totalPages == this.loadNum){
                        $state.complete();
                    }else{
                        setTimeout(() => {
                            const data = res.data.content;
                            for(let key in data){
                                this.movies.push(data[key])
                            }
                            this.loadNum++;
                            $state.loaded();
                        }, 1000)
                    }
                })
                .catch(err => {
                    console.log(err)
                    alert('다시 로그인 해주세요.');
                    this.$store.dispatch('LOGOUT');
                    this.$router.push('/');
                })
        }
    },
    components: {
        InfiniteLoading
    }
}
</script>

<style scoped>
    .list-header{

    }
    .list-wrapper{
        display: flex;
        align-items: center;
        height: 50px;
        border-top: 1px solid gray;
    }
    .list-item{
        align-items: center;
    }
    a{color:black; font-size: 20px; text-decoration : none! important; cursor: pointer;}
    a:link{color:black; font-size: 20px; text-decoration : none! important;}
    a:visited{color:purple; font-size: 20px; text-decoration : none! important;}
    a:hover{color:black; font-size: 20px; text-decoration : none! important; cursor: pointer;}
    a:active{color:black; font-size: 20px; text-decoration : none! important;}

    .article-id{
        color: lightgray;
        font-size: 11px;
        font-weight: bold;
    }

</style>
