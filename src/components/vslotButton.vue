<template>
    <button type="button" class="vslotBtn">
        <slot />
    </button>
</template>
    
<script>
export default{

}
</script>
    
<style lang="scss" scoped>
    .vslotBtn{
        color: #FFF;
        background-color: linear-gradient(315deg,#42d392 25%,#647eff);
        border: none;
        padding: 5px 10px;
        margin: 5px;
        border-radius: 8px;
        cursor: pointer;
    }
</style>