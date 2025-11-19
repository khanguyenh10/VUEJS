<script setup>
import ButtonCount from '../components/ButtonCount.vue';
import ButtonCountCustomEvent from '@/components/ButtonCountCustomEvent.vue';
import ComponentVModel from '@/components/ComponentVModel.vue';

import { ref } from 'vue';

const count = ref(0);
const email = ref('');
const increaseBy = (number1, number2) =>{
    count.value = count.value + number1 + number2; // count.value + number = number;
}
</script>

<template>

    <h1> Component: {{ count }}</h1>
     <!-- :init="2" - chuyển giá trị string sang number -->
     <!-- <button-count  :init="2"/>  -->
      <!-- <button-count-custom-event @increase="count++" @increase-by-two-times="count+=2" @increase-by="increaseBy" /> -->
    <component-v-model v-model="count" />
    <button @click=""></button>
</template>
