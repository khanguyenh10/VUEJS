<template>
    <div>
        <label for="Email">Email</label>
        <input type="text" id="Email" v-model="email"/>
        <p>{{ email }}</p>
        <button @click="setEmailDefault">Set Email Default</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';


// const email = ref('');
//  defineModel: tạo 1 custom v-model từ cha component 
const email = defineModel();


const setEmailDefault = () => {
    email.value = 'a@b.c';
}
</script>