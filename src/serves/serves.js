import axios from 'axios'
import Vue from 'vue'
//import Qs from 'qs'

// axios({
//如果使用post请求 要加上请求头和使用qs序列化
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     method: 'post',
//     url: '/api/lockServer/search',
//     data: Qs.stringify(data)//post请求使用data，get使用params
// })


// 时间戳
//const NewTimeStamp = new Date().getTime()

// axios全局设置
Vue.prototype.axios = axios;
const Axios = axios.create({
  // timeout: 4000,
  responseType: 'json'
})
Axios.defaults.timeout = 6500;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

//划重点！ 由于微信小程序需要用微信官方请求接口，因此需要用adapter自定义
//`adapter` 允许自定义处理请求，以使测试更轻松,返回一个 promise 并应用一个有效的响应
// Axios.defaults.adapter = function (config) {
// // let baseURL = process.env.BASE_API
// // 发交易之前显示加载中
//   wx.showLoading({
//     title: '拼命加载中...'
//   })
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: config.url,
//       method: config.method,
//       data: config.params,
//       success: (res) => {
//         return resolve(res)
//       },
//       fail: (err) => {
//         return reject(err)
//       },
//       complete: res => {
//         //wx.hideLoading()
//         // TODO:
//       }
//     })
//   })
// }

// axios请求拦截
Axios.interceptors.request.use(
  config => {
      //console.log(config);
    // 若是有做鉴权token , 就给头部带上token
    // let token = window.sessionStorage.getItem(__TOKEN_KEY__)
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  error => {
      //console.log(error);
    return Promise.reject(error.data)
  }
)

// axios 响应拦截，对响应的状态处理
Axios.interceptors.response.use(
//   function (response) {
//     console.log(response.data.data) // 响应成功
//     return response
//   },
//   function (error) {
//     // console.log(error); //响应失败
//     return Promise.reject(error)
//   })
  res => {
    // 200,204为处理成功
    //注意这里statusCode有可能微信的ts声明文件里未定义，需要去声明文件里定义一下
    // if ([200, 204].indexOf(res.status) === -1) {
    //   console.log('res.status', res)
    //   return Promise.reject(res.data)
    // }
    return res
  },
  error => {
    return Promise.reject(error)
  })

//封装fetch并暴露
export function fetch (options) {
  return new Promise((resolve, reject) => {
    Axios(options)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}

