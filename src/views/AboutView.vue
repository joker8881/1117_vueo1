<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default{
    data(){

    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"]),
    },
    mounted(){
      this.setLocation(2)
    },
}
</script>

<template>
</template>

<style scoped lang="scss">

</style>
