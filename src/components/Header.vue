<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
    data(){
        return{
            arr:["aaa","bbb","ccc"]
        }
    },
    components:{
        RouterLink,
    },
    computed:{
        ...mapState(counter, ["location","locationInfo"]),
        home(){
            this.$router.push('/')
        },
        about(){
            this.$router.push('/about')
        },
        c(){
            this.$router.push('/VtextAndVmodel')
        },
    }
}
</script>

<template>
    <div class="headerShow">
        <div class="box"><p class="mw3">冒險之路</p></div>
        <div class="box" style="margin-top: 120px;"><div class="picture" @click="home()"></div><RouterLink to="/" class="a" :class="{'cass': this.location === 1}" >Home</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture2" @click="about()"></div><RouterLink to="/about" class="a" :class="{'cass': this.location === 2}">About</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" @click="c()"></div><RouterLink to="/VtextAndVmodel" class="a" :class="{'cass': this.location === 3}">VtextAndVmodel</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/Vfor" class="a" :class="{'cass': this.location === 4}">Vfor</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/Von" class="a" :class="{'cass': this.location === 5}">Von</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/p" class="a" :class="{'cass': this.location === 6}">p</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/Vbind" class="a" :class="{'cass': this.location === 7}">Vbind</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/VifandVshow" class="a" :class="{'cass': this.location === 8}">Vif and Vshow</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/WatchAndComputed" class="a" :class="{'cass': this.location === 9}">WatchAndComputed</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/props" class="a" :class="{'cass': this.location === 10}">props</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/DataFlow" class="a" :class="{'cass': this.location === 11}">DataFlow</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink to="/ProvideandInject" class="a" :class="{'cass': this.location === 12}">ProvideandInject</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink v-for="(i,k) in arr" :to="`/User/${i}`" class="a" :class="{'cass': this.location === i}">User {{i}}</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink :to="`/RouteFam`" class="a" :class="{'cass': this.location === 14}">User {{i}}</RouterLink></div>
        <div class="box" style="margin-top: 15px;"><div class="picture3" ></div><RouterLink :to="`/Vslot`" class="a" :class="{'cass': this.location === 15}">Vslot {{i}}</RouterLink></div>
    </div>
</template>

<style scoped lang="scss">

.headerShow{
    overflow: scroll;
    .box{
        display:flex;
        width: 50vw;
        position: relative;
        .picture{
            position: absolute;
            height: 89px;
            width: 89px;
            left: 3px;
            transition: 0.6s;
            background-image: url("../assets/img/adventureCard.png");
            background-size: cover;
            background-position: center;
            &:hover{
                background-image: url("../assets/img/adventureCard2.png");
            }
        }
        .picture2{
            position: absolute;
            height: 89px;
            width: 89px;
            left: 3px;
            transition: 0.6s;
            background-image: url("../assets/img/Proud.png");
            background-size: cover;
            background-position: center;
            &:hover{
                background-image: url("../assets/img/ProudB.png");
            }
        }
        .picture3{
            position: absolute;
            height: 89px;
            width: 89px;
            left: 3px;
            transition: 0.6s;
            background-image: url("../assets/img/Gacha.png");
            background-size: cover;
            background-position: center;
            &:hover{
                background-image: url("../assets/img/Gacha2.png");
            }
        }
        .a{
            position: absolute;
            left:100px;
            margin-top: 20px;
            height: 70%;
            width: 450px;
            line-height: em;
            font-size: 2em;
            text-decoration: none;
            white-space:nowrap;
            transition: 0.4s;
            color: whitesmoke;
            position: relative;
            &:hover{
                background-color: gainsboro;
                color:darkslategray
            }
        }
    }
    widows: 100%;
    height: 100%;
    background-color: #525f75;
    display: flex;
    flex-direction: column;
    .mw3{
    position: absolute;
    top: 70px;
    width: 72%;
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
    font-family: 'jf-openhuninn-2.0.woff';
    }
}

.cass{
    background-color: rgb(125, 125, 255);
    color: white;
    border-radius: 5px;
    transition: 0.6s;
}

</style>