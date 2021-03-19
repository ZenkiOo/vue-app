<template>
  <ul class="todo-list">
    <ToDoItem />
  </ul>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
export default {
  name: "ToDoList",
  components: {
    ToDoItem,
  },
};
</script>

<style></style>
