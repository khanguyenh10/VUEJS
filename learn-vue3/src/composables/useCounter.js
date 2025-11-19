import { onMounted, ref } from 'vue';

export const useCounter = () => {
    const count = ref(0);
    const increase = () => {
        count.value++;
    }
    const descrease = () => {
        count.value--;

    }
    onMounted(() => {
       count.value = 10;
    });
    return {
        count,
        increase,
        descrease
    };
}
