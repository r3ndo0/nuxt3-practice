<script setup lang="ts">

const { data, pending, error } = await useAsyncData("test", () => privateFetch.get("bearer"))



console.log(data.value, pending.value, error.value)




</script>



<template>
    <div>
        <p v-if="pending">Loading...</p>

    </div>
</template>