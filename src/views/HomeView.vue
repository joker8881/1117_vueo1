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
      console.log(localStorage.getItem("joker8881"))
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
        <h1 class="h1t">白髮狼人現身於幽林霧道</h1>
      </div>
      <div class="acbox">

        <!-- <p class="mw2">千日紅</p> -->
        <div class="leftMB">
          <div class="upPicture"></div>
          <div class="leftDB">
              <div class="left2ItemBox">
                <div class="leftDT">
                  <p class="mw2">千日紅</p>
                  <p class="leftDTT">穿越提瓦特的冒險者千日紅，原本是居住在異世界的園藝師。不小心被朋友推到這個世界目前離不開。<br>
                    　從2.3版本不小跌進來之後不知不覺也玩了快兩年多。<br>
                    　我抽卡的原則就是「Ｏ你娘抽爆」<br>
                    　沒錯，就是Ｏ你娘塞爆，老子才不管甚麼錢包瘦小三小的，每次抽卡就是一二命起跳。小保抽到大保，大保抽到第二隻為止。武器也買一送一，跟把整個錢包的錢全送給米哈遊沒兩樣。<br>
                  </p>
                </div>
                <div class="leftDP"></div>
              </div>
              <div class="middleL"></div>
              <div class="rightText"><p class="rightTextT">　其實我已經不知道要打什麼了，所以接下來我要用圖片洗版<br>
                　所以接下來就聊聊我平常都玩些什麼其他的遊戲。<br>
                　首先我不玩英雄聯盟、APEX、瓦羅蘭、OW2，任何有牽扯技能、團隊競技與運氣要素的遊戲，因為在可預見的未來我應會爆氣。<br>
                　所以反過來說其實很明白我自己喜愛什麼類型的遊戲，可以深思熟慮，安排事項的策略遊戲<br>
                　還有就是殭屍，我非常愛的殺殭屍。非常推薦大家都去玩玩Project zomboid，宇宙好玩。<br>
                　　　最後就是，因為這邊的字會被擋住，所以我猜我打了什麼大家也都看不到，ㄏㄏ。
              </p></div>
          </div>
          <div class="downLineLL"></div>
          <div class="downDBox">
            <div class="aText1">敬請注意</div>
            <div class="bLine1"></div>
            <div class="cText1">讓人生氣的魔術！</div>
          </div>
        </div>
        <div class="rightMB">
          <div class="rightUC">
            <p class="mw2">《神秘的宇宙語言，親訪占星術士莫娜》</p>
            <p class="textint" style="margin-top: 20px;">
              　　今日記者夏洛特在楓丹與占星術士莫那的會面，彷彿打開了占星之門，讓我們得以深入了解這神秘的宇宙語言。</p>
            <p class="textint" style="margin-top: 30px;">　莫娜告訴我「每個人的命座都有其獨特的性格特徵和能量。命座的位置以及星象的交互作用，都會表現出一種獨特的形象，能影響一個人的性格、命運和成就。也是象徵他這個人的存在</p>
            <p class="textint" style="margin-top: 15px;">　占星術讓我們更好地理解自己，引導我們走向更有意義的生命之路。」但有時人們並不能夠全然接受自己命運中的不幸，她說道。</p>
            <p class="textint" style="margin-top: 15px;">　「曾經有人叫我幫他算了之後會發生的事情，我也如實告知。但對方卻因為也知道了會發生壞事就對我發脾氣」無奈地抱怨著，但莫娜說自己是不會對占星的結果說謊。</p>
            <p class="textint" style="margin-top: 15px;">　在她的眼中，占星不僅僅是預測未來、邁向成功的工具，更是一種啟發和指引。莫娜強調，透過對星座的深入瞭解，我們能夠更好地認識自己，發現內在的潛力，並更有針對性地應對生活中的挑戰。或著是像前面所說想辦法去度過困難。她形容命座如同一盞明燈，為我們提供方向。這種命座之光不僅存在於夜空中的星辰，更融入到我們的靈魂深處，成為人生旅途中的忠實指南。</p>
            <p class="textint" style="margin-top: 20px; width: 80%;">　　這次的訪談讓我深刻體悟到，命座不僅是一種宇宙的語言，更是一種連接我們與宇宙之間的神秘紐帶。感謝此次莫娜的分享，這段命座之旅讓我們能夠更加明瞭宇宙奧秘。</p>
          </div>
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
  height: 18.5%;
  
.h1t{
    font-family: "OldSong-v1.007";
    font-size: 4em;
    margin: 1% 0;
    transition: 0.6s;
    &:hover{
        transform:scale(1.2,1.2);
      }
  }
  .kk{
    font-family: 'OradanoGSRR';
    font-size: 4.5em;
    margin: 20px 0 0 0;
    line-height: 1em;
    transition: all 1s ease 0s;
    position: relative;
    &::before{
        content: "";
        width: 30vw;
        height: 30vh;
        position: absolute;
        right: -170px;
        bottom: -290px;
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
        content: "根據研究指出！每個人死前都喝過水！！";
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
.acbox{
  display: flex;
  width: 100%;
  height: 81.5%;
  margin: 1% 0 0 0;
  .leftMB{
    // display: flex;
    width: 60%;
    height: 58%;
    .upPicture{
      width: 100%;
      height: 60%;
      // background-color: #685841;
      border: 2px solid rgba(0, 0, 0, 0.212);
      background-image: url('../assets/img/ama.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: 0.6s;
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
              width: 35vw;
              height: 35vh;
              position: absolute;
              right: -320px;
              bottom: 0;
              background-image: url("../assets/img/2.gif");
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
            }
          .leftDT{
            text-align: start;
            padding-left: 4%;
            height: 74%;
            width: 100%;
            .leftDTT{
              padding-top: 2%;
              height: 88%;
              line-height: 2em;
              font-size: 1.5em;
              word-wrap:break-word;
              // word-break: keep-all;
              font-family: "jf-openhuninn-2.0";
              &::first-letter{
                font-size:3.4em;
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
            // background-color: #685841;
            background-image: url("../assets/img/5.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
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
          padding-right: 3%;
          .rightTextT{
            font-family: "jf-openhuninn-2.0";
            font-size: 1.5em;
            word-wrap:break-word;
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
      // display: flex;
      // background-color: #66574A;
      position: relative;
      &::after{
        content: "";
        width: 20vw;
        height: 20vh;
        position: absolute;
        right: -120px;
        bottom: 40px;
        background-image: url("../assets/img/pai1-26/pai24/s-write.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .textint{
        margin: 0;
        text-align: start;
        font-size: 1.2em;
        font-family: "jf-openhuninn-2.0";
      }
    }
    .rightDP{
      height: 30%;
      margin-top: 5%;
      background-image: url("../assets/img/furina/furinaicon.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      transition: 0.8s;
      border: 2px solid rgba(0, 0, 0, 0.212);
      &:hover{
        background-image: url("../assets/img/rick.gif");
        transform:scale(1.2,1.2);
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
  height: 330vh;
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
    transition: 0.6s;
    &:hover{
        transform:scale(1.1,1.1);
      }
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