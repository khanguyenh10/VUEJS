<script setup>

const props = defineProps({
    greetingMessage: String
    // message: Number
})
console.log(props.greetingMessage)
</script>

<template>
    <h1>{{ greetingMessage }}</h1>
    <slot>Default slot content</slot>
    <slot name="content2">Default slot content2</slot>
    <slot name="content3">Default slot content3</slot>

</template>