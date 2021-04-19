import Axios from "axios";
import {ElMessage} from "element-plus";

const baseURL = "https://api.github.com";

const axios = Axios.create({
    baseURL,
    timeout: 20000,
});

// 前置拦截器
axios.interceptors.request.use(
    (response) => {
        // 这里根据实际项目进行拦截处理
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 后置拦截器
axios.interceptors.response.use((response) => {
    // 这里根据实际情况, 对 response 进行处理
    return response
}, (error) => {
    // 这里也要根据实际后台返回进行自定义
    if (error.response && error.response.data) {
        const code = error.response.status;
        const msg = error.response.data.message;
        ElMessage.error(`Code: ${code}, Message: ${msg}`);
        console.log(`[Axios Error]`, error.response);
    } else {
        ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
})

export default axios;
