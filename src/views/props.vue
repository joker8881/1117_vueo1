<script>
import { mapState,mapActions } from 'pinia'
import child from '../components/child.vue'
import counter from '../stores/counter'
export default{
    data(){
        return{
            // title: "father to son",
            aaab:"asdsa",
            name:"",
            password:"",
            phone:"",
            check: false,
            three:"",
            warmText:"",
            dog:{
                name:"跑跑",
                type:"糖果狗",
                age:123
            }
        }
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"]),
        a(){
            const gg = document.querySelectorAll("input")
            this.three = 0
            gg.forEach(item =>{
                if (item.value.length == 0){
                    this.warmText = "尚未填寫全部資訊"
                return
                }
                this.three++
            })
            if(this.three == 3){
                this.check = !this.check
            }
        },
        getReturnData(y) {
            this.check = y;
            this.warmText = ""
            console.log(y)
        }
    },
    components:{
        child
    },
    mounted(){
      this.setLocation(10)
    },
}
</script>

<template>
    <div class="area">
        <h2 style="margin-left: 10px;">請註冊帳號</h2>
        <child v-bind:name="this.name" :password="this.password" :phone="this.phone" @x="getReturnData"/>
        <!-- <child :dog="this.dog.name" :type="this.dog.type" :age="this.dog.age"/> -->
        <!-- 註冊頁面 -->
        <!-- 三個欄位，名字，密碼，手機 -->
        <!-- props輸入，child確認 -->
        <h2 v-if="check == true" style="margin-left: 10px; color: brown;">{{ this.warmText }}</h2>
        <div class="box">
            <p class="text" style="margin-left: 10px;">名字</p>
            <input type="text" id="a" v-model="name" style="height: 30px;">
            <p class="text" style="margin-left: 10px;">密碼</p>
            <input type="password" name="" id="b" v-model="password" style="height: 30px;">
            <p class="text" style="margin-left: 10px;">手機</p>
            <input type="text" oninput = "value=value.replace(/[^\d]/g,'')" name="" id="c" v-model="phone" style="height: 30px;">
            <button class="botton" type="button" @click="this.a()">確認</button>
            <!-- 使用Vmodel去綁定輸入的值，就不用使用getelementbyid去抓值來改變，省步驟 -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.area{
    width: 120%;
    height: 100%;
    border: 1px solid black;
    // display: flex;
    text-align: start;
    .box{
        width: 100%;
        height: 300px;
        // border: 1px solid black;
        display: flex;
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