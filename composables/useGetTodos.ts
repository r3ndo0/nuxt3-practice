export const useTodoId = () => useState("todo-id", () => 1);

export default async (id: globalThis.Ref<number>) => {
  const { data: todo, pending } = await useAsyncData(
    "todos",
    () =>
      $fetch(
        `https://jsonplaceholder.typicode.com/todos/${id.value.toString()}`
      ),
    { watch: [id] }
  );
  return { todo, pending };
};
