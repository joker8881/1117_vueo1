<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template class="body">
  <div class="header">
    <Header />
  </div>
  <div class="content" v-ripple="{ color: '#5e7ce0',duration: 300, delay: 300 }">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">

.header{
  margin: 0;
  widows: 100vw;
  height: 20vh;
}

.content{
  width: 100vw;
  height: 85vh;
  text-align: center;
}
</style>
