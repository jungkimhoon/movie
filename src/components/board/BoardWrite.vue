<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">글작성</h3>
        </div>
        <div class="panel-body">
            <div class="container">
                <h2>글 제목</h2>
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">글 제목</span>
                    <input type="text" class="form-control" placeholder="글제목 입력 ..." aria-describedby="basic-addon1">
                </div>
                <br>
                <h2>작성자</h2>
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">작성자&nbsp;</span>
                    <input type="text" class="form-control" readonly value="ADMIN" aria-describedby="basic-addon1">
                </div>
            </div>
        </div>

        <div class="panel-body">
            <div class="container">
                <h2>글 내용</h2>
                <textarea class="form-control col-sm-5" rows="20"></textarea>
            </div>
        </div>
        <hr>
        <div class="container">
            <button class="btn btn-primary btn-lg">작성완료</button>
        </div>

        <br>

    </div>


</template>

<script>
export default {
    name: "BoardWrite"
}
</script>

<style scoped>

</style>
