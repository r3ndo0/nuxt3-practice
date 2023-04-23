import { defineStore } from "pinia";

export const useGameListStore = defineStore("game-list", () => {
  const gameList = ref<string[]>([]);

  function toggleGame(gameId: string) {
    const gameExists = gameList.value.includes(gameId);

    if (gameExists) {
      gameList.value = gameList.value.filter((i) => i !== gameId);
    } else {
      gameList.value.push(gameId);
    }
  }

  return { gameList, toggleGame };
});
