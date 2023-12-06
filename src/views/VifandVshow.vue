<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
    data(){
        return{
            car:false,
            cola:false,
            cars:2,
            house:0,
            show:false,
        }
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"]),
    },
    mounted(){
      this.setLocation(8)
    },
}
</script>

<template>
<h1>V-if</h1>
<label for="">小名有車</label>
<input type="checkbox" value="true" v-model="car">
<p v-if="car">確實有車子</p>
<p v-if="cars == 3">確實有車子耶</p>
<img v-if="cars == 2" src="https://attach.mobile01.com/attach/202008/mobile01-0c47b7117ef7ac2c9c6b4b92d257b8b9.png" alt="">
<P>-----------------------</P>

<h1>V-show</h1>
<label for="">小可有大可</label>
<input type="checkbox" value="true" v-model="cola">
<p v-show="cola">一杯大可</p>
<P>-----------------------</P>
<!-- 兩者的差距在於，if要符合條件才會出現，而show則是一開始就存在元素，只是隱藏起來了。 -->

<h1>v-if & v-else</h1>
<label for="">小名有房</label>
<select name="" id="" v-model="house">
    <option value="">請選擇</option>
    <option value="1">1</option>
    <option value="2">2</option>
</select>

<!-- <p v-if="house == 1">普通的房子</p>
======================================
<p v-if="house == 2">比較大的房子</p>
<p v-else>真的有房子?</p> -->
<!-- 如果僅使用v-if而不是elseif，else只會往上找一個if就停下來，如果有用elseif就會一直往上找 -->

<p v-if="house == 1">普通的房子</p>
<p v-else-if="house == 2">比較大的房子</p>
<p v-else>真的有房子?</p>

<button type="button" @click="showCard">show</button>
</template>

<style scoped lang="scss"></style>