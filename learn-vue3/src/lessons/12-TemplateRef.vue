<script setup>
import { ref, reactive, computed, nextTick, watch, watchEffect, onMounted} from 'vue'

const inputRef = ref(null);
const list = ref(['Item1', 'Item2', 'Item3']);
const itemRefs = ref([]);


onMounted(() => {
    console.log("itemRefs", itemRefs.value);
    inputRef.value.focus(); // focus vao input
    itemRefs.value.forEach(item => {
        item.style.transition = 'opacity 1s ease';
        item.style.opacity = 1;
    })
})
const initializeThirdPartyLibrary = (el) => {
    // Initialize third-party library
    console.log(el);
}   

</script>

<template>

    <h1>Template Ref</h1>
    <!-- 
     template ref:
        - khái niệm: giúp chúng ta tham chiếu đến 1 phần tử DOM cụ thể, hoặc instance của component
        - sử dụng khi: cần thao tác trực tiếp với DOM như focus, thay đổi style
        - cú pháp: 
            - <input ref="inputRef" />
            - ref trong v-for 
                - cách 1: ref="itemRefs" -> itemRefs là mảng các phần tử DOM
                - cách 2: :ref="(el) => { itemRefs[index] = el }" -> gán từng phần tử DOM vào mảng itemRefs
            - sử dụng với third-party library: :ref="(el) => { initializeThirdPartyLibrary(el) }"
    -->
     <input type="text" ref="inputRef">
     <ul>
        <!-- <li v-for="(item, index) in list" :key="index" ref="itemRefs" style="opacity: 0;">
            {{ item }}
        </li> -->
          <li v-for="(item, index) in list" :key="index" :ref="(el) => { itemRefs[index] = el }" style="opacity: 0;">
            {{ item }}
        </li>
     </ul>
     <input :ref="(el) => { initializeThirdPartyLibrary(el) }"/>
</template>

