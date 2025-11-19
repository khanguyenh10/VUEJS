<script setup>
import HelloWorld from '../components/HelloWorld.vue';
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
    <!--
      Props:
        - là thuộc tính truyền dữ liệu 1 chiều từ component cha xuống component con
        - là 1 cách chia sẽ dữ liệu giữa các component với nhau
        - Cú pháp:
            + Ở component con: định nghĩa props sử dụng defineProps() để định nghĩa kiểu dữ liệu props
            + Ở component cha: 
                - truyền giá trị cho props sử dụng cú pháp tương tự như attribute : kebab-case, camelCase của thẻ HTML
                - sử dụng binding :prop-name="value" để chuyển giá trị động
        - props động có thể thông qua ref, reactive, computed
        - props disable kiểu boolean:
            + khi truyền disable thì giá trị của nó là true
            + khi không truyền disable thì giá trị của nó là false
       
    -->
    <Helloword :greeting-message="message + '!'"/> <!-- hoặc greetingMessage="Hello world" đều được -->
    <button-count  :init="2"/> <!-- :init="2" - chuyển giá trị string sang number -->
    <ChildrenComponent :prop-a="1" :prop-b="11" prop-c="Kha" prop-d="Kha Change Default Prop" :prop-e="{a: 'a', b: 'b'}" prop-f="success" :prop-g="sayHi" />
</template>

