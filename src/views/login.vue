<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
  data() {
    return{
      cBox:false,
      account:"",
      password:"",
      setacc:"",
      accall:[],
      acc:[],
      pas:[],
      show:0,
      dog:{
        date:21,
        name:"果醬",
        money:400
      },
      cat:{},
    }
  },
  components: {
    RouterLink,
  },
  methods:{
    ...mapActions(counter,["getLocation","setLocation"]),
    log(){
      if(this.cBox == true){
        localStorage.setItem("keep","keep")
        localStorage.setItem("setacc",this.account)
      }
      this.acc = JSON.parse(localStorage.getItem("account"))
      this.pas = JSON.parse(localStorage.getItem("password"))
      console.log(this.acc)
      console.log(this.pas)
      for(let i = 0 ; i<this.acc.length ; i++){
        if( this.acc[i] == this.account){
          if(this.pas[i] == this.password){
            localStorage.setItem("logacc",this.account)
            this.$router.push("/count")
          } else{
            localStorage.removeItem("setacc")
            break
          }
        }
      }
    },
    clickC(){
      let e = document.getElementsByName("eye")
      let acc = document.getElementById("acc")
      if(e.class == "fa-solid fa-eye fa-lg eye"){
        e.class="fa-solid fa-eye-slash fa-lg eye"
        acc.type="text"
        this.show = 1
      } else{
        e.class="fa-solid fa-eye fa-lg eye"
        acc.type="password"
        this.show = 0
      }
    },
  },
  mounted(){
    if(localStorage.getItem("keep") == "keep"){
      this.setacc =localStorage.getItem("setacc")
      this.acc = JSON.parse(localStorage.getItem("account"))
      this.pas = JSON.parse(localStorage.getItem("password"))
      for(let i = 0 ; i<this.acc.length ; i++){
        if( this.acc[i] == this.setacc){
            console.log(this.acc[i])
            console.log(this.pas[i])
            this.account = this.acc[i]
            this.password = this.pas[i]
          }
        }
      }
    localStorage.removeItem("keep")
    localStorage.removeItem("setacc")
    localStorage.removeItem("logacc")
    this.setLocation(16)
  }
};
</script>

<template>
<div class="box">
    <p class="textT">記帳小能手</p>
    <p class="textL">帳號</p>
    <div class="form-floating mb-3">
      <input type="text" class="form-control tb" id="floatingInput" placeholder="" v-model="this.account">
      <label class="tbc" for="floatingInput">請在這裡輸入帳號</label>
    </div>
    <p class="textL">密碼</p>
    <div class="form-floating mb-3">
      <input type="password" class="form-control tbp" id="acc" placeholder="" v-model="this.password">
      <i v-if="this.show == 0" class="fa-solid fa-eye fa-lg eye" @click="this.clickC()" name="eye"></i>
      <i v-if="this.show == 1" class="fa-solid fa-eye-slash fa-lg eye" @click="this.clickC()" name="eye"></i>
      <label class="tbc" for="floatingInput">請在這裡輸入密碼</label>
    </div>
    <div class="checkbox">
      <input class="leftC" type="checkbox" name="" id="cBox" v-model="cBox">
      <p class="textC">保留我的登入資訊</p>
    </div>
    <div class="logbox">
      <button type="button" class="button"><RouterLink to="/register" class="bc">註冊帳號</RouterLink></button>
      <button type="button" class="button" @click="log()">登入</button>
    </div>
</div>
</template>

<style scoped lang="scss">
.box{
  height: 80%;
  width: 40%;
  margin: 0 auto 0 auto ;
  // align-self: center;
  // align-items: center;
  background-color: bisque;
  border-radius: 15px;
  .textT{
    font-size: 2em;
    // margin-top: 20px;
  }
  .textL{
    text-align: start;
    margin-left: 12%;
  }
  .tb{
    width: 80%;
    margin: 0 auto;
  }
  .tbp{
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  .eye{
    position: absolute;
    bottom: 50%;
    right: 14%;
    transition: 0.3s;
    &:hover{
      color: rgb(255, 173, 65);
    }
  }
  .tbc{
    margin-left: 10%;
  }
  .checkbox{
    align-items: start;
    display: flex;
    .leftC{
    margin-left: 12%;
    margin-top: 1%;
  }
  .textC{
    margin-left: 1%;
  }
  }
  .logbox{
    margin: 0 auto;
    display: flex;
    height: 15%;
    width: 80%;
    justify-content: space-between;
    .button{
      width: 35%;
      height: 55%;
      border: none;
      background-color: rgb(231, 152, 96);
      border-radius: 10px;
      .bc{
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>