<template>
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="containedImg">
                    <img class="imageClass" :src="movie.image"  v-if="movie.image != ''" @click="goLink(movie.link)">
                    <img class="imageClass" src="../../image/mean.jpg" v-else>
                </div>
                <div style="width:30px; float: left; height: 200px;"></div>
                <div class="containMovie">
                    <h4 v-html="movie.title"></h4>
                    감독 : <span v-html='director.join(" ")'></span><br>
                    제작년도 : <span v-html='movie.pubDate'></span><br>
                    평점 : <span v-html="movie.userRating" style="font-size: large"></span><br><br>
                    <span class='star-rating'>
                            <span :style="{width: movie.userRating*10+'%'}"></span>
                    </span><br>
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
    },
    methods: {
        goLink(link){
            location.href = link;
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

    .star-rating { width:192px; }
    .star-rating,.star-rating span { display:inline-block; height:33px; overflow:hidden; background:url(../../image/star.png)no-repeat; }
    .star-rating span{ background-position:left bottom; line-height:0; vertical-align:top; }
</style>
