<script>
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
    data(){
        return{
            point:0,
            ntd:0,
            xxx:0
        }
    },
    beforeCreate(){
        console.log("beforecreate") //vue檔案建立，但事件、變數、屬性尚未建立
    },
    created(){
        console.log("created") //vue檔案建立且事件、變數、屬性等已建立
    },
    beforeMount(){
        console.log("beforeMount") //DOM Tree 尚未連接
    },
    mounted(){
        console.log("Mount") //DOM Tree 已連接
    },
    beforeUpdate(){
        console.log("beforeUpdate") //變數已更動，但畫面未更新
    },
    updated(){
        console.log("Updated") //變數已更動且畫面也同步更新完成
    },
    beforeUnmount(){
        console.log("beforeUnmount")
    },
    unmounted(){
        console.log("unmounted")
    },
    watch:{
        point(){
            this.ntd = this.point * 10
        }
    },
    //監聽，監看的變數名稱發生變化時，執行裡面的內容。watch是自動執行的
    computed:{
        jyp(){
            return this.ntd * 4.5
        }
    },
    //類似偽元素，但可以對這個方法的值進行修改跟應用
    methods:{
        ...mapActions(counter,["setLocation"]),
        clickPoint(){
            this.point +=1
            console.log(this.jyp * 200)
            this.xxx = this.jyp
        }
    },
    mounted(){
        this.setLocation(9)
    }
}
</script>

<template>
    <p>{{ this.point }}</p>
    <p>{{ this.ntd }}</p>
    <p>{{ this.jyp }}</p>
    <div class="circle" @click="clickPoint()"></div>
</template>

<style scoped lang="scss">
.circle{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: 0.5s;
    margin: 0 auto;
    background-color: red;
    &:hover{
    width: 250px;
    height: 250px;
    }
}
</style>