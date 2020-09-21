<template>
    <div>
        제발
    </div>
</template>

<script>
export default {
    beforeCreate(){
        this.$store.state.loginState = false;
        this.$store.state.token = null;

        alert('로그아웃 완료');
        this.$router.go('/signin')
    }
}
</script>

<style scoped>

</style>
