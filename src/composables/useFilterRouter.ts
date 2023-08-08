import { ref } from 'vue';
import router from '@/router';


export const useFilterRouter = () => {
    console.log('ROUTER', router);
    const url = router.currentRoute.value.path

    return {
        url,
    };
};