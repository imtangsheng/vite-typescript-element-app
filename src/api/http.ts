/**
 * @file api.ts
 * @author Tang
 * @date 2023-08-15
 * @description API服务模块
*/

/**
 * API服务模块
 */

import axios,{AxiosRequestConfig} from 'axios';
import { ElMessage } from 'element-plus';
import * as ApiTypes from './types';

const MesDuration = 5 * 1000;
const USER_STORE = new ApiTypes.UserStore();
// axios.defaults.baseURL = "http://localhost:8000";
const service = axios.create({
    baseURL: "/api",
    timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        const token = USER_STORE.token;
        if (token) {
            config.headers.token = token;
        }
        return config;
    },
    (error) => {
        // Do something with request error
        ElMessage({
            message: "错误码："+error.code+";错误："+error.message,
            type: 'error',
            duration: MesDuration
        });
        console.log(error);
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (!res.status){
            ElMessage({
                message: res.message || 'Error',
                type: 'error',
                duration: MesDuration
            });
        }
        return res;
    },
    (error) => {
        console.log("err" + error); // for debug
        // HTTP状态码
        // const status = error.response?.status;
        // switch (status) {
        //     case 401:

        ElMessage({
            message: "错误码："+error.status +".信息："+ error.message,
            type: 'error',
            duration: MesDuration
        });
        return Promise.reject(error);
    }
);

const http = {
    get<T>(
        url: string,
        params?: object,
        config?: AxiosRequestConfig,
    ): Promise<ApiTypes.IResultData<T>> {
        return service.get(url, { params, ...config });
    },

    post<T>(
        url: string,
        data?: object,
        config?: AxiosRequestConfig,
    ): Promise<ApiTypes.IResultData<T>> {
        return service.post(url, data, config);
    }
}

// 用户登录
export async function login(data:ApiTypes.ILoginParams): Promise<boolean>{
    const res = await http.post<{token:string}>('/user/login', data);
    if (res.status) {
        USER_STORE.setToken(res.data.token);
        USER_STORE.username = data.username;
    }
    return res.status;
}

export default service;