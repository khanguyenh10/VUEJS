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
const useStatus = ref('online');
const changeUserStatus = () =>{
    if(useStatus.value === 'online'){
        useStatus.value = 'away';
    }else if(useStatus.value === 'away'){
        useStatus.value = 'busy';
    }else if (useStatus.value === 'busy'){
        useStatus.value = 'online';
    }
}
</script>

<template>
    <h1 v-if="isLoggined">Chào mừng người dùng đã đăng nhập</h1>
    <h1 v-else>Chào mừng khách</h1>
    <button @click="toggleLoggedIn">{{isLoggined ? 'Đăng xuất' : 'Đăng nhập'}}</button>
    <br/>
    <h1 v-if="useStatus == 'online'" >Người dùng đang online</h1>
    <h1 v-else-if="useStatus == 'away'">Người dùng đang vắng mặt</h1>
    <h1 v-else-if="useStatus == 'busy'">Người dùng đang bận</h1>
    <h1 v-else>Không rõ trạng thái</h1>
    <button @click="changeUserStatus">thay đổi trạng thái</button>
    <br/>
    <!-- 
        v-show : toogle display:none 
    -->
    <h1 v-show="isVisible">Nội dung này ẩn hoặc hiển thị</h1>
    <button @click="toggleVisible">{{isVisible ? 'Ẩn' : 'Hiện'}}</button>
</template>

