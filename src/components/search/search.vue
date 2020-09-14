<template>
   <div>

       <infinite-loading @infinite="infiniteHandler" spinner="circles">
           <comp-movie v-for="movie in movies" :movie="movie"></comp-movie>
       </infinite-loading>
   </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

import axios from 'axios';
import movie from './movie.vue'

export default {
    data(){
        return {
            search : this.$route.params.search,
            movies: []
        }
    },
    created(){
        axios.get('http://localhost:8088/movie/'+this.search)
            .then(res => {
                const data = res.data
                for(let key in data){
                     this.movies.push(data[key])
                }
                console.log(this.movies)
            })
            .catch(err => console.log(err))
    },
    components: {
        compMovie : movie,
        InfiniteLoading
    }
}
</script>

<style scoped>

</style>
