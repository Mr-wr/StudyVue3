<template>
    <div class="home_view">

        <div class="head">
            <h1>Vue3</h1>
        </div>

        <div class="menu_content">
            <div class="menu" @click="ClickMenu(1)">首页</div>
            <div class="menu" @click="ClickMenu(2)">新闻</div>
            <div class="menu" @click="ClickMenu(3)">关于</div>
        </div>
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>
<script lang="ts">
export default {
    //eslint-disable-next-line
    name: 'Home',

}
</script>
<script lang="ts" setup name="Home">
import { reactive } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router'
let detail = reactive([{ id: 'asfdtrfay01', title: '很好的抗癌食物', content: '西蓝花' },
{ id: 'asfdtrfay02', title: '如何一夜暴富', content: '学IT' },
{ id: 'asfdtrfay03', title: '震惊，万万没想到', content: '明天是周一' },
{ id: 'asfdtrfay04', title: '好消息！好消息！', content: '快过年了' }])
const route = useRoute()
console.log("🚀 ~ file: HomeView.vue:22 ~ route:", route)
const router = useRouter()
console.log("🚀 ~ file: HomeView.vue:24 ~ router:", router)
function ClickMenu(index: number) {
    switch (index) {
        case 1:
            console.log("🚀 ~ file: HomeView.vue:28 ~ ClickMenu ~ index", index)
            router.push({
                //name:'xiang', //用name也可以跳转
                path: '/home',
                // query: {
                //     id: news.id,
                //     title: news.title,
                //     content: news.content
                // }
            })
            break;
        case 2:
            router.push({ name: 'new', params: { a: "asdf" } })
            break;
        case 3:
            router.push({ path: '/about' })
            break;
        default:
            break;
    }
}
</script>

<style scoped lang="scss">
.home_view {
    .head {
        height: 100px;
        margin-bottom: 20px;
        background-color: rgba($color: #666, $alpha: 0.7);
        text-align: center;
        line-height: 100px;
    }

    .menu_content {
        display: flex;
        justify-content: center;

        .menu {
            width: 100px;
            height: 30px;
            border: 1px solid #666;
            border-radius: 5%;
            margin: 0 20px;
            text-align: center;
        }
    }

    .content {
        width: 500px;
        height: 500px;
        border: 1px solid #666;
        border-radius: 5%;
        /* // 居中 */
        margin: 0 auto;
    }
}
</style>