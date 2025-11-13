<script setup>
import { ref, reactive, computed} from 'vue'
const isActive = ref(true);
const hasError = ref(false);
// const classObject = reactive({
//     active: true,
//     'has-error': true
// })

const classObject = computed(() => ({
    active: isActive.value && !hasError.value,
    'has-error': hasError.value
}));

const changeActive = () => {
    isActive.value = !isActive.value;
}
</script>

<template>
    <h1>ClassStyleBinding</h1>
    <!-- 
      ClassBinding
      - viết class trong style và gán vào class của thẻ HTML
      - gán class động với object 
      - gán class động với array

    -->
    <div>
        <!-- <button class="btn" :class="{active: isActive, 'has-error': hasError}">Active </button> -->
        <button @click="changeActive" class="btn" :class="classObject">{{isActive ? 'Active': 'Inactive'}} </button>
        <button @click="changeActive" class="btn" :class="[isActive ? 'active': '', {'has-error': hasError}, 'has-warning']">{{isActive ? 'Active': 'Inactive'}} </button>
    </div>
</template>

<style>
.btn{
     border:none;
    background: #ede9fe;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;    
    &:hover{
        background: #c7d2fe;
    }
}
.active{
    background: #8b5cf6;
    &:hover{
        background: #7c3aed;
    }
}
.has-error{
     background: #ef4444;
    &:hover{
        background: #e92929ff;
    }
}
</style>