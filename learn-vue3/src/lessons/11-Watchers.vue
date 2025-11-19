<script setup>
import { ref, reactive, computed, nextTick, watch, watchEffect} from 'vue'
const question = ref("");
const isLoading = ref(false);
const answer = ref("");

const x = ref(0);
const y = ref(0);

const user = reactive({
    name: "John",
    age: 30,
    class:{
        students: 10
    }
})


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
// theo dõi 1 cái getter
watch(() => x.value + y.value, (sum) => {
    console.log("tổng của x và y: " , sum);
})

watch([x, () => y.value+ 1], ([newX, newY]) => {
    console.log("x: ", newX);
    console.log("y: ", newY);
    
})
// theo dõi thuộc tính name
watch(() => user.name, (newUser, oldUser) => {
    console.log("user name changed from ", oldUser, " to ", newUser); //ko thể watch thuộc tính của object, để mún thay đổi ta dùng gettter ()=> user.name
})

// theo dõi object user
watch(user, (newUser, oldUser) => {
    console.log("User", `${JSON.stringify(newUser)}`);
},{deep: false, immediate: true}) // deep: false ko cập nhật thay đổi trong nested object, immediately: true, in ra thay đổi ngay lần dùng đầu tiên

// nên dùng
watchEffect(() => {
    console.log("Giá trị của", `x: ${x.value}, y: ${y.value}`); // ko cần dùng immediate như trong watch
})


const increment = () => {
    x.value++;
    y.value++;
}
const changeName = () => {
    user.name = "Jane";
    user.class.students++;
}


</script>

<template>
<!-- 
  watcher: theo dõi dữ liệu thay đổi
     + theo dõi ref, reactive, computed, getter, mảng
     + watch không thể theo dõi thuộc tính của object : user.name trực tiếp mà phải dùng getter
     +  watch theo dõi theo dạng lazy
        +  có deep = true: để mặc định, theo dõi dữ liệu trong nested object, 
        +  immediately = true: theo dõi dữ liệu ngay lần đầu dùng watch, in ra chúng ta trong lần đầu tiên
     + watchEffect: 
        + thay đổi dữ liệu, in ra thay đổi ngay lần đầu dùng, chỉ thấy giá trị mới không thấy giá trị cũ
        + nên dùng cho dễ dàng
-->
    <h1>Watcher</h1>
     <p>Hỏi một câu hỏi có thể trả lời bằng "yes" hoặc "no"</p>
     <input type="text" v-model="question" :disabled="isLoading">
     <p> {{ answer }} </p>
     <br/>
     <p> X + Y = {{ x}} + {{ y }} </p>
     <button @click="increment">Increment</button>
     <br/>
     <p> {{ user.name }} - {{ user.age }}</p>
     <button @click="changeName">Change name</button>
</template>

