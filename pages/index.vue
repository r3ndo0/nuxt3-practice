<script setup>
const inputTodo = ref();
const todoId = ref(1);
const username = ref();
const serverRes = ref();
const isActive = ref(true);
const { data: todo, pending } = await useAsyncData(
  "todos",
  () => $fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`),
  { watch: todoId }
);
const pTodoHandler = () => {
  if (todoId.value <= 1) return;
  todoId.value--;
};
const nextTodoHandler = () => {
  if (todoId.value >= 200) return;
  todoId.value++;
};

const inputHandler = () => {
  todoId.value = inputTodo.value;
};
const nameHandler = async () => {
  const { data, error } = await useFetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { username: username.value, password: "rrrrrrrr" },
  });
  serverRes.value = data.value;
};
</script>

<template>
  <div class="relative">
    <p v-if="pending">Loading...</p>
    <p v-else :key="todo.id">{{ todo.id }} - {{ todo.title }}</p>
    <button
      class="bg-gray-900 text-gray-400 rounded-lg mx-6 mt-12 py-4 px-8"
      @click="pTodoHandler"
    >
      Previous Todo
    </button>
    <button
      class="bg-gray-900 text-gray-400 rounded-lg mx-6 mt-12 py-4 px-8"
      @click="nextTodoHandler"
    >
      Next Todo
    </button>
    <input placeholder="Enter a number" v-model="inputTodo" />
    <button
      class="bg-gray-900 text-gray-400 rounded-lg mx-6 mt-12 py-4 px-8"
      @click="inputHandler"
    >
      find todo
    </button>
    <form
      @submit.prevent="nameHandler"
      class="mt-12 flex gap-4 border border-gray-300 p-4"
    >
      <input
        class="p-1 border border-gray-500"
        placeholder="Enter your name"
        v-model="username"
      />
      <button
        :class="{ 'bg-gray-300': isActive }"
        class="p-1 border border-gray-500"
      >
        Send
      </button>
    </form>
    <h2 v-if="serverRes">welcome {{ serverRes.username }}</h2>
    <Loader />
  </div>
</template>
