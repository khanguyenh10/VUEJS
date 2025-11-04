# tài liệu 
https://vuejs-course.vercel.app/
youtube.com/watch?v=Vg9n_YRGPIY&list=PLwJIrGynFq9B_BQJZJi-ikWDDkYKVUpM5

## Single File Component (SFC) là gì?
- Thay vì tách HTML, CSS, JS ra nhiều file, Vue gom chúng vào chung một file dễ bảo trì và tái sử dụng
```js
<template>
  <!-- Giao diện HTML -->
</template>

<script>
  // Logic xử lý (JavaScript)
  export default {
    data() {
      return { message: "Hello Vue!" }
    }
  }
</script>

<style>
  /* CSS cho component này */
  p { color: blue; }
</style>
```

## API Style
- Options API và Composition API
- Option API là cách truyền thống , phù hợp với dự án nhỏ chia ra gồm các phần data, methods, lifecircle(mounted)...
- Composition API là cách mới , phù hợp dự án án lớn dùng setup() và các hàm như ref, computed, watch.

## Cài Vuejs
npm create vue@latest