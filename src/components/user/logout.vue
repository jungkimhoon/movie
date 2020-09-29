<template>
    <div>
        제발
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('LOGOUT');

        alert('로그아웃 완료');
        this.$router.push('/')
    }
}
</script>

<style scoped>

</style>
