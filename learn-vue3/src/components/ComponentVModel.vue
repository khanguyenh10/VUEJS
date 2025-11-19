<template>
    <div>
        <label for="Email">Email</label>
        <input type="text" id="Email" v-model="email"/>
        <p>{{ email }}</p>
        <button @click="setEmailDefault">Set Email Default</button>
    </div>
  <div>
        <label for="Username">Username</label>
        <input type="text" id="username" v-model="username"/>
        <p>{{ username }}</p>
        <button @click="setUsernameDefault">Set Username Default</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Using ref for v-model
// const email = ref('');

//  defineModel: tạo 1 custom v-model từ cha component 
const email = defineModel('email');
const [username, modifiers]= defineModel('username', {
    set(value){
        if(modifiers.capitalize){
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
});


const setEmailDefault = () => {
    email.value = 'a@b.con';
}

const setUsernameDefault = () => {
    username.value = 'usercon123';
}
</script>