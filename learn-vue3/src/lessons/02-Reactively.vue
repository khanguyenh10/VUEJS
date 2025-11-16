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
import { ref, reactive, nextTick } from 'vue'

// Sử dụng ref
const countRef = ref(0);
countRef.value++;

// Sử dụng reactive
const object = reactive({
  count: 0,
  user: {
    age: 18,
  },
  array: [1, 2, 3],
})
const increment = async () => {
  object.count++ // dùng ref thì object.value.count++;
  object.user.age++
  object.array.push(4)
  console.log("prev state: ", document.getElementById('count').innerText)
  await nextTick()
  console.log("updated state: ", document.getElementById('count').innerText)
}
</script>

<template>
  <!-- 
     Khai báo state trong vue: ref và reactive
       - cách dùng ref: 
           - Khi bạn sử dụng ref trong template và thay đổi giá trị của nó, Vue sẽ tự động theo dõi sự thay đổi đó và cập nhật giao diện người dùng 
           - ref có thể chứa các kiểu dữ liệu nguyên thủy (như số, chuỗi, boolean) hoặc các đối tượng phức tạp (như mảng, đối tượng).
           - ref dùng value để truy cập giá trị 
       - cách dùng reactive: 
            - Tương tự như ref, nhưng thường được sử dụng để tạo các đối tượng phức tạp hơn. Khi bạn sử dụng reactive, Vue sẽ theo ko dùng value để truy cập giá trị bên trong reactive.
            - nếu dữ liệu là kiểu object nên dùng reactive
    nextTick: là một hàm quan trọng trong Vue giúp bạn chờ Vue cập nhật DOM xong rồi mới chạy code tiếp theo.
     -->
  <h1>Ref</h1>
  <p >Count: {{ countRef }}</p>
  <button @click="countRef++">Increment</button>

  <hr/>
  <h1>Reactively</h1>
  <p id="count">Count: {{ object.count }}</p>
  <p>Age: {{ object.user.age }}</p>
  <p>Count: {{ object.array }}</p>
  <button @click="increment">Increment</button>
</template>
