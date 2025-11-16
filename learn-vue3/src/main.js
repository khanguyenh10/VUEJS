import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from './components/GlobalComponent.vue';

const app = createApp(App);

// đăng ký global component , không cần import ở các component khác
app.component('ComponentA', GlobalComponent);


app.use(router).mount('#app')
