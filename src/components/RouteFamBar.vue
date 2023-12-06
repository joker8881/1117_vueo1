<template lang="">
    <div>
        <RouterLink to="/RouteFam/RouteChild1">RouteChild1</RouterLink>
        <RouterLink to="/RouteFam/RouteChild2">RouteChild2</RouterLink>
    </div>
</template>

<script>
import {RouterLink,RouterView} from 'vue-router'
export default {
    components:{
        RouterLink
    }
}
</script>

<style scoped lang="scss">
    
</style>