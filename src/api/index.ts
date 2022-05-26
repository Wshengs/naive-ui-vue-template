import axios, { AxiosInstance, AxiosResponse } from 'axios'
const Axios: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_VUE_APP_API,
    // timeout: 12000,
    headers: {
        'Content-Type': 'application/json'
    }
})
// Axios.defaults.withCredentials = true
// Axios.interceptors.request.use(
//     <T extends AxiosRequestConfig>(config: T): T => {
//         // 在发送请求之前做些什么
//         return config
//     },
//     (error: any) => {
//         // 对请求错误做些什么
//         return Promise.reject(error)
//     }
// )
//
// // 添加响应拦截器
Axios.interceptors.response.use(
    <T extends AxiosResponse<any>>(response: T): T => {
        // loadingInstance.close()
        return response.data
    },
    (error: any): Promise<void> => {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)

//获取项目version
export const getVersion = () => Axios.get(`${import.meta.env.VITE_PUBLIC_PATH}version.json?v=${Math.random()}`)
