<template>
   <div>
       {{ $route.params.search }}
       <div v-for="movie in movies">{{ movie.title }} </div>
   </div>
</template>

<script>
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
        compMovie : movie
    }
}
</script>

<style scoped>

</style>
