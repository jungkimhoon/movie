<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="/"><a class="navbar-brand">KMDB</a></router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul v-if="!loginCheck" class="nav navbar-nav ">
                    <router-link to="/signin" activeClass="active" tag="li" role="presentation"><a>sign in</a></router-link>
                    <router-link to="/signup" activeClass="active" tag="li" role="presentation"><a>sign up</a></router-link>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="검색..." v-model="search" style="width: 500px;">
                                <span class="input-group-btn">
                                 <router-link :to="'/search/'+ search" activeClass="active" tag="button" class="btn btn-primary">
                                     검색
                                 </router-link>
                              </span>
                            </div><!-- /input-group -->
                        </div><!-- /.col-lg-6 -->
                    </div>


                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li role="presentation" v-if="loginCheck"><a @click="logout">LOGOUT</a></li>
                    <router-link to="/mypage" activeClass="active" tag="li" role="presentation" v-if="loginCheck"><a>MYPAGE</a></router-link>
                    <router-link to="/board/list" active-class="active" tag="li" role="presentation" v-if="loginCheck"><a>BOARDLIST</a></router-link>
                    <router-link to="/board/write" active-class="active" tag="li" role="presentation" v-if="loginCheck"><a>BOARDWRITE</a></router-link>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
     data() {
         return {
             search : ''
         }
     },
    computed: {
        loginCheck(){
            return this.$store.getters.loginCheck;
        }
    },
    methods:{
         logout(){
             this.$store.dispatch('LOGOUT');
             alert('로그아웃 완료');
             this.$router.push('/');
         }
    }
}
</script>

<style scoped>
.navbar{background-color:black; font-weight: bold; border-bottom: 1px solid black;}
.nav.navbar-nav li a {
    color: darkred;
}
.navbar-brand {
    color: darkred;
}
.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background-color: darkred !important;
    color: black;
    font-weight: bold;
}
</style>
