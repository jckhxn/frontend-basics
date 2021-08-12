<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{todo}}</li>
    </ul>
    <form v-on:submit.prevent="addTodo">
    <input v-model="todoText" placeholder="What would you like todo?">
    <button type="submit">Add Todo!</button>
    </form>
  </div>
</template>
<script>
export default
{
  data:function() {
    return {
      // Define state variables.
      todos:[],
      todoText:'',
    
  }
  },
  
  // Define your methods.
  methods:
  {
   addTodo: function() {
     this.todos = [...this.todos,this.todoText];
     localStorage.setItem('todos', JSON.stringify(this.todos));

     } 

  },
  mounted: function() {
 
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos) || [];

    }
    ,
    props:{
      msg:String
    },
  }
</script>
<style scoped>

</style>