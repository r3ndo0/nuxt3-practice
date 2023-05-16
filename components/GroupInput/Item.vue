<template>
    <div class="flex ga-12 items-center justify-center">

        <div class="radio-input  border border-violet-900 bg-gray-700 text-gray-200">

            <label v-for="(option, index) in options" :key="index">
                <input type="radio" :value="option.value" v-model="selectedOption" @change="emitValue" />
                <span>{{ option.label }}</span>
            </label>
            <span class="selection"></span>

        </div>
        <h2 class="mx-8 w-12 text-gray-200">{{ selectedOption }}</h2>

    </div>
</template>
  
<script lang="ts" setup>
import { defineProps, ref } from 'vue';

interface Option {
    label: string;
    value: string;
}

const props = defineProps({
    title: String,
    options: {
        type: Array as () => Option[],
        required: true,
        validator: (options: Option[]) => options.length === 3,
    },
});

const selectedOption = ref<string | null>(null);
const emitValue = () => {
    if (selectedOption.value !== null) {
        emit('update:modelValue', selectedOption.value);
    }
}
const emit = defineEmits(['update:modelValue']);

</script>



<style scoped >
.radio-input input {
    display: none;
}

.radio-input {
    --container_width: 300px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: var(--container_width);
    overflow: hidden;
}

.radio-input label {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    font-weight: 600;
    letter-spacing: -1px;
    font-size: 14px;
}

.selection {
    display: none;
    position: absolute;
    height: 100%;
    width: calc(var(--container_width) / 3);
    z-index: 0;
    left: 0;
    top: 0;
    transition: .15s ease;
}


.radio-input label:has(input:checked)~.selection {
    background-color: rgb(119, 19, 145);
    display: inline-block;
}

.radio-input label:nth-child(1):has(input:checked)~.selection {
    transform: translateX(calc(var(--container_width) * 0/3));
}

.radio-input label:nth-child(2):has(input:checked)~.selection {
    transform: translateX(calc(var(--container_width) * 1/3));
}

.radio-input label:nth-child(3):has(input:checked)~.selection {
    transform: translateX(calc(var(--container_width) * 2/3));
}
</style>