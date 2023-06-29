import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import axios from "axios"; // axios实例
import qs from 'qs'

type Result<T> = {
    code: number;
    message: string;
    result: T
}

export class Request {
    instance: AxiosInstance;
    //基础配置
    baseConfig: AxiosRequestConfig = {baseURL: import.meta.env.VITE_BASE_URL, timeout: 5000}

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(Object.assign(this.baseConfig, config))
        this.instance.interceptors.request.use(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (config: AxiosRequestConfig) => {
                return config
            },
            (error: any) => {
                return Promise.reject(error)
            }
        );
        this.instance.interceptors.response.use((result: AxiosResponse) => {
            return result.data
        }),
            (error: any) => {
                return Promise.reject(error)
            }
    }

    // 定义一些方法
    request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.request(config)
    }

    get<T = any>(
        url: string,
        params: object,
    ): Promise<AxiosResponse<Result<T>>> {
        const paramsUrl = qs.stringify(params)
        const Url = `${url}?${paramsUrl}`
        return this.instance.get(Url, params)
    }

    post<T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<Result<T>>> {
        return this.instance.post(url, data, config)
    }
}

export default new Request({})
