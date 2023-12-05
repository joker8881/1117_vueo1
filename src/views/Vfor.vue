<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default{
    //語法糖
    data(){//data = function{}
        return{
            arr:[1,2,3,4,5,6],
            arr2:[
                {
                    name:"可口可樂",
                    age: 4,
                    type:"哈士奇"
                },
                {
                    name:"可口可辣",
                    age: 6,
                    type:"果醬狗狗"
                },
                {
                    name:"可口可甜",
                    age: 5,
                    type:"花生醬狗狗"
                },
            ],
            arr3:[1,2,3,4,5,6,7,8,9,10]
        }
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"]),
    },
    mounted(){
      this.setLocation(4)
    },
}
</script>


<template>
<h3>V-for</h3>
<!-- arr -->
<p v-for="item in arr">{{ item }}</p>
<p v-for="(item, index) in arr">{{ index }}</p>

<!-- arr2 -->
<ol v-for="element in arr2">
    <li>{{ element.name }}</li>
    <li>{{ element.type }}</li>
    <li>{{ element.age }}</li>
</ol>

<select name="" id="">
    <option value="">請選擇</option>
    <option value="xxx" v-for="xxx in arr3">{{ xxx }}</option>
</select>
</template>

<style scoped lang="scss">

</style>