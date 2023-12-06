<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
export default {
    data() {
        return {
          b:false,
        };
    },
    components: { Header },
    methods: {
    a(){
      this.b=!this.b;
      console.log(this.b)
    }
    },
  }
</script>

<template class="body">
  <div class="hbox mouse">
    <div class="btn" :class="{bC:b}" @click="this.a()"></div>
    <!-- <button class="btn" type="button" @click="this.a()" style="position: fixed;left: 5px;top: 5px;">按我</button> -->
  <div class="header" :class="{ccb:b}">
    <Header />
  </div>
  <div class="content" :class="{ccc:b}">
    <RouterView />
  </div>
  </div>
</template>

<style scoped lang="scss">
.hbox{
  .header{
  position: fixed;
  margin: 0;
  widows: 100vw;
  transition: 0.6s;
  width: 0;
  overflow: hidden;
  z-index: 1;
  &:hover{
    width: 36vw;
  }
  height: 0vh;
}
  .ccb{
    position: fixed;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 6vw;
    height: 100vh;
  }
  
.content{
  width: 100vw;
  height: 85vh;
  text-align: center;
  }
.ccc{
  filter: blur(5px);
}
// .btn{
//   position: fixed;
//   width: 96px;
//   height: 92px;
//   top: 20px;
//   left: 1px;
//   z-index: 5;
//   // background-color: rgb(163, 162, 160);
//   font-family: 'jf-openhuninn-2.0';
//   border: none;
// }
.btn{
  position: fixed;
  width: 96px;
  height: 92px;
  top: 20px;
  left: 20px;
  z-index: 5;
  // background-color: rgb(163, 162, 160);
  background-image: url("./assets/img/Paimon.png");
  background-repeat: no-repeat;
  background-size: contain;
  font-family: 'jf-openhuninn-2.0';
  border: none;
}
.bC{
  width: 56px;
  height: 52px;
  background-image: url("./assets/img/Back.png");
  background-repeat: no-repeat;
  background-size:fill;
  font-family: 'jf-openhuninn-2.0';
  border: none;
}
}
.mouse{
  cursor: url("./assets/cur/STMC_Genshin_01_Normal.cur"), default;
}
</style>
