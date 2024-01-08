<template>
    <div class=''>
        <template v-if="true">

            Login
            <button @click="login">login</button>
            <!-- <Home :data="homedata"></Home> -->
        </template>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Login',
}
</script>
<script  setup lang='ts'>
import { useUser } from "@/stores/modules/user"
import { usePermission } from "@/stores/modules/permission"
import { updateRouter } from '@/hooks/modules/updateRouter'
import { useRouter } from "vue-router"
import test2 from "@/hooks/modules/test2"
const router = useRouter()
const userStore = useUser()
const permissionStore = usePermission()
const login = async () => {
    permissionStore.$reset()
    userStore.$reset()
    try {
        const userInfo = await userStore.getUserInfo()
        await updateRouter({ roles: userInfo.roles }, router)
        router.push('/home')
    } catch (err) {
        console.log(err)
    }

}

let homedata = reactive({
    name: '2', width: '700', height: '700', color: 'black', index: 1,

    ary: [
        { name: '1', width: '600', height: '650', color: 'red', index: 2 },
        {
            ary: [{ width: '500', height: '500', color: 'aqua', index: 3 }], name: '2', width: '600', height: '600', color: 'brown', index: 2,
        },
        { name: '3', width: '500', height: '600', color: 'blue', index: 2, }
    ]
})
// const teset2 = () => {
//     console.log('test2')
//     return 2
// }

// const test = async () => {
//     let a = await teset2()
//     if (a == 2) {
//         // throw new Error('test')
//     }
//     return "test" + a
// }
// console.log(test)
// try {
//     let a = await test()
// } catch (err) {
//     console.log(err)
// }
</script>
<style lang='scss' scoped>
.a {
    color: brown
}
</style>