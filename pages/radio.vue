<template>
    <div class="h-screen bg-slate-900 flex justify-center items-center">
        <GroupInputItem2 v-model="item2V" />
        <!-- <GroupInputItem :title="item.title" :options="item.options" v-model="selectedValue" />
        <p>{{ item2Value }}</p> -->
        <p class="text-white">{{ item2V }}</p>
    </div>
</template>
<script setup lang="ts">
// const item = {
//     title: "جای پارک",
//     options: [
//         { label: "سخت", value: "سخت" },
//         { label: "معمولی", value: "معمولی" },
//         { label: "راحت", value: "راحت" },
//     ],
// };
// const selectedValue = ref<string | null>(null);
// const updateSelectedValue = (value: string) => {
//     selectedValue.value = value;
// };
const item2V = ref<string | null>(null)

</script>
