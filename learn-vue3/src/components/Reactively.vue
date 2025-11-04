<!-- Cách truyền thống -->
<!-- <script>
  import { ref } from 'vue'

    export default {
    // `setup` là một hook đặc biệt dành cho Composition API.
    setup() {
        const count = ref(0);

        // export ref cho mẫu
        return {
        count
        }
    }
    }
</script> -->

<!-- Cách mới -> khuyên dùng -->
<script setup>
  import { ref } from 'vue'
 const count = ref(0);
 const increment = () => {
    count.value++;
 }
</script>

<template>
    <!-- 
     Khai báo state trong vue: ref
       - ref: Khi bạn sử dụng ref trong template và thay đổi giá trị của nó, Vue sẽ tự động theo dõi sự thay đổi đó và cập nhật giao diện người dùng 
     -->

   <h1>Reactively</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
</template>
