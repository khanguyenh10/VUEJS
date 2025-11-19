<script setup>
import ButtonCount from '../components/ButtonCount.vue'
import ButtonCountCustomEvent from '@/components/ButtonCountCustomEvent.vue'
import ComponentVModel from '@/components/ComponentVModel.vue'
import HelloWorld from '@/components/HelloWorld.vue'

import { ref } from 'vue'

const count = ref(0)
const increaseBy = (number1, number2) => {
  count.value = count.value + number1 + number2 // count.value + number = number;
}
const email = ref('')
const username = ref('')
const changeEmailDefaultFromParent = () => {
  email.value = 'a@b.cha'
}
const changeUsernameDefaultFromParent = () => {
  username.value = 'usercha123'
}
</script>

<template>
  <h1>Slot:</h1>
  <!--
      Slot: cho phép chèn nội dung động vào bên trong component từ bên ngoài
        - Sử dụng thẻ <slot></slot> trong template của component để định nghĩa vị trí chèn nội dung
        - Nội dung được chèn vào sẽ thay thế thẻ <slot></slot> khi component được sử dụng
        - Có thể có nhiều slot trong một component và sử dụng thuộc tính name để phân biệt
          - <slot name="slotName"></slot> để định nghĩa slot có tên
          - <template #slotName> để chèn nội dung vào slot có tên
    -->
  <HelloWorld greeting-message="helloWorld"
    ><p>content</p>
    <template #content2> <p>content2</p>  </template> 
    <template #content3> <p>content3</p>  </template>
  </HelloWorld>
</template>
