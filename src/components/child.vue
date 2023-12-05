<script>
export default {
    data(){

    },
    props:[
        "parentMsg",
        "name",
        "password",
        "phone",
    ],
    methods: {
    returnData() {
      this.$emit('x',false)
    }
}
}
</script>

<template>
<div class="childarea">
    <h3>請確認帳號資訊</h3>
    <!-- <h3>{{ this.parentMsg }}</h3> -->
    <!-- <h3>{{ this.dog }}</h3>
    <h3>{{ this.type }}</h3>
    <h3>{{ this.age }}</h3>
    <input type="text" v-model="this.dog">
    <input type="text" v-model="this.type">
    <input type="text" v-model="this.age"> -->
    <h3>{{ this.name }}</h3>
    <h3>{{ this.password }}</h3>
    <h3>{{ this.phone }}</h3>
    <button type="button" @click="returnData()">確認完成請點擊</button>
</div>
</template>

<style lang="scss" scoped>
.childarea{
    width: 300px;
    height: 300px;
    margin: 30px 0 0 30px;
    border: 1px solid firebrick;
}
</style>