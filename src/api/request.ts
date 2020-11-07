import Taro from "@tarojs/taro";
import {log} from '@/utils'
type HTTPMedthods =
  | "POST"
  | "GET"
  | "OPTIONS"
  | "PUT"
  | "DELETE"
  | "HEAD"
  | "TRACE"
  | "CONNECT";

export interface TaroHTTPConfig {
  header?: {
    [key: string]: string;
  };
  dataType?: "json";
  responseType?: "text" | "arraybuffer";
}

export default function<T>(
  url: string,
  method: HTTPMedthods,
  data: any,
  config: TaroHTTPConfig = {
    header: { 
      "content-type": "application/json;charset=UTF-8",
    },
  }
) {
  return new Promise<T>((resolve, reject) => {
    Taro.request({
      url,
      method,
      data,
      ...config,
      success(res) {
        if (res.statusCode == 200) {
          if (res.data.code == 4) {
            Taro.showToast({
              title: res.data.errors,
              icon: "none",
            });
            reject(res.data);
          } else {
            resolve(res.data);
          }
        } else {
          reject(res.data);
        }
        log('method: ', method, 'url: ', url, 'request: ', data, 'response: ', res.data)
      },
      fail(err) {
        reject(err);
        Taro.showToast({
          title: `网络连接失败，请重新加载`,
          icon: "none",
        });
        log('method: ', method, 'url: ', url, 'request: ', data, 'response: ', err)
      },
    });
  });
}
