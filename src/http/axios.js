
// // 引入 封装的api 
import api from './api.js';
// 下面是详细的写法
export const request = (method,url,params) => api({
    url: `/api${url}`, // 请求地址
    method: method, // 请求方式
    // data: params, // (一般post请求，我们习惯使用 data属性来传参)
    params: params //(一般get请求，我们习惯使用params属性来传参）
    // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
})

export const httpRequest = (method,url,params) => api({
    url: `${url}`, // 请求地址
    method: method, // 请求方式
    // data: params, // (一般post请求，我们习惯使用 data属性来传参)
    params: params //(一般get请求，我们习惯使用params属性来传参）
    // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
})
