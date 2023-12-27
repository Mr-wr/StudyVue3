<template>
    <div class="home_view">
        <div class="home_content">
            <div class="left">基本内容 </div>
            <div class="right"></div>
        </div>
    </div>
</template>


<script lang="ts" setup name="HomeView">
// defineExpose

</script>


<style scoped lang="scss">
.home_content {
    display: flex;
    justify-content: space-between;

    .left {
        width: 200px;
        height: 300px;
        border: 1px solid #666;
        background-color: rgba($color: #666, $alpha: 0.7);
    }

    .right {
        flex-grow: 1;
        width: 200px;
        height: 300px;
        border: 1px solid #666;
        background-color: rgba($color: #666, $alpha: 0.7);
    }
}
</style>