<script setup>
import { ref, reactive, computed, nextTick } from 'vue'

const shoppingItems = ref([
  {
    name: 'apple',
    price: 7,
    isActive: true,
  },
  {
    name: 'orange',
    price: 10,
    isActive: false,
  },
])
// v-for cho objectS
const user = ref({
  fistname: 'John',
  lastname: 'Doe',
  age: 30,
})
</script>

<template>
  <div>
    <!-- 
            Rendering theo danh sách
              - dùng v-for để lặp qua một mảng và hiển thị các phần tử
              - :key giúp Vue cập nhật đúng phần tử, tránh lỗi và giúp chạy nhanh hơn.
     -->
    <ul>
      <li v-for="item in shoppingItems" :key="item.name">{{ item.name }}: {{ item.price }}</li>
    </ul>
    <!-- V-for cho một dãy số -->
    <span v-for="n in 10">{{ n }}</span>
    <!-- V-for cho object -->
    <p v-for="(value, key, index) in user" :key="key">{{ key }}: {{ value }}</p>
    <!-- V-for kết hợp với v-if -->
    <ul>
      <template v-for="item in shoppingItems" :key="item.name">
        <li v-if="item.isActive">{{ item.name }}: {{ item.price }}</li>
      </template>
    </ul>
  </div>
</template>
