<template lang="">
    <h1>UserId : {{ this.$route.params.userId }}</h1>
    <h1>UserId : {{ this.userId }}</h1>
</template>

<script>
import { mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
    data(){
        return{
            ccc:"",
        }
    },
    props:[
        "userId"
    ],

    methods:{
        ...mapActions(counter,["getLocation","setLocation"]),
        c(){
            this.ccc=this.$route.params.userId
            if(this.ccc= aaa){

            }
        }
    },
    mounted(){
        this.setLocation(this.$route.params.userId)
        console.log(this.$route)
        console.log(this.$route.params.userId)
    }
}
</script>

<style scoped lang="scss">
    
</style>