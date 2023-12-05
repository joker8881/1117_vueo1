<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import InjectFather from '../components/injectfather.vue';
import { computed,ref,provide,onMounted } from 'vue';
export default{
    components:{
        InjectFather,
    },
    setup(){
        const { setLocation } = mapActions(counter, ['setLocation']);
        //const { 對應的 action 函數 } = mapActions(對應的 store 實例, ['要映射的 action 名稱']);
        let message = ref('hellow')
        let dataArr = ["a","b"]
        let dog = {
                name:"可口可樂",
                age:42
            }
        let setupMsg = ref('setupMsg')
        let proMessage = computed(()=>message)
        let cool = "cool"

        const addArr = () => {
            dataArr.push(setupMsg.value);
        }
        //方法的格式長這樣
        
        provide('setMSG',setupMsg)
        provide('proMessage',proMessage)
        provide("cool",cool)
        provide("arr",dataArr)
        // onMounted(() => {setLocation(12)
        // })
        return{
            setupMsg,
            cool,
            proMessage,
            dataArr,
            message,
            addArr
        }
    }
}
</script>

<template>
    <div class="box">
        <p>爺爺的變數</p>
        <p>{{ message }}</p>
        <input type="text" name="" id="" v-model="message">
        <input type="text" name="" id="" v-model="setupMsg.value">
        {{ dataArr }}
        <button type="button" @click="addArr">aaa</button>
        <InjectFather />
    </div>
</template>

<style scoped lang="scss">
.box{
    height: 500px;
    width: 300px;
}
</style>