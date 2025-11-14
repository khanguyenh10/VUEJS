<script setup>
import { ref, reactive, computed, nextTick} from 'vue'
const text = ref("Hello");
const multiText = ref("");
const checkboxNames = ref([]);
const genderNames = ref('male');
const checked = ref(false);

const firstOption = ref('firstOption');
const secondOption = ref('secondOption');

const handleInput = (e) =>{
    text.value = e.target.value;
}

</script>

<template>
    <h1>Form Input</h1>
     <!--
      Để xử lý input có 2 cách:
      C1: :value + @input
      C2: v-model
         - các loại modifier
            + v-model.lazy: nguoi dung phai click ra ngoai de thay doi
            + v-model.number: chuyen type string thanh number \
            + v-model.trim: xoa khoang trang dau va cuoi
     -->
     <div>
        <!-- <input type="text" :value="text" @input="handleInput"> -->

        <p>text: {{ text }} {{ typeof text }}</p>
         <!-- <input v-model="text"/><br/> -->
         <!-- <input v-model.lazy="text"/><br/> -->
         <input v-model.lazy.number="text"/><br/>
         <p>multiText: {{ multiText }}</p>
         <textarea v-model="multiText" placeholder="Input your message"></textarea>
         <p>  checkbox: {{ checked }}</p>
         <!-- 
         có thể ràng buộc dữ liệu mong muốn 
            true-value="yes"
            false-value="no" 
         -->
        <input type="checkbox"  v-model="checked" true-value="yes" false-value="no">
        <p> Mutiple checkbox: {{ checkboxNames }}</p>
        <input type="checkbox" id="a" v-model="checkboxNames" :value="firstOption">
        <label for="a">A</label>
         <input type="checkbox" id="b" v-model="checkboxNames" :value="secondOption">
        <label for="b">B</label>
         <input type="checkbox" id="c" v-model="checkboxNames" value="C">
        <label for="c">C</label>
         <p> Radio Gender: {{ genderNames }}</p>
        <input type="radio" id="male" v-model="genderNames" value="male">
        <label for="male">male</label>
         <input type="radio" id="female" v-model="genderNames" value="female">
        <label for="female">female</label>
        <p>Select: {{ multiText }}</p>
        <select v-model="multiText">
            <option disabled value="">Please select one</option>
            <option :value="{name: 'A'}">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
    </div>
</template>

