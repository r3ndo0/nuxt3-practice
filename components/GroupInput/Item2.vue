<template>
    <input class="rounded bg-gray-600 text-white w-[100px]" v-model="item2Value" />
</template>

<script setup lang="ts">
const item2Value = ref<string | null>(null)
// const emitItem2Value = () => {
//     if (item2Value.value !== null) {
//         emit("update:item2Value", item2Value.value)
//     }
// }

</script>