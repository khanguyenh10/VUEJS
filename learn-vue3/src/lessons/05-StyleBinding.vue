<script setup>
import { ref, reactive, computed } from 'vue'
const color = ref('red')
const backgroundColor = ref('blue')
const fontSize = ref(30)

const styleObject = reactive({
  border: 'none',
  borderRadius: '6px',
})
</script>

<template>
  <!-- 
        StyleBinding
        - cú pháp: :style="styleName"
        - viết style trong style và gán vào style của thẻ HTML
           - Viết style kiểu cammelCase
        - gán style động với object 
        - gán style động với array
-->
  <h1>StyleBinding</h1>

  <div>
    <button
      :style="
        {
          color,
          backgroundColor,
        }"
    >
      Button
    </button>
    <button
      :style="[
        {
          color,
          backgroundColor,
          fontSize: fontSize + 'px',
        },
        styleObject,
      ]"
    >
      Button
    </button>
  </div>
</template>
