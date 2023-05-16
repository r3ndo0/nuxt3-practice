<script setup lang="ts">
import { useFetch } from '@vueuse/core'
// const { data, pending, error } = await useAsyncData("test3", () => privateFetch.get("bearer"))
const testToken = ref("test")
const baseURL = ref("https://httpbin.org/bearer")

const { isFetching, error, data } = useFetchWithBearerToken("bearer")

// const { isFetching, error, data } = await useFetchWithBearer()
// onFetchError(ctx) {
//     if (ctx.error) console.log(ctx.response?.status)
//     return ctx
// }



console.log(data.value, isFetching.value, error)




</script>



<template>
    <div v-if="data">
        {{ JSON.stringify(data) }}
    </div>
</template>