<template>
   <div>
       <comp-movie v-for="movie in movies" :movie="movie"></comp-movie>
       <infinite-loading @infinite="infiniteHandler" spinner="waveDots"></infinite-loading>
   </div>
</template>

<script>

import movie from './movie.vue'
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";


export default {
    data(){
        return {
            search : this.$route.params.search,
            movies: [],
            page: 1
        }
    },
    // created(){
    //     this.$store.dispatch('GET_MOVIE_LIST', this.search)
    // },
    components: {
        compMovie : movie,
        InfiniteLoading
    },
    methods: {
        infiniteHandler($state){
            axios.get('http://localhost:8088/movie/'+this.search+'/'+this.page)
                .then(res => {
                    setTimeout(() => {
                        const data = res.data
                        for(let key in data){
                            this.movies.push(data[key])
                        }
                        this.page += 18;
                        $state.loaded();
                    }, 1000)
                })
                .catch(err => console.log(err))
        },

    }
}
</script>

