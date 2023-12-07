<template>
        <VslotButton>
            Click me quick
        </VslotButton>
        <VslotNamed v-slot:header>
            <template >
                <h1>VslotNmaed: Header</h1>
            </template>
                <h2>No name</h2>
        </VslotNamed>
        <VslotNamed v-for="item in arr">
            <!-- slot就像是一個鑰匙對一個門，我這裡用的鎖是type，那對面的名字要有隊上的才能把name丟進去 -->
            <template v-slot:[item.type]>
                <h1>{{ item.name }}</h1>
            </template>
        </VslotNamed>
        <scopedSlot v-slot="slotProps">
            {{ slotProps.text }} & {{ slotProps.count }}
            <h1>TTTT</h1>
        </scopedSlot>
        <scopedSlot v-slot="{text,count}">
            {{ text }} xxxx {{ count }}
        </scopedSlot>
        <button type="button" @click="openModal">AAAAA</button>
        <VslotModal v-show="isSHow" @aleartMessage="openModal">

        </VslotModal>
</template>
    
<script>
    import { mapActions } from 'pinia';
    import counter from '../stores/counter';
    import VslotButton from '../components/vslotButton.vue';
    import VslotNamed from '../components/vslotNamed.vue';
    import scopedSlot from '../components/scopedSlot.vue';
    import VslotModal from '../components/VslotModal.vue';
    export default{
        data() {
        return {
            arr:[{
                name:"aks",
                type:"good",
            },
            {
                name:"aka",
                type:"dwwws"
            }]
            ,
            isSHow:false
        }
    },
    methods:{
        ...mapActions(counter,['setLocation']),
        openModal(){
            this.isSHow =!this.isSHow
        }
    },
    components:{
        VslotButton,
        VslotNamed,
        scopedSlot,
        VslotModal

    },
    mounted(){
        this.setLocation(15)
    }
    }

</script>
    
<style lang="scss">
    
</style>