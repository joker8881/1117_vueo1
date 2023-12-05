<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState,mapActions } from 'pinia';
import counter from '../stores/counter';
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    },
    computed:{
        ...mapState(counter, ["location","locationInfo"])
    }
}
</script>

<template>
    <div class="headerShow">
        <RouterLink to="/" class="a" :class="{'cass': this.location === 1}" style="margin-top: 50px;">Home</RouterLink>
        <RouterLink to="/about" class="a" :class="{'cass': this.location === 2}">About</RouterLink>
        <RouterLink to="/VtextAndVmodel" class="a" :class="{'cass': this.location === 3}">VtextAndVmodel</RouterLink>
        <RouterLink to="/Vfor" class="a" :class="{'cass': this.location === 4}">Vfor</RouterLink>
        <RouterLink to="/Von" class="a" :class="{'cass': this.location === 5}">Von</RouterLink>
        <RouterLink to="/p" class="a" :class="{'cass': this.location === 6}">p</RouterLink>
        <RouterLink to="/Vbind" class="a" :class="{'cass': this.location === 7}">Vbind</RouterLink>
        <RouterLink to="/VifandVshow" class="a" :class="{'cass': this.location === 8}">Vif and Vshow</RouterLink>
        <RouterLink to="/WatchAndComputed" class="a" :class="{'cass': this.location === 9}">WatchAndComputed</RouterLink>
        <RouterLink to="/props" class="a" :class="{'cass': this.location === 10}">props</RouterLink>
        <RouterLink to="/DataFlow" class="a" :class="{'cass': this.location === 11}">DataFlow</RouterLink>
        <RouterLink to="/ProvideandInject" class="a" :class="{'cass': this.location === 12}">ProvideandInject</RouterLink>
    </div>
    <!-- <p>{{ location }}</p>
    <p>{{ locationInfo }}</p> -->
</template>

<style scoped lang="scss">

.headerShow{
    widows: 100%;
    height: 100%;
    background-color: azure;
    display: flex;
    flex-direction: column;
}
.a{
    margin-left: 10px;
    font-size: 2em;
    text-decoration: none
}

.cass{
    background-color: rgb(125, 125, 255);
    color: white;
    border-radius: 5px;
    transition: 0.6s;
}
</style>