<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            arr:[111,222,333]
        }
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"]),
    },
    mounted(){
      this.setLocation(6)
    },
}
</script>

<template>
<div class="a"></div>
<div class="b">
    <div class="left" ></div>
    <div class="right">
        <div class="rightT">
            <p class="title">Title</p>
            <p class="text">waweweqewqesdasdasfswqwrrwqsad1221easdddddddddddddddddwqewqesadasfasddasd</p>
        </div>
        <div class="rightD">
            <div class="box" v-for="item in arr"></div>
        </div>
        <div class="rightD2">
            <p class="boxT" v-for="item in arr">{{item}}</p>
        </div>
        <div class="rightD">
            <div class="box" v-for="item in arr"></div>
        </div>
        <div class="rightD2">
            <p class="boxT" v-for="item in arr">{{item}}</p>
        </div>
        <div class="rightD">
            <div class="box" v-for="item in arr"></div>
        </div>
        <div class="rightD2">
            <p class="boxT" v-for="item in arr">{{item}}</p>
        </div>
    </div>
</div>
<div class="c"></div>
</template>

<style scoped lang="scss">

.a{
    width: 100%;
    height: 30vh;
    background-color: rgb(138, 241, 241);
    margin-bottom: 4vh;
}
.b{
    width: 100%;
    height: 150vh;
    display: flex;
    .left{
        width: 20%;
        height: 100%;
        background-color: rgb(145, 243, 243);
    }
    .right{
        width: 78%;
        height: 100%;
        margin: 0 0 0 2%;
        .rightT{
            width: 100%;
            height: 10%;
            display: flex;
            margin: 0 2% 0 0;
            .title{
            width: 20%;
            height: 100%;
            text-align: center;
            font-size: 3em;
        }
        .text{
            width: 80%;
            height: 85%;
            margin: 2% 0 0 2%;
            text-align: left;
            word-wrap: normal;
        }
        }
        .rightD{
            display: flex;
            height: 20%;
            width: 100%;
            justify-content: space-between;
            .box{
        margin: 0 2% 0 0;
        width: 24%;
        height: 100%;
        background-color: rgb(145, 243, 243);
    }
        }
        
        .rightD2{
            display: flex;
            height: 6%;
            width: 100%;
            justify-content: space-between;
            .boxT{
        margin: 2% 2% 0 0;
        width: 24%;
        height: 82%;
        // background-color: rgb(145, 243, 243);
    }
    }
}
}
.c{
    margin-top: 3%;
    height: 15vh;
    width: 100%;
    background-color: rgb(145, 243, 243);
}
</style>