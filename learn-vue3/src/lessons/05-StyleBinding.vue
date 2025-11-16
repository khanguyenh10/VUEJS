<script setup>
import { ref, reactive, computed} from 'vue'
const color = ref('red');
const backgroundColor = ref('blue');
const fontSize = ref(30);

const styleObject = reactive({
    border: 'none',
    borderRadius: '6px'
})
</script>

<template>
    <h1>StyleBinding</h1>
 
    <div>
      
        <button :style="[{
            color,
            backgroundColor,
            fontSize: fontSize + 'px',
        }, styleObject]" > Button </button>
    </div>
</template>

