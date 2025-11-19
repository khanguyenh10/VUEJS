<script setup>
import { useCounter } from '../composables/useCounter.js';
import { useMouse } from '../composables/useMouse.js';
const { count, increase, descrease } = useCounter();
const { x, y } = useMouse();

</script>

<template>
  <h1>Composables:</h1>
  <!--
      Composables:
       -  là các hàm JavaScript tái sử dụng được, giúp tách biệt và chia sẻ logic giữa các component trong Vue 3
       - viết test độc lập dễ dàng hơn
    -->
    <p>Count: {{ count }}</p>
    <button @click="increase">Increase</button>
    <button @click="descrease">Descrease</button>
    <p>Mouse position: {{ x }}, {{ y }}</p>
</template>
