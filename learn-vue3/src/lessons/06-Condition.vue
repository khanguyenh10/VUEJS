<script setup>
import { ref, reactive, computed, nextTick} from 'vue'
const isLoggined = ref(true);
const isVisible = ref(true);

const  toggleLoggedIn =  () => {
   isLoggined.value = !isLoggined.value;
}
const  toggleVisible =  () => {
   isVisible.value = !isVisible.value;
}
const userStatus = ref('online');
const changeUserStatus = () =>{
    if(userStatus.value === 'online'){
        userStatus.value = 'away';
    }else if(userStatus.value === 'away'){
        userStatus.value = 'busy';
    }else if (userStatus.value === 'busy'){
        userStatus.value = 'online';
    }
}
</script>

<template>
    <!--
        Conditional Rendering
        - v-if: hiển thị hoặc ẩn thẻ HTML dựa trên điều kiện
        - v-else-if: thêm điều kiện khác nếu v-if sai
        - v-else: nếu tất cả điều kiện trên đều sai thì hiển thị thẻ HTML này
        - v-show: ẩn hoặc hiển thị thẻ HTML bằng cách thay đổi thuộc tính display:none
    -->
    <h1 v-if="isLoggined">Chào mừng người dùng đã đăng nhập</h1>
    <h1 v-else>Chào mừng khách</h1>
    <button @click="toggleLoggedIn">{{isLoggined ? 'Đăng xuất' : 'Đăng nhập'}}</button>
    <br/>
    <h1 v-if="userStatus == 'online'" >Người dùng đang online</h1>
    <h1 v-else-if="userStatus == 'away'">Người dùng đang vắng mặt</h1>
    <h1 v-else-if="userStatus == 'busy'">Người dùng đang bận</h1>
    <h1 v-else>Không rõ trạng thái</h1>
    <button @click="changeUserStatus">thay đổi trạng thái</button>
    <br/>
    <!-- 
        v-show : toogle display:none 
    -->
    <h1 v-show="isVisible">Nội dung này ẩn hoặc hiển thị</h1>
    <button @click="toggleVisible">{{isVisible ? 'Ẩn' : 'Hiện'}}</button>
</template>

