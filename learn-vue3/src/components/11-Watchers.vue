<script setup>
import { ref, reactive, computed, nextTick, watch, watchEffect} from 'vue'
const question = ref("");
const isLoading = ref(false);
const answer = ref("");


// watcher: theo dõi dữ liệu thay đổi
watch(question, async (newQuestion, oldQuestion) => {
    if(newQuestion.includes("?")) {
        isLoading.value = true;
        answer.value = "Đang suy nghĩ";
        try {
            const response  = await(fetch("https://yesno.wtf/api"));
            answer.value = (await response.json()).answer;
        }catch(error) {
            answer.value = "Error";
        }finally {
            isLoading.value = false;
        }
    }
})



</script>

<template>
    <h1>Watcher</h1>
     <p>Hỏi một câu hỏi có thể trả lời bằng "yes" hoặc "no"</p>
     <input type="text" v-model="question">
     <p> {{ answer }} </p>
</template>

