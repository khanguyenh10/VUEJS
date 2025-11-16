<script setup>
import { ref, reactive, computed, nextTick, watch, watchEffect, onMounted} from 'vue'

const inputRef = ref(null);
const list = ref(['Item1', 'Item2', 'Item3']);
const itemRefs = ref([]);


onMounted(() => {
    console.log("itemRefs", itemRefs.value);
    inputRef.value.focus(); // focus vao input
    itemRefs.value.forEach(item => {
        item.style.transition = 'opacity 1s ease';
        item.style.opacity = 1;
    })
})
const initializeThirdPartyLibrary = (el) => {
    // Initialize third-party library
    console.log(el);
}   

</script>

<template>

    <h1>Template Ref</h1>
     <input type="text" ref="inputRef">
     <ul>
        <!-- <li v-for="(item, index) in list" :key="index" ref="itemRefs" style="opacity: 0;">
            {{ item }}
        </li> -->
          <li v-for="(item, index) in list" :key="index" :ref="(el) => { itemRefs[index] = el }" style="opacity: 0;">
            {{ item }}
        </li>
     </ul>
     <input :ref="(el) => { initializeThirdPartyLibrary(el) }"/>
</template>

