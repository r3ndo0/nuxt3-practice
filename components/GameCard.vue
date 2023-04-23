<script setup lang="ts" >
import { useGameListStore } from "../store/state"
import { storeToRefs } from 'pinia'
const props = defineProps<Props>()
const store = useGameListStore()
const { gameList } = storeToRefs(store)
const toggle = (gameId: string) => {
    store.toggleGame(gameId)
}
const isThisGameSelected = computed(() => {
    return gameList.value.includes(props.gameId)
})

interface Props {
    gameId: string
    imgUrl: string
}


</script>


<template>
    <button @click="toggle(props.gameId)" class="w-full h-full overflow-hidden rounded-lg relative">
        <img class="h-full w-full hover:scale-125 ease-in-out duration-300 object-cover" :src="props.imgUrl" />
        <Check class="absolute w-16 h-16 left-[5%] top-[10%]" v-if="isThisGameSelected" />
    </button>
</template>