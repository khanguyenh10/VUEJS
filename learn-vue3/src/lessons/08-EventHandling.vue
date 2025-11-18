<script setup>
import { ref, reactive, computed, nextTick } from 'vue'
const count = ref(0)
const sayHi = (name) => {
  alert(`Xin chào ${name}`)
}
const submit = () => {
  alert('Submit')
}
</script>

<template>
  <h1>Event Handling</h1>
  <!--
       click event
        - v-on:click="clickHandler"
        - @click="clickHandler"
        - @click.stop="clickHandler" : ngăn chặn bubbling
        - @clic.self="clickHandler" : chỉ click trên chính element đó
        - @click.shift="submit" : người dùng nhấn chuột đồng thời giữ phím Shift để submit
      @submit.prevent="submit" : ngăn chặn hành vi mặc định , có thể dùng .stop kết hợp nếu cần
      @keyup.enter.alt="submit" : nhấn alt + enter để submit
    -->
  <div>
    <button v-on:click="count++">Thêm 1</button>
    <button @click="sayHi('A')">Chào A</button>
    <button @click="sayHi('B')">
      Chào B
      <button @click.stop="sayHi('C')">Chào C</button>
    </button>
    <div @click.self="sayHi('D')">
      <button>Chào D</button>
    </div>
    <p>Count: {{ count }}</p>
    <form @submit.prevent.stop="submit">
      <!-- nếu ko chỉ type mặc định là submit -->
      <button type="submit">Submit</button>
    </form>
    <br />
    <input placeholder="Nhập tên của bạn" @keyup.enter.alt="submit" />
    <!-- nhấn alt + enter--><br /><br />
    <button @click.shift="submit">người dùng nhấn chuột đồng thời giữ phím Shift.</button>
  </div>
</template>
