<script>
import flowChild2Vue from './flowChild2.vue';
import { mapActions } from 'pinia';
import counter from '../stores/counter';
export default {
    data(){
        return{
            obj:{
                name:"",
                phone:"",
                gender:"",
                location:"",
                age:"",
            }
        }
    },
    methods: {
    returnData() {
      this.$emit('data',this.obj)
    },
}
}
</script>

<template>
<div class="child1">
    <h2 v-if="check == false" style="margin-left: 10px; color: brown;">{{ this.warmText }}</h2>
    <div class="box">
            <p class="text" style="margin-left: 10px;">名字</p>
            <input type="text" id="a" v-model="this.obj.name" style="height: 30px; margin-left: 10px;">
            <p class="text" style="margin-left: 10px;">手機</p>
            <input type="text" oninput = "value=value.replace(/[^\d]/g,'')" name="" id="c" v-model="this.obj.phone" style="height: 30px;">
            <p class="text" style="margin-left: 10px;">性別</p>
            <input type="radio" name="1" id="" value="1" v-model="this.obj.gender">
            <input type="radio" name="1" id="" value="2" v-model="this.obj.gender">
            <p class="text" style="margin-left: 10px;">地址</p>
            <input type="text" name="" id="b" v-model="this.obj.location" style="height: 30px;">
            <p class="text" style="margin-left: 10px;">地址</p>
            <input type="text" name="" id="b" v-model="this.obj.age" style="height: 30px;">
            <button class="botton" type="button" @click="returnData">確認</button>
            <!-- 使用Vmodel去綁定輸入的值，就不用使用getelementbyid去抓值來改變，省步驟 -->
        </div>
</div>
</template>

<style scoped lang="scss">
.child1{
    width: 50%;
    height: 100%;
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