<script setup>


import LocalComponent from '@/components/LocaleComponent.vue'
import { provide, ref } from 'vue';
const currentLocale = ref('vietnam');

const updateCurrentLocale = () => {
  provide('locale', "english");
}
provide('locale', {
  locale: currentLocale,
  updateLocale: updateCurrentLocale
});
</script>

<template>
  <h1>ProvideInject:</h1>
  <!--
      Provide/Inject: cho phép truyền dữ liệu từ component cha xuống các component con mà không cần phải truyền qua props
        - Sử dụng provide() trong component cha để cung cấp dữ liệu
        - Sử dụng inject() trong component con để nhận dữ liệu
        - Thường được sử dụng trong các trường hợp như theme, localization, hoặc các dịch vụ chung
        - nếu dùng provide ở main.js thì cú pháp app.provide('key', value)
        - có thể update state trong provide bằng cách provide 1 object có state và function update state cho component con gọi 
        - muốn người dùng ko thay đổi giá trị thì dùng provide('key', readonly(value))
    -->
    <LocalComponent/><br/>
    <button @click="currentLocale = 'english'">Change locale</button>
</template>
