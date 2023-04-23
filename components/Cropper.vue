<script setup >
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
const result = ref(null)
const resultCoordinate = ref({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
})
const cropper = ref(null)
const img = ref("/gow.jpeg")
// const change = ({ coordinates, canvas }) => {
//     // console.log(coordinates, canvas)
// }
const crop = () => {
    const { coordinates: croppedCoordinates, canvas } = cropper.value.getResult()
    resultCoordinate.value = croppedCoordinates
    result.value = canvas.toDataURL("image/png")
    console.log(resultCoordinate.value)

}
</script>

<template>
    <div class="flex justify-center flex-col">
        <Cropper ref="cropper" class="w-[600px] " :src="img" :roundResult="true" :stencil-size="{
                width: 300,
                height: 300
            }" :stencil-props="{
            handlers: {},
            movable: false,
            resizable: false,
            aspectRatio: 1,
        }" image-restriction="stencil" />
        <button @click="crop" class="p-4 border my-12">Crop</button>



    </div>
</template>