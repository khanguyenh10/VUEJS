<script setup>
import Helloword from '../components/Helloword.vue';
import ButtonCount from '../components/ButtonCount.vue';
import ChildrenComponent from '../components/ChildrenComponent.vue';

import { ref } from 'vue';

const message = ref("Hello world");
const   sayHi = ()=>{
    console.log("Say hi");
}
</script>

<template>

    <h1>Props Component</h1>

    <Helloword :greeting-message="message + '!'"/> <!-- hoặc greetingMessage="Hello world" đều được -->
    <button-count  :init="2"/> <!-- :init="2" - chuyển giá trị string sang number -->
    <ChildrenComponent :prop-a="1" :prop-b="11" prop-c="Kha" prop-d="Kha Change Default Prop" :prop-e="{a: 'a', b: 'b'}" prop-f="success" :prop-g="sayHi" disable/>
</template>

