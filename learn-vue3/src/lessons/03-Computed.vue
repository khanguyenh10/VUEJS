<script setup>
import { reactive, computed, ref } from 'vue'
const book = reactive({
  name: 'Book 1',
  chapters: [],
});

const addChapter =  () => {  book.chapters.push('Chapter')};

const isPublished = computed(() => {
    console.log("Computed isPublished re-evaluated"); // thực hiện lại khi book.chapters thay đổi
    return book.chapters.length > 0 ? "Có" : "Chưa";
});
const now = computed(() => {
    console.log("Computed now re-evaluated"); // chỉ render 1 lần dù add Chaper 
    return new Date().toLocaleString();
})
const fistname = ref('John');
const lastname = ref('Doe');

//computed ko dùng  getter và setter
// const fullname = computed(() => {
//    return `${fistname.value} ${lastname.value}`
// })

//computed dùng getter và setter
const fullname = computed({
    //gettter
    get() {
        return `${fistname.value} ${lastname.value}`;
    },
    //setter
    set(newValue){
        [fistname.value, lastname.value] = newValue.split(',');
    }
})
const changeFullName = () =>{
    console.log("Before change fullname:", fullname.value);
   fullname.value = 'Jane, Smith'; // Lỗi: fullname là thuộc tính chỉ đọc khi ko dung getter và setter
}

</script>
<template>
  <div>
    <!--
      Thuộc tính tính toán computed properties
        - Thay vì viết một hàm để trả về giá trị dựa trên các phản ứng dữ liệu, bạn có thể định nghĩa một thuộc tính tính toán.
        - Vue sẽ tự động theo dõi các phản ứng dữ liệu mà thuộc tính tính toán phụ thuộc vào và chỉ cập nhật khi cần thiết.
        - computed value là thuộc tính chỉ đọc, nếu muốn thay đổi giá trị của nó thì bạn dùng getter và setter
    --->
    <h1>Computed</h1>
    <p>Book name: {{ book.name }}</p>
    <p>Đã xuất bản {{ isPublished }}</p>
    <p>Now: {{ now }}</p>
    <button @click="addChapter">Add Chapter</button>
    <hr/>
    <p>Firstname: {{ fistname }}</p>
    <p>Lastname: {{ lastname }}</p>
    <p>Fullname: {{ fullname }}</p>
    <button @click="changeFullName">Change Fullname</button>
  </div>
</template>
