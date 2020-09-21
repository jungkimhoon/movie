<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="/"><a class="navbar-brand">김정훈 후로젝</a></router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul v-if="!loginCheck" class="nav navbar-nav">
                    <router-link to="/signin" activeClass="active" tag="li"><a>sign in</a></router-link>
                    <router-link to="/signup" activeClass="active" tag="li"><a>sign up</a></router-link>
                </ul>
                <ul v-else class="nav navbar-nav">
                    <router-link to="/mypage" v-if="loginCheck" activeClass="active" tag="li"><a>mypage</a></router-link>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search" v-model="search">
                    </div>
                    <router-link :to="'/search/'+ search" activeClass="active" tag="button">
                        Submit
                    </router-link>
                </form>
                <ul v-if="loginCheck" class="nav navbar-nav navbar-right">
                    <li><a href="/logout">LOGOUT</a></li>
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
    }
}
</script>

<style scoped>

</style>
