<script setup>
import { ref, reactive, computed, nextTick} from 'vue'
const newTodo = ref('xx');
let todos = reactive([{
    id: 1,
    text: "Learn vue js"
},{
   id: 2,
    text: "Build a todo app"
}   
]);

const addTodo = () => {
    if(newTodo.value.trim() === '') return;
    const todo = {
        id: todos.length + 1,
        text: newTodo.value
    }
    todos.push(todo);
    newTodo.value = '';
}
const removeTodo = (id) =>{
    // const newTodos = todos.filter(todo => todo.id !== id);
    // todos.length = 0; // clear array reactive
    // todos.push(...newTodos); // push lại các phần tử còn lại
    // console.log(todos);

    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) todos.splice(index, 1);
}
</script>

<template>
     <div>
         <h1>Todolist</h1>
        <!-- 
            - v-model: tạo liên kết 2 chiều giữa dữ liệu và input
            - @keyup.enter: lắng nghe sự kiện nhấn phím enter
        -->
        <input type="text" v-model="newTodo" @keyup.enter="addTodo"/>
            <button @click="addTodo"> Thêm</button>
            <br/>
        <ul>
            <li v-for="todo in todos" :key="todo.id">{{ todo.text }} <span @click="removeTodo(todo.id)"> Xóa  </span></li>
        </ul>
       
     </div>
</template>

