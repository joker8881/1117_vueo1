<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            title:"",
            dog:""
        }
    },
    methods:{
        print(){
            console.log("btn")
            this.title = "btn"
        },
        sky(){
            console.log("sky")
            this.dog = "dog"
        },
        write(){
            console.log(this.text)
            alert("xxx")
        },
        goOtherWay(){
            this.$router.push('/Vfor')
        }
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"]),
    },
    mounted(){
      this.setLocation(5)
    },
}
</script>

<template>
    <h1>V-on</h1>
    <button type="button" v-on:click="print()">btn</button>
    <p>{{ this.title }}</p>
    <!-- 從上面的方法中，抓到在console列印btn 同時在P中間列印btn的字串 -->
    <select name="" id="" @change="sky()">
    <option value="1">1</option>
    <option value="2">2</option>
    </select>
    <p>{{ this.dog }}</p>

    <input type="text" v-model="this.text" @keydown.enter="write()">
    <button type="button" @click="goOtherWay()">
        <i class="fa-solid fa-check"></i>
    </button>

</template>

<style scoped lang="">

</style>