<script>
export default {
    inject:[
        "proMessage",
        "cool",
        "setMSG",
        "arr"
    ],
}
</script>

<template>
<div class="child1">
    <p>兒子的區域</p>
<p>{{ this.proMessage }}</p>
<p>{{ this.cool }}</p>
<p>{{ this.setMSG }}</p>
<p>{{ this.arr }}</p>
</div>
</template>

<style scoped lang="scss">
.child1{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    // display: flex;
    text-align: start;
    margin: 0 auto;
    .box{
        width: 100%;
        height: 400px;
        // border: 1px solid black;
        // display: flex;
        .botton{
            width: 60px;
            height: 30px;
        }
        .text{
            width: 50px;
            height: 30px;
        }
    }
}
</style>