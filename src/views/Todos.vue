<template>
  <div>
    <h1>ToDo List</h1>
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList';
import { mapActions } from 'vuex';
import { GET_TODO_LIST } from '@/store/actions-types';
export default {
  components: {
    ToDoList,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log("jfrejnfjkrenfjker");
      vm.requesttodo();
    });
    console.log('xnj');
  },

  methods: {
    ...mapActions({
      requesttodo: GET_TODO_LIST,
    }),
  },
};
</script>

<style></style>
