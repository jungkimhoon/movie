<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="containedImg">
                    <img class="imageClass" :src="movie.image"  v-if="movie.image != ''">
                    <img class="imageClass" src="../../image/mean.jpg" v-else>
                </div>
                <div style="width:30px; float: left; height: 150px;"></div>
                <div class="containMovie">
                    <h3 v-html="movie.title"></h3>
                    감독 : <middle v-html='director.join(" ")'></middle><br>
                    평점 : <middle v-html='movie.userRating'></middle><br>
                    제작년도 : <middle v-html='movie.pubDate'></middle>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['movie'],
    data(){
        return{
            director : this.movie.director.split("|")
        }
    }
}
</script>

<style scoped>
    .containedImg{
        width:150px;
        height:200px;
        float: left;
    }

    .containedMovie{
        float : left;
    }

    .imageClass{
        height: 200px;
        width: 150px;
        cursor: pointer;
    }
</style>
