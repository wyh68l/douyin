import {fetch,requestMock} from './serves'

//彩虹屁的接口--（弃用）
export function getRainbow() {
  return request({
    url:'chp.shadiao.app/api.php'
  })

}

//随机视频接口
export function getRandomVideo(code) {
  return fetch({
    //url:'/gaotian/video.php?_t='+code,
    url:'http://gaogaogaogaogaogao.zs520ds.cn/gaotian/video.php?_t='+code,
    method:'get'
  })

}

//获取app下载链接
export function getApkUrl() {
  return fetch({
    // url:'/api/download/url',
    url:'http://47.97.104.206:3000/download/url',
    method:'get'
  })
}

//获取版本更新
export function getVersion(data) {
  return fetch({
    url:'http://47.97.104.206:3000/app/version',
    // url:'/api/app/version',
    method:'get',
    params:data
  })
}


/*--------------首页mock模拟的接口2.0----------------*/



//截获首页商品详情数据
export function mainGoodsInfo(id) {
  Mock.mock(RegExp(`/mock/GoodsInfo` + ".*"), 'get', goodsInfoMock(id))
  return requestMock( {
    url:'/GoodsInfo',
  })
}
