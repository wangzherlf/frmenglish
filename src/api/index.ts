import request from './request'

const server = (function() {
  const serverURL = 'http://blog.ssmy.cn'
  return {
    GET: function(url, data?, config?) {
      return request(serverURL + url, 'GET', data, config)
    }
  }
})()

export const getWordList = () => {
  return server.GET('/index.json')
}