<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, ref , onUpdated} from 'vue';

const timer = ref(0);
let intervalId = null;
const count = ref(0);
const increment = () => {
    count.value++;
}

//onBeforeMount: state, ref đã được khởi tạo trước khi component được gắn vào DOM
//onMounted: khi component được gắn vào DOM
//onUnmounted: khi component biến mất khỏi DOM
//onBeforeUnmount: state, ref biến mất trước khi component biến mất khỏi DOM
//onBeforeUpdate: trước khi state thay đổi
//onUpdated: sau khi state thay đổi
// khi add events ở onMounted và remove events ở onBeforeUnmount


onBeforeMount(() =>{
    console.log('BeforeMount about page');
})
onMounted(() => {
    console.log('Mounted about page');
    // intervalId = setInterval(() => {
    //     timer.value++;
    // }, 1000);   
})
onBeforeUnmount(() => {
    console.log('BeforeUnmount about page');
    clearInterval(intervalId);
})
onUnmounted(() => {
    console.log('Unmounted about page');
})

onBeforeUpdate(() => {
    console.log('BeforeUpdate about page', document.getElementById('count').textContent);
})
onUpdated(() => {
    console.log('Updated about page', document.getElementById('count').textContent);
})

</script>

<template>
    <h1>This is about page</h1>
    <p>Timer: {{ timer }}</p>
    <button @click="increment" id="count">Count: {{ count }}</button>
</template>

