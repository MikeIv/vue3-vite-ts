import { ref } from 'vue';

export const useTestFunc = () => {
    const numArr = ref([2, 32, 1234, 54, 323]);

    return {
        numArr,
    };
};