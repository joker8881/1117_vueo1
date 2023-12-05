<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import flowChild1 from '../components/flowChild1.vue';
import flowChild2 from '../components/flowChild2.vue';
export default{
    data(){
        return{
            obj:{
            },
            check:false
        }
    },
    props:[
        "data",
    ],
//   watch:{
//     //監測整體金額，如果有income與outcome發生變化，整體盈餘this.balence會發生變化且改變style顏色
//     name:function(){
//         console.log(this.name)
//     },
//     },
    methods:{
        ...mapActions(counter,["setLocation"]),
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
            this.obj = y
            this.check = !this.check
        },
        setShow(y) {
            this.check = !this.check
        },
    },
    components:{
        flowChild1,
        flowChild2,
    },
    mounted(){
      this.setLocation(11)
    },
}

</script>

<template>
    <h1>DataFlow</h1>
    <h3>資料需求:姓名、手機、性別(radio)、地址</h3>
    {{ this.obj }}
    <div class="inAndCheck">
        <flowChild1 v-if="this.check" @data="getReturnData"/>
        <flowChild2 v-if="!this.check" v-bind="this.obj" @back="setShow"/>
    </div>
    <p>在flowChild1輸入資料</p>
    <p>在flowChild2確認資料</p>
</template>

<style scoped lang="scss">
.inAndCheck{
    // display: flex;
    margin: 0 auto;
}
</style>