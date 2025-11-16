<script setup>
const props = defineProps({
    greetingMessage: String
    // message: Number
})
console.log(props.greetingMessage)
</script>

<template>
    <h1>{{ greetingMessage }}</h1>
</template>