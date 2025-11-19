<script setup>
import { inject } from 'vue';
const {locale, updateLocale} = inject('locale', {
    locale: 'default-locale', // khai báo default value nếu không tìm thấy provide
});
const message = inject('message');
</script>
<template>
    LocaleComponent: {{locale }} Message: {{ message }}
    <button @click="updateLocale">Change current locale</button>
</template>