<template>
    <div class="person">
        <h2>姓名：{{ testwatchref.name }} </h2>
        <h2>年龄：{{ testwatchref.age }} </h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePreson">添加人</button>
        <button @click="showTel">查看 </button>
        <ul>
            <li v-for="(item, index) in testArray" :key="index">
                {{ fullPerson(index) }}
            </li>
        </ul>

    </div>
</template>
<script lang="ts">
export default {
    name: 'PersonVue',
}
</script>

<script name="PersonVue"   lang="ts" setup>
import { ref, reactive, toRefs, computed, watchEffect, withDefaults } from 'vue'
import { type Persons } from "@/types"
// let testinterface: Persons = [
//     { id: '', name: '张三', age: 18 },
//     { id: '', name: '李四', age: 19 },
//     { id: '', name: '王五', age: 20 }

// ]

withDefaults(defineProps<{ list: Persons }>(), {
    list: () => [
        { id: '', name: '张三', age: 18 },
        { id: '', name: '李四', age: 19 },
        { id: '', name: '王五', age: 20 }
    ]
})
// 直接用reactive传入泛型
let testinterface = reactive<Persons>([
    { id: '', name: '张三', age: 18 },
    { id: '', name: '李四', age: 19 },
    { id: '', name: '王五', age: 20 }
])
let testwatchref = ref({ name: '张三', age: 18 })
// let presonA = reactive({ name: '张三', age: 18 })
let testArray = reactive([{ name: '张三', age: 18 }, { name: '李四', age: 19 }, { name: '王五', age: 20 }])
let { name, age } = toRefs(testArray[0])
let fullPerson = computed({
    get() {
        return (indexa: number) => {
            console.log("🚀 ~ file: Person.vue:31 ~ computed ~ indexa:", indexa)

            return testArray[indexa].name + ' ' + indexa + testArray[indexa].age
        }
        // return 'asdfd'
    },
    set(val) {
        console.log("🚀 ~ file: Person.vue:38 ~ set ~ val:", val(0))
        return val(0)
        // return val
    }
})
// let agewatch = watch(() => testArray[0].age, (n, o) => {
//     console.log("🚀 ~ file: Person.vue:43watch ~ n,o", n, o)
//     if (n > 25) {
//         agewatch()
//     }
// })
// let testwatchrefstop = watch(testwatchref, (n, o) => {
//     console.log("🚀 ~ file: Person.vue:43watch ~ n,o", n, o)
//     if (n.age > 25) {
//         testwatchrefstop()
//     }
// }, { deep: true, immediate: true })
let testWeatchEffect = watchEffect(() => {
    console.log("🚀 ~ file: Person.vue:43watch ~ 一上来就执行")
    if (testArray[0].age > 25) {
        console.log(testArray[0].age);
        testWeatchEffect()
    }
})



function showTel() {
    fullPerson.value = (indexa: number) => {
        return '新的值 ' + indexa
    }
    // fullPerson._setter('123456789')
    console.log("🚀 ~ file: Person.vue:55 ~ showTel ~ fullPerson.value(1):", fullPerson)
    // console.log("🚀 ~ file: Person.vue:53 ~ showTel ~ fullPerson.value:", fullPerson.value)
    // alert('tel: 123456789')
}
function changeName() {
    name.value += '~'
}
function changeAge() {
    age.value += 1
}
function changePreson() {
    let a = [{ name: '王五', age: 21 }, { name: '王五', age: 22 }, { name: '王五', age: 23 }]
    testArray.push(...a)
    console.log(testArray)
}

defineExpose({
    name,
    age,
    changeName,
    changeAge,
    changePreson,
    showTel,
    fullPerson,
    testArray,
    testwatchref,
    testWeatchEffect
})
</script>

<style scoped>
.person {
    background-color: #fff;
    /* 阴影 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>