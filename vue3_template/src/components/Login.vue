<template>
    <div class=''>
        <template v-if="true">

            Login
            <button @click="login">login</button>

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

</script>
<style lang='scss' scoped></style>