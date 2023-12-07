<template>
    <div>
        <slot :text="this.message" :conunt="1"></slot>
    </div>
</template>
    
<script>
export default{
        data(){
            return{
                message:"message"
            }
        }
    }
</script>
    
<style>
    
</style>