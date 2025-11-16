<template>
    <p>{{ JSON.stringify(props) }}</p>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    propA: Number,
    propB: [String, Number], // nhận cả giá trị string hoặc number,
    propC: {
        type: String,
        required: true
    },
    propD:{
        type: String,
        default: 'Default value'
    },
    propE:{
        type: Object,
    },
    propF:{
        type: String,
        validator(value) {
            return ["success", "warning", "error"].includes(value) //validator custom 1 prop
        }
    },
    propG:{
        type: Function
    },
    disable: Boolean
})
props.propG();
</script>