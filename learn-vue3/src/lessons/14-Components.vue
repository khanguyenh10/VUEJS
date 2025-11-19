<script setup>
import ButtonCount from '../components/ButtonCount.vue'
import ButtonCountCustomEvent from '@/components/ButtonCountCustomEvent.vue'
import ComponentVModel from '@/components/ComponentVModel.vue'

import { ref } from 'vue'

const count = ref(0)
const increaseBy = (number1, number2) => {
  count.value = count.value + number1 + number2 // count.value + number = number;
}
const email = ref('');
const username = ref('');
const changeEmailDefaultFromParent = () => {
    email.value = 'a@b.cha';
}
const changeUsernameDefaultFromParent = () => {
    username.value = 'usercha123';
}
</script>

<template>
  <h1>Component:</h1>
  <!--
      Component: chia nhỏ giao diện thành các phần nhỏ hơn để dễ quản lý và tái sử dụng
        - tên component: theo quy tắc PascalCase hoặc kebab-case
      Component Custom Event:
        - Sử dụng để truyền dữ liệu từ component con lên component cha
        - Cú pháp:
            + Ở component con: sử dụng defineEmits() để định nghĩa các sự kiện và truyền dữ liệu khi cần thiết
            + Ở component cha: lắng nghe sự kiện sử dụng cú pháp @event-name="handlerFunction"
      Component Toàn cầu:
        - Đăng ký component toàn cục để sử dụng ở bất kỳ đâu trong ứng dụng mà không cần phải import từng lần
        - Cách đăng ký: trong file main.js hoặc main.ts sử dụng app.component('ComponentName', ComponentObject)
      Component v-model:
        - Sử dụng để tạo liên kết 2 chiều giữa component cha và component con
        - bản chất của nó defindProps + Emits
        - Cú pháp:
            + Ở component con: sử dụng defineModel() để định nghĩa giá trị và sự kiện cập nhật
            + Ở component cha: sử dụng v-model="dataProperty" để liên kết dữ liệu
        - Đối số của Component v-model:
            + Mặc định: v-model tương ứng với prop 'modelValue' và event 'update:modelValue'
            + Tùy chỉnh: v-model:customProp tương ứng với prop 'customProp' và event 'update:customProp'
        - custom Modifiers cho component v-model:
            + .capitalize: tự động viết hoa ký tự đầu tiên
    -->
  <!-- Import 1 component -->
  <ButtonCount :init="0" />
  <!--  <button-count /> đều được-->
  <h1>Component Event:</h1>
  <p>Count: {{ count }}</p>
  <button-count-custom-event @increase="count++" @increase-by-two-times="count+=2" @increase-by="increaseBy" />
  <h1>Component global</h1>
  <ComponentA/>
  <!-- <h1>Component v-model:</h1> -->
  <!-- <component-v-model v-model="email" /> -->
  <h1>Component v-model, Modifiers cho component v-model</h1>
  <component-v-model v-model:email="email" v-model:username.capitalize="username" />
  <button @click="changeEmailDefaultFromParent">Change Email Default From Parent</button>
  <button @click="changeUsernameDefaultFromParent">Change Username Default From Parent</button>

</template>
