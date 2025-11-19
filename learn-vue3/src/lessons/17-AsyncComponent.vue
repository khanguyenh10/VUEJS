<script setup>
import { defineAsyncComponent } from 'vue';
const ComponentVModel = defineAsyncComponent({
  loader: () => import('../components/ComponentVModel.vue'),
  loadingComponent: () => import('../components/LoadingComponent.vue'),
  errorComponent: () => import('../components/ErrorComponent.vue'),
}
);



</script>

<template>
  <h1>AsyncComponent:</h1>
  <!--
      Async Component: cho phép tải các component một cách lười biếng (lazy loading) khi chúng thực sự cần thiết, giúp giảm kích thước gói ban đầu và cải thiện hiệu suất ứng dụng
      Cú pháp:
        - sử dụng defineAsyncComponent để định nghĩa một component bất đồng bộ
        - truyền vào một hàm trả về một Promise mà resolve thành component cần tải
        - có thể sử dụng các tùy chọn như loadingComponent, errorComponent, delay, timeout để tùy chỉnh trải nghiệm người dùng trong quá trình tải component
    -->
    <ComponentVModel/>
</template>
