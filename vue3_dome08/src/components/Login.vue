<template>
    <div class=''>
        Login
        <button @click="login">login</button>
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
const login = () => {
    permissionStore.$reset()
    userStore.$reset()
    userStore.getUserInfo().then(res => {
        updateRouter({ roles: res.roles }, router).then(() => {
            router.push('/super_editor')
        })
    }).catch(err => {
        console.log(err)
    })
}
</script>
<style lang='scss' scoped></style>