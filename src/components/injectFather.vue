<script>
import InjectChild from './injectChild.vue';
export default {
    components: {
        InjectChild
    },
}
</script>

<template>
<div class="child1">
    <p>老爸的區域</p>
    <InjectChild />
</div>
</template>

<style scoped lang="scss">
.child1{
    width: 300px;
    height: 400px;
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