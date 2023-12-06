<template lang="">
    <div class="famArea">
        <div class="letBar">
            <RouteFamBar />
        </div>
        <div class="rightBar">
            <RouterView />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import { RouterLink,RouterView } from 'vue-router'
import RouteFamBar from '../components/RouteFamBar.vue';
export default {
    components:{
        RouterView,
        RouteFamBar
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation"])
    },
    mounted(){
        this.setLocation(14)
    }
}
</script>

<style scoped lang="scss">
    
</style>