<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            title:"title",
            info:{
                name:"可口可樂",
                age: 4,
                type:"熱狗",
            },
            cool:"",
            selectText:"",
            lazy:"",
            number:"",
            trim:"",
            checkbox:[],
            radioText:"",
            obj:[]
        }
    },
    computed:{
        ...mapState(counter, ["obj1"])
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation","getData"]),
        get(){
            this.getData()
            this.obj = this.obj1
        }
    },
    created(){
        console.log(this.obj)
    },
    mounted(){
      this.setLocation(3)
    },
}
</script>

<template>
    <button type="button" @click="getLocation()"></button>
    <button type="button" @click="setLocation(2)"></button>
    <h1>{{ this.title }}</h1>
    <!-- V-text -->
    <h2>V-text</h2>
    <p v-text="'this is a page'"></p>
    <p v-text="info"></p>
    <p v-text="'info'+info"></p>
    <p v-text="`info ${info}`"></p>
    <p>info {{ this.info }}</p>

    <br />
    <!-- v-model -->
    <h2>v-model</h2>
    <input type="text" v-model="cool">
    <p>{{ this.cool }}</p>
    <select name="" id="" v-model="selectText">
    <option value="1">1</option>
    <option value="2">2</option>
    </select>

    <!-- lazy,number,trim -->
    <h2>lazy</h2>
    <input type="text" v-model.lazy="lazy">
    <p>{{ this.lazy }}</p>
    <h2>number</h2>
    <input type="text" v-model.number="number">
    <p>{{ this.number }}</p>
    <h2>trim</h2>
    <input type="text" v-model.trim="trim">
    <p>{{ this.trim }}</p>

    <!-- checkbox複選 -->
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkbox" name="meal" value="breakfirst">
    <label for="">午餐</label>
    <input type="checkbox" name="meal" id="" v-model="checkbox" value="lunch">
    <label for="">晚餐</label>
    <input type="checkbox" name="meal" id="" v-model="checkbox" value="dinner">
    <p>{{ this.checkbox }}</p>

    <!-- radio單選 -->
    <label for="">早餐</label>
    <input type="radio" value="早餐" v-model="radioText" name="food">
    <label for="">中餐</label>
    <input type="radio" value="午餐" v-model="radioText" name="food">
    <label for="">晚餐</label>
    <input type="radio" value="晚餐" v-model="radioText" name="food">
    <p>{{ this.radioText }}</p>
</template>

<style scoped lang="scss"></style>