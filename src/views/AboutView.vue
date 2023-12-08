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
      this.setLocation(2)
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
        <p class="kk">快看阿！這個人竟然用新聞報紙自我介紹</p>

        <div class="downline">
          <p class="downleftl"></p>
          <p class="downlineM">TIMES</p>
          <p class="downleftR"></p>
        </div>
        <div class="noneline"></div>
        <h1 class="h1t">我告訴你們喔！今天是禮拜五耶！！</h1>
      </div>
      <div class="acbox">
        <div class="leftMB">
          <div class="upPicture"></div>
          <div class="leftDB">
              <div class="left2ItemBox">
                <div class="leftDT">
                  <p class="mw2">李紹人</p>
                  <p class="leftDTT">我這個人算是滿奇怪的，朋友們也都常常說水瓶座全都是外星人。笑死不能認同的更多<br>
                    　我對於自己想要的東西非常的明確，也算是目的性強烈的個性。<br>
                    　所以為了會達到我的目標我可以發揮強大的集中力。<br>
                    　不過反過來說，這些活動大多侷限在電腦前或是動腦的事情上，度的。畢竟體力爛爆。<br>
                  </p>
                </div>
                <div class="leftDP"></div>
              </div>
              <div class="middleL"></div>
              <div class="rightText"><p class="rightTextT">　除了養娃娃跟看看梗圖以外應該沒有什麼興趣。<br>
                　很少聽這個世代的音樂，大部分都是聽純音樂。或上世紀60年代的ABBA、披頭四。大部分都是聽遊戲的配樂配工作。<br>
                　我沒有用FB跟IG，大部分都是用line跟Discord直接聊天，因為對我來說社群軟體沒有意義。<br>
                　如果我想知道別人的事情，與其去看他們的IG，我不如聽聽本人會如何跟我描述會更有趣的。<br>
                　剩下的時間還有兩個月多，大家多多加油撐過去吧。<br>
              </p></div>
          </div>
          <div class="downLineLL"></div>
          <div class="downDBox">
            <div class="aText1">沒錢</div>
            <div class="bLine1"></div>
            <div class="cText1">這我</div>
          </div>
        </div>
        <div class="rightMB">
          <div class="rightUC">
            <p class="mw2">《這次的使用技巧》</p>
            <p class="textint" style="margin-top: 20px;">
              　　首先參考是從pinterest上找到新聞排版版面，然後照著排。</p>
            <p class="textint" style="margin-top: 30px;">　畫面上那個轉來轉去有點煩人會讓人不禁盯著看的小東西是用setInterval()方法寫的，setInterval是每隔一段時間就會執行一次，我把讓她動起來的方法寫在裡面跑</p>
            <p class="textint" style="margin-top: 15px;">　最左上角的按鈕是綁在最外層的APP上，透過按鈕控制ture,false值達成左邊跳出header，同理滑鼠游標也是。</p>
            <p class="textint" style="margin-top: 15px;">　設計上除了使用新聞排版以外，也採用了部分原神風格的元素。</p>
            <p class="textint" style="margin-top: 15px;">　進場使用的影片釋放在APP層，透過V-if達成關閉其他顯示的部分只留影片與按鈕。達成類似登入概念的畫面。然後使用了超級無敵大量的偽元素來安排版面。包含標題上的較細的線條，與上面下面角落的小標</p>
            <p class="textint" style="margin-top: 20px;">　　我自己是覺得設計網頁最需要考慮的是統一感與交互性。儘管我在codepen看到很多酷炫的效果，但是跟我想要的東西不同最後也只能不使用。結果回到最後，老老實實地出好版面，寫出可以用的用法就好了。</p>
          </div>
          <p class="mw3">本月最佳梗圖！</p>
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
    transition: all 1s ease 0s;
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
    &:hover{
        transform:scale(1.1,1.1);
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
        content: "我最喜歡的零食是樂事原味";
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
        content: "官方網站綻放萬丈光芒";
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
        content: "潤餅！潤餅！蒜味潤餅！啊啊啊啊啊！！";
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
  height: 80.5%;
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
      background-image: url('../assets/img/fine.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;

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
              right: -450px;
              bottom: 0;
              background-image: url("../assets/img/pin.png");
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
            background-image: url("../assets/img/no.gif");
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
        width: 92%;
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
        right: 300px;
        bottom: -30px;
        background-image: url("../assets/img/hue.gif");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .textint{
        margin: 0;
        text-align: start;
        font-size: 1.4em;
        font-family: "jf-openhuninn-2.0";
      }
    }
    .rightDP{
      height: 30%;
      margin-top: 5%;
      background-image: url("../assets/img/tom.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      transition: 0.8s;
      border: 2px solid rgba(0, 0, 0, 0.212);
      &:hover{
        background-image: url("../assets/img/think.gif");
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
      content: "不會有人看左下角啦，可是你看了對吧？";
      position: absolute;
      font-family: "jf-openhuninn-2.0";
      left: 0;
    }
    &::after{
      content: "撰寫者，李紹人";
      font-family: "jf-openhuninn-2.0";
      position: absolute;
      right: 0;
    }
  }
//======================新聞容器=======================
.mw-content-text {
  width: 95%;
  height: 360vh;
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