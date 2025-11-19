<template>
  <!-- gọi trực tiếp-->
  <button @click="$emit('increase')">Increase</button> 
  <button @click="callFuncIncrease">Increase</button>
  <button @click="callFuncIncreaseByTwoTimes">IncreaseByTwoTimes</button>
  <button @click="callFuncIncreaseBy">IncreaseBy</button>
</template>

<script setup>
 const emitInit = defineEmits(["increase", 'increaseByTwoTimes', 
  'increaseBy'
 ]); // khai báo ra 1 event custom
 const callFuncIncrease = () => {
     emitInit("increase");
 }
  const callFuncIncreaseByTwoTimes = () => {
     emitInit("increaseByTwoTimes");
 }
   const callFuncIncreaseBy = () => {
     emitInit("increaseBy", 5, 2);
 }
</script>