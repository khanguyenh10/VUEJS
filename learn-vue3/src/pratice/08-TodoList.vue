<script setup>
import { ref, reactive, computed, nextTick} from 'vue'
const newTodo = ref('');
const todos = reactive([{
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
    todos.push(todo)
}
const removeTodo = (id) =>{
    todos.value = todos.value.filter(todo => todo.id !== id);
}
</script>

<template>
     <div>
        <input type="text" v-model="newTodo" @keyup.enter="addTodo"/>
            <button @click="addTodo"> Thêm</button>
            <br/>
           <!-- V-for cho danh sách -->
            <!-- :key giúp Vue cập nhật đúng phần tử, tránh lỗi và giúp chạy nhanh hơn. -->
        <ul>
            <li v-for="todo in todos" :key="todo.id">{{ todo.text }} <span @click="removeTodo(todo.id)"> Xóa </span></li>
        </ul>
       
     </div>
</template>

