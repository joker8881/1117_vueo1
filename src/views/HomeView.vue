<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
// import s from '../assets/img/news.jpg'
export default{
    data(){
      return{
        xa:false,
      }
    },
    computed:{
        ...mapState(counter, ["obj1"])
    },
    methods:{
        ...mapActions(counter,["setLocation"]),
        a(){
          this.xa = !this.xa
        }
    },
    mounted(){
      this.setLocation(1)
    },
}
</script>

<template>
  <div class="background">
    <div class="main mw-content-text">
      <div class="title">
        <div class="upline">
          <p class="upleftl"></p>
          <p class="uplineM">The</p>
          <p class="upleftR"></p>
        </div>
        <p class="kk">驚爆！世界頂級的冒險者現身於楓丹</p>

        <div class="downline">
          <p class="downleftl"></p>
          <p class="downlineM">TIMES</p>
          <p class="downleftR"></p>
        </div>
        <div class="noneline"></div>
        <h1 class="h1t">神秘客現身，行善不求回報</h1>
      </div>
      <div class="container">
        <!-- <p class="mw2">千日紅</p> -->
        <div class="leftMB">
          <div class="upPicture"></div>
          <div class="leftDB">
              <div class="left2ItemBox">
                <div class="leftDT">
                  <p class="mw2">千日紅</p>
                  <p class="leftDTT">sssdasdsdasddasdsadddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                </div>
                <div class="leftDP"></div>
              </div>
              <div class="middleL"></div>
              <div class="rightText"><p class="rightTextT">sdasdadasdasdasd</p></div>
          </div>
          <div class="downLineLL"></div>
          <div class="downDBox">
            <div class="aText1">敬請注意</div>
            <div class="bLine1"></div>
            <div class="cText1">讓人生氣的魔術！</div>
          </div>
        </div>
        <div class="rightMB">
          <div class="rightUC"></div>
          <p class="mw3">楓丹民眾票選本月最佳歌手！</p>
          <div class="rightDP"></div>
        </div>
      </div>
      <div class="downEndline"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title{
  height: 23.5%;
  
.h1t{
    font-family: "jf-openhuninn-2.0";
    font-size: 4em;
    margin: 1% 0;
  }
  .kk{
    font-family: 'OradanoGSRR';
    font-size: 4.5em;
    margin: 20px 0 0 0;
    line-height: 1em;
    transition: all 1s ease 0s;
    position: relative;
    &::after{
        content: "";
        width: 30vw;
        height: 30vh;
        position: absolute;
        right: -150px;
        bottom: -260px;
        background-image: url("../assets/img/tom.gif");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
  }
  .upline{
    display: flex;
    margin: 0 0 0 0;
    width: 100%;
    position: relative;
    .uplineM{
      font-family: "ITCEDSCR";
      font-size: 4em;
      margin: 0;
      line-height: 50%;
      margin-top: 20px;
    }
      .upleftl{
      margin: 35px 20px 0 20px;
      width: 100%;
      border: 0;
      height: 6px;
      background: #333;
      background-image: #333;
      position: relative;
      &::before{
        content: "";
        position: absolute;
        top: -25px;
        left: -20px;
        margin: 35px 20px 0 20px;
        width: 100%;
        border: 0;
        height: 3px;
        background: #333;
        background-image: #333;
        }
        &::after{
        content: "蒸氣鳥報出版報導 水月24日";
        text-align: start;
        left: -20px;
        top: -35px;
        position: absolute;
        margin: 0 0 0 20px;
        font-family: "jf-openhuninn-2.0";
      }
      }
      .upleftR{
      margin: 35px 20px 0 20px;
      width: 100%;
      border: 0;
      height: 6px;
      background: #333;
      background-image: #333;
      position: relative;
      &::before{
        content: "";
        position: absolute;
        top: -25px;
        left: -20px;
        margin: 35px 17px 0 20px;
        width: 100%;
        border: 0;
        height: 3px;
        background: #333;
        background-image: #333;
        }
        &::after{
        content: "意外！每個人死前都喝過水！！";
        text-align: start;
        right: -0px;
        top: -35px;
        position: absolute;
        margin: 0 0 0 20px;
        font-family: "jf-openhuninn-2.0";
      }
      }
  }
  .downline{
    display: flex;
    margin: 0 0 0 0;
    width: 100%;
    height: 68px;
    .downleftl{
      margin: 35px 20px 0 20px;
      width: 100%;
      border: 0;
      height: 6px;
      background: #333;
      background-image: #333;
      position: relative;
      &::before{
        content: "";
        position: absolute;
        top: -43px;
        left: -20px;
        margin: 35px 20px 0 20px;
        width: 100%;
        border: 0;
        height: 3px;
        background: #333;
        background-image: #333;
        }
        &::after{
        content: "本月度楓丹人氣角色排行榜冠軍：芙寧娜";
        text-align: start;
        left: -20px;
        top: 0px;
        position: absolute;
        margin: 0 0 0 20px;
        font-family: "jf-openhuninn-2.0";
      }
      }
    .downleftR{
      margin: 35px 20px 0 20px;
      width: 100%;
      border: 0;
      height: 6px;
      background: #333;
      background-image: #333;
      position: relative;
      &::before{
        content: "";
        position: absolute;
        top: -43px;
        left: -20px;
        margin: 35px 20px 0 20px;
        width: 100%;
        border: 0;
        height: 3px;
        background: #333;
        background-image: #333;
        }
        &::after{
        content: "神奇！水淹楓丹時其他國家卻都沒有淹水";
        text-align: start;
        right: 0px;
        top: 0px;
        position: absolute;
        margin: 0 0 0 20px;
        font-family: "jf-openhuninn-2.0";
      }
      }
    .downlineM{
      font-family: 'OradanoGSRR';
      font-size: 2em;
      margin: 0 0 0 0;
      }
    }

  .noneline{
    // background-color: #333;
    border-top: 3px dashed #8c8b8b;
    margin: 1% 2% 0 2%;
  }
}
//======================標題用分隔線======================
.container{
    margin: 1% 0 0 0;
    width: 100%;
    height: 73.5%;
    display: flex;
  .leftMB{
    // display: flex;
    width: 60%;
    height: 58%;
    .upPicture{
      width: 100%;
      height: 60%;
      background-color: #685841;
      // background-image: url('../assets/img/Quest.png');
      // background-repeat: no-repeat;

    }
    .leftDB{
        display: flex;
        height: 100%;
        .left2ItemBox{
          // display: flex;
          width: 48%;
          height: 100%;
          // background-color: #685841;
          position: relative;
          &::after{
              content: "";
              width: 30vw;
              height: 30vh;
              position: absolute;
              right: -200px;
              bottom: 0;
              background-image: url("../assets/img/2.gif");
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
            }
          .leftDT{
            text-align: start;
            padding-left: 4%;
            height: 58%;
            width: 100%;
            .leftDTT{
              padding-top: 2%;
              height: 88%;
              line-height: 1.7em;
              font-size: 16px;
              word-wrap:break-word;
              font-family: "jf-openhuninn-2.0";
              &::first-letter{
                font-size:4em;
                float: left;
                line-height: 0.6em;
                margin: 0 .2em 0.1em 0;
              }
            }
          }
          .leftDP{
            margin: 0 auto;
            height: 40vh;
            width: 40vh;
            background-color: #685841;
            position: relative;
          }
        }
        .middleL{
          border: 2px dashed #333 ;
          height: 100%;
          margin: 0 auto;
          width: 2px;
        }
        .rightText{
          width: 48%;
          height: 100%;
          text-align: start;
          padding-right: 6%;
          .rightTextT{
            font-family: "jf-openhuninn-2.0"
          }
        }
    }
    .downLineLL{
          border-top: 3px dashed #8c8b8b;
          margin: 2% 0 0 0;
        }
    .downDBox{
      display: flex;
      .aText1{
        margin-top: 1.1%;
        font-family: "jf-openhuninn-2.0";
      }
      .bLine1{
        margin-top: 4%;
        height: 30px; 
        width: 71%;
        border-style: solid; 
        border-color: #8c8b8b; 
        border-width: 1px 0 0 0; 
        border-radius: 20px;
        &::before{
          display: block; 
          content: ""; 
          height: 30px; 
          margin-top: -31px; 
          border-style: solid; 
          border-color: #8c8b8b; 
          border-width: 0 0 1px 0; 
          border-radius: 20px; 
        }
      }
      .cText1{
        margin-top: 1.1%;
        font-family: "jf-openhuninn-2.0";
      }
    }
  }
  .rightMB{
    width: 38%;
    height: 98%;
    margin-left: 2%;
    .rightUC{
      height: 65%;
      background-color: #66574A;
    }
    .rightDP{
      height: 30%;
      margin-top: 5%;
      background-image: url("../assets/img/furina/furinaicon.PNG");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      transition: 0.8s;
      &:hover{
        background-image: url("../assets/img/rick.gif");
      }
    }
  }
}
.downEndline{
      margin-top: 2%;
      margin: 5px 0px 0 0px;
      width: 100%;
      border: 0;
      height: 6px;
      background: #333;
      background-image: #333;
      position: relative;
    &::before{
      content: "不會有人看左下角啦";
      position: absolute;
      font-family: "jf-openhuninn-2.0";
      left: 0;
    }
    &::after{
      content: "撰寫者，楓丹蒸氣鳥報記者，夏洛特";
      font-family: "jf-openhuninn-2.0";
      position: absolute;
      right: 0;
    }
  }
//======================新聞容器=======================
.mw-content-text {
  width: 95%;
  height: 250vh;
  margin: 0 2.5%;
  padding: 2em 4em 5em 4em;
  background: url(https://patchwiki.biligame.com/images/ys/c/cb/2s5wzhvgcq8t8gsw1b0xvks0haiaxrx.png) left top/118px no-repeat,url(https://patchwiki.biligame.com/images/ys/5/50/resfhdf0vgvhqpo85alolzppqiabtsv.png) left top/45px no-repeat,url(https://patchwiki.biligame.com/images/ys/c/c9/n0fkujsbg9dswqbe66zbiemaddo84xj.png) right top/45px no-repeat,url(https://patchwiki.biligame.com/images/ys/9/9f/gous4mcm5zt6ru5yxviighe5tyem64q.png) left bottom/45px no-repeat,url(https://patchwiki.biligame.com/images/ys/6/67/7z2k7wx820zya6wz0m563sjaykmqv4u.png) right bottom/45px no-repeat,url(https://patchwiki.biligame.com/images/ys/2/2a/f5ogmdvyb04dsfcy3kk5ne8jud38l6j.png) left top/45px repeat-x,url(https://patchwiki.biligame.com/images/ys/b/b3/3vsmvlo8qo6192b89jmoqxvj5fpol6u.png) left bottom/45px repeat-x,url(https://patchwiki.biligame.com/images/ys/4/4e/tafd5352ydnp0l9du0o3lcjczvfclnp.png) left top/19px repeat-y,url(https://patchwiki.biligame.com/images/ys/2/23/etuw92oibr0h0j4hyzly1epi69cz5zh.png) right top/19px repeat-y,#F8F3EF;
  border-radius: 6px;
  color: #66574A;
  line-height: 2.14285714;
  .mw2{
    width: 100%;
    margin: 10px 0px 5px 0;
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
  font-family: "jf-openhuninn-2.0";
  }
}
.background{
  background-image: url("../assets/img/news.jpg");
}

</style>