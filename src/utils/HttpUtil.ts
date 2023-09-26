import axios from "axios";

type ResponseType<T> = {
  data: T,
  success?: boolean
}

//实例化axios
const instance = axios.create({
  //设置超时时间
  timeout: 2000,
  // headers: {
  //   'Content-Type': 'application/json'
  // }
})

//请求拦截器
//todo
instance.interceptors.request.use((config) => {
  console.log(config, '---request config----')
  return config
}, (err) => {
  return Promise.reject(err)
})


//响应拦截器
//todo
instance.interceptors.response.use((res) => {
  return {
    ...res,
    success: res?.status === 200 ? true : false
  }
}, (err) => {
  return Promise.reject(err)
})


/**
 * HTTP GET 请求
 * @param url 地址
 * @param params 参数
 * @param headers 请求头
 * @author 7mu_12
 */
export const getRequest = async <T> (url: string, params: any = {}, headers: any = {}): Promise<ResponseType<T>> => {
  const append_params = Object.entries(params).map(([name, value]) => `${name}=${encodeURIComponent(`${value}`)}`).join('&');
  const request_url = append_params ? `${url}${url.includes('?') ? '&' : '?'}${append_params}` : url
  return instance.get(`${request_url}`, {
    headers: {
      ...headers
    }
  })
}

/**
 * HTTP POST 请求
 * @param url 地址
 * @param params 参数
 * @param headers 请求头
 * @author 7mu_12
 */
export const postRequest = async <T> (url: string, params: any = {}, headers: any = {}): Promise<ResponseType<T>> => {
  return instance.post(url, params, {
    headers: {
      ...headers
    }
  })
}

/**
 * HTTP DELETE 请求
 * @param url 地址
 * @param headers 请求头
 * @author 7mu_12
 */
export const deleteRequest = async <T> (url: string, params?: any, headers: any = {}): Promise<ResponseType<T>> => {
  return instance.delete(url, {
    params,
    headers: {
      ...headers
    }
  })
}
