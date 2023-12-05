<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
      return{
      }
    },
    computed:{
        ...mapState(counter, ["obj1"])
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
    },
    mounted(){
      this.setLocation(1)
    },
}
</script>

<template>
  <div class="main mw-content-text">
    <div class="title">
      <div class="upsmall">
        <p class="upsmallL">左邊小元素</p>
        <p class="upsmallR">右邊小元素</p>
      </div>
      <div class="upline">
        <p class="upleftl"></p>
        <p class="uplineM">Fin</p>
        <p class="upleftl"></p>
      </div>
      <div class="upline2"><p class="upleft2lL"></p><p class="upleft2lR"></p></div>
      <p class="kk">驚爆！世界頂級的冒險者現身於楓丹</p>
      <div class="upline3"></div>
      <div class="upline">
        <p class="upleftl"></p>
        <p class="uplineM">TIMES</p>
        <p class="upleftl"></p>
      </div>
      <div class="downsmall">
        <p class="downsmallL">左邊小元素</p>
        <p class="downsmallR">右邊小元素</p>
      </div>
      <!-- <div class="upline">虛線</div> -->
    </div>
    <p class="mw2">千日紅</p>
    <p class="mw3">收集品</p>
  </div>
</template>

<style scoped lang="scss">
.title{
  .kk{
    font-family: 'OradanoGSRR';
    font-size: 4.5em;
    margin: 0;
    line-height: 1em;
    transition: all 1s ease 0s;
    position: relative;
    &::after{
      left: 50%;
      width: 3px;
      height: 100%;
      top: 0;
      content: "";
      position: absolute;
      z-index: -1;
    }
  }
  .upsmall{
    position: relative;
    .upsmallL{
    text-align: start;
    position: absolute;
    margin: 0 0 0 20px;
    }
    .upsmallR{
    text-align: end;
    position: absolute;
    right: 0;
    margin: 0 20px 0 0;
    }
  }
  .downsmall{
    position: relative;
    .downsmallL{
    text-align: start;
    position: absolute;
    top: -30px;
    margin: 0 0 0 20px;
    }
    .downsmallR{
    text-align: end;
    position: absolute;
    right: 0;
    top: -30px;
    margin: 0 20px 0 0;
    }
  }
  .upline{
    display: flex;
    margin: 0 0 0 0;
    width: 100%;
    .upleftl{
      margin: 35px 20px 0 20px;
      width: 100%;
      border: 0;
      height: 6px;
      background: #333;
      background-image: #333;
      }
    .uplineM{
      font-family: 'OradanoGSRR';
      font-size: 2em;
      margin: 0;
      }
    }
  .upline2{
    display: flex;
    margin: 0 0 0 0;
    width: 100%;
    position: relative;
    .upleft2lL{
      position: absolute;
      top: -60px;
      margin: 35px 20px 0 20px;
      width: 44.8%;
      border: 0;
      height: 3px;
      background: #333;
      background-image: #333;
      }
      .upleft2lR{
      position: absolute;
      top: -60px;
      right: 0;
      margin: 35px 20px 0 20px;
      width: 44.8%;
      border: 0;
      height: 3px;
      background: #333;
      background-image: #333;
      }
  }
  .upline3{
    
  }
}
.mw-content-text {
  padding: 2em 4em 5em 4em;
  background: url(https://patchwiki.biligame.com/images/ys/c/cb/2s5wzhvgcq8t8gsw1b0xvks0haiaxrx.png) left top/118px no-repeat,url(https://patchwiki.biligame.com/images/ys/5/50/resfhdf0vgvhqpo85alolzppqiabtsv.png) left top/45px no-repeat,url(https://patchwiki.biligame.com/images/ys/c/c9/n0fkujsbg9dswqbe66zbiemaddo84xj.png) right top/45px no-repeat,url(https://patchwiki.biligame.com/images/ys/9/9f/gous4mcm5zt6ru5yxviighe5tyem64q.png) left bottom/45px no-repeat,url(https://patchwiki.biligame.com/images/ys/6/67/7z2k7wx820zya6wz0m563sjaykmqv4u.png) right bottom/45px no-repeat,url(https://patchwiki.biligame.com/images/ys/2/2a/f5ogmdvyb04dsfcy3kk5ne8jud38l6j.png) left top/45px repeat-x,url(https://patchwiki.biligame.com/images/ys/b/b3/3vsmvlo8qo6192b89jmoqxvj5fpol6u.png) left bottom/45px repeat-x,url(https://patchwiki.biligame.com/images/ys/4/4e/tafd5352ydnp0l9du0o3lcjczvfclnp.png) left top/19px repeat-y,url(https://patchwiki.biligame.com/images/ys/2/23/etuw92oibr0h0j4hyzly1epi69cz5zh.png) right top/19px repeat-y,#F8F3EF;
  border-radius: 6px;
  color: #66574A;
  line-height: 2.14285714;
  .mw2{
    width: 20%;
  margin: 15px 0px 20px 0;
  border: none;
  background: url(https://patchwiki.biligame.com/images/ys/8/8e/mz1gtoqtdva8abdii2ynifqdop8o4rm.png) left top/61px no-repeat,url(https://patchwiki.biligame.com/images/ys/e/e1/gtgsayyb94tqn79yv9boed0p9prgksj.png) right top/61px no-repeat,url(https://patchwiki.biligame.com/images/ys/b/bc/svv820vl56foywxu0prhk7rx7rhd9na.png) center 2px/306px no-repeat,#D9D1C8;
  font-family: inherit;
  font-size: 18px;
  height: 38px;
  line-height: 38px;
  font-weight: bold;
  text-align: center;
  color: #685841;
  letter-spacing: 1px;
  }
  .mw3{
  margin: 15px 0 10px 0;
  padding: 0;
  border: none;
  background: url(https://patchwiki.biligame.com/images/ys/5/58/2syon0w1jo9svw2b7ucav3me8tij7mu.png) left top/19px no-repeat,url(https://patchwiki.biligame.com/images/ys/6/60/a12dtg4bztohf86xcvu79inscp3cd4w.png) right top/19px no-repeat,url(https://patchwiki.biligame.com/images/ys/8/86/evanh7t50014v4hyg8tp8jz9qz7i6rz.png) center top/278px no-repeat,url(https://patchwiki.biligame.com/images/ys/a/af/1ltaksplcpac5iqmjleagh3ikonk8pm.png) left top/20px repeat-x;
  font-size: 16px;
  height: 32px;
  line-height: 20px;
  font-weight: bold;
  text-align: center;
  color: #685841;
  letter-spacing: 1px;
  }
}
</style>