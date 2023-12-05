<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'


export default{
    
    data(){
        return{
            title:"title",
            isBlue:false,
            isLarge:false,
            styleArr:[],
            imgText:"",
            arrText:[1,2,3,4,5,6,7,8,9,10]
        }
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"]),
    },
    mounted(){
      this.setLocation(7)
    },

}
</script>

<template>
<!-- v-model 標籤的質 <== 雙向綁定 ==> 變數 -->
<!-- v-bind 標籤屬性 單向綁定 =>變數 -->
<h1 class="title">Title</h1>
<h1 v-bind:class="title">Head</h1>
<!-- 透過Vbind可以去改變屬性的狀態，如id,class -->

<h3>class{}</h3>
<label for="">isBlue</label>
<input type="checkbox" value="true" v-model="isBlue">
<label for="">isLarge</label>
<input type="checkbox" value="true" v-model="isLarge">

<!-- 一開始的h2標籤是沒有class的，但當isBlue變成true時，則會得到性質 -->
<h2 :class="{
    blue: isBlue,
    large: isLarge
}">狗狗銀行</h2>

<h3>class[]</h3>
<label for="">Blue</label>
<input type="checkbox" value="blue" v-model="styleArr">
<label for="">Large</label>
<input type="checkbox" value="large" v-model="styleArr">
<label for="">hover</label>
<input type="checkbox" value="hover" v-model="styleArr">
<h2 :class="styleArr">AAAAAAAA</h2>

<label for="">A</label>
<input type="radio" value="https://attach.mobile01.com/attach/202008/mobile01-0c47b7117ef7ac2c9c6b4b92d257b8b9.png" v-model="imgText">
<label for="">B</label>
<input type="radio" value="https://obs.line-scdn.net/0hCGFJCKnRHGh7MwpPC5ZjP0FlHwdIXw9rHwVNazhdQl9XBlo4EgJQXlg2S1kFV1s2FQZbD14yB1kDBQluQgFQ/w1200" v-model="imgText">
<label for="">C</label>
<input type="radio" value="https://obs.line-scdn.net/0hKg4Q7wFEFEgJKAJveYxrHzN-Fyc6RAdLbR5FS0pGSn8lHVIYYBlZfip8GHktHVMWZx1TLy4oD3lxHgFOMBpZ/w1200" v-model="imgText">

<img :src="imgText" alt="">

<select name="" id="">
    <option value="">請選擇</option>
    <option :value="item" v-for="item in arrText">{{ item }}</option>
</select>


</template>

<style scoped lang="scss">
.title{
    color:red;
}

.blue{
    color: blue;
}

.large{
    font-size: 100px;
}

.hover{
    &:hover{
        color: bisque;
    }
}



</style>