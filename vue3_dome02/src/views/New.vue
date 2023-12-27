<template>
    <div class="home_view">
        <div class="home_content">
            <div class="left" @click="goToDetail">new基本内容{{ a }} </div>
            <div class="right">
                <RouterView />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    //eslint-disable-next-line
    name: 'New1',

}
</script>

<script lang="ts" setup name="HomeView">
import { useRouter, RouterView } from 'vue-router'
defineProps(["a"])

const router = useRouter()

const goToDetail = () => {
    router.replace({ name: 'detail', params: { a: 'detail' } }) // 假设 'detail' 是你的详情页面的路由名称
}
</script>


<style scoped lang="scss">
.home_content {
    display: flex;
    justify-content: space-between;

    .left {
        width: 200px;
        height: 300px;
        border: 1px solid #666;
        background-color: rgba($color: blue, $alpha: 0.7);
    }

    .right {
        flex-grow: 1;
        width: 200px;
        height: 300px;
        border: 1px solid #666;
        background-color: rgba($color: red, $alpha: 0.7);
    }
}
</style>