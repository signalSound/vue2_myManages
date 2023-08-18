
// // 引入 封装的api 
import api from './api.js';
// 下面是详细的写法
export const request = (req) => api({
    url: `/api${req.url}`, // 请求地址
    method: req.method || 'GET', // 请求方式
    data: req.data || {},
    // data: params, // (一般post请求，我们习惯使用 data属性来传参)
    params: req.params || {}, //(一般get请求，我们习惯使用params属性来传参）
    responseType: req.responseType || 'json'
    // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
})

export const httpRequest = (req) => api({
    url: `${req.url}`, // 请求地址
    method: req.method ||  'GET', // 请求方式
    data: req.data || {},
    // data: params, // (一般post请求，我们习惯使用 data属性来传参)
    params: params || {}, //(一般get请求，我们习惯使用params属性来传参）
    responseType: req.responseType || 'json'

    // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
})
