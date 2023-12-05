<script>
export default {
    data(){
        
    },
    props:[
        "name",
        "phone",
        "gender",
        "location",
        "age"
    ],
    methods: {
        backB(){
            this.$emit('back',"a")
        }
}
}
</script>

<template>
<div class="child2">
        在flowChild2確認資料
    <p>{{ this.name }}</p>
    <p>{{ this.phone }}</p>
    <p>{{ this.gender }}</p>
    <p>{{ this.location }}</p>
    <p>{{ this.age }}</p>
    <button type="button" @click="backB">AAAA</button>
</div>
<input type="text" @input="$emit('text',$event.target.value)">
</template>

<style scoped lang="scss">
.child2{
    width: 50%;
    height: 100%;
    border: 1px solid black;
    margin: 0 auto;
    // display: flex;
    text-align: start;
}
</style>