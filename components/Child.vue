<script setup>

const count = useCounter()

</script>




<template>
    <button @click="count++" class="bg-gray-900 text-gray-500 mt-2 mx-4 py-4 px-8 rounded-lg">PLUS</button>
    <button @click="count--" class="bg-gray-900 text-gray-500 mt-2 mx-4 py-4 px-8 rounded-lg">MINUS</button>
</template>