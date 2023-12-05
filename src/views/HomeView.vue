<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
    },
    computed:{
        ...mapState(counter, ["obj1"])
    },
    methods:{
        ...mapActions(counter,["getLocation","setLocation","getData"]),
        get(){
            this.getData()
            this.obj = this.obj1
        }
    },
    mounted(){
      this.setLocation(1)
    },
}
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
