<script setup>
const file = ref(null);
const pfp = ref("/file-input.png")

const fileName = computed(() => file.value?.name);
const fileExtension = computed(() => fileName.value?.substr(fileName.value?.lastIndexOf(".") + 1));
const fileMimeType = computed(() => file.value?.type);
const fileSize = computed(() => file.value?.size)

const uploadFile = (event) => {
    pfp.value = URL.createObjectURL(event.target.files[0])
    file.value = event.target.files[0];
};
const submitFile = () => {
    const reader = new FileReader()
    reader.readAsDataURL(file.value);
    reader.onload = async () => {
        const encodedFile = reader.result.split(",")[1];
        const data = {
            file: encodedFile,
            fileName: fileName.value,
            fileExtension: fileExtension.value,
            fileMimeType: fileMimeType.value,
        };
        console.log(data)
    }
}


</script>


<template>
    <div class="m-12">
        <div class="w-32 h-32 relative rounded-full border-2  border-red-300">
            <img :src="pfp" class="object-cover w-32 h-32 rounded-full" />
            <div class="absolute right-[-5px] bottom-[-10px]">
                <input @change="uploadFile" accept="image/*" type="file" class="hidden" name="myFile" id="myFile">
                <label for="myFile" class=" cursor-pointer text-green-500">
                    <Cam />
                </label>

            </div>

        </div>
        <button @click="submitFile" class="border p-4">
            Test
        </button>
    </div>
</template>

