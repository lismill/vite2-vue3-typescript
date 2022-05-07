import {AxiosRequestConfig} from "axios";
import qs from "qs";
import {removePending} from "./index";

const config = {
  /**
   * 拦截请求处理相应的业务逻辑
   * @param request
   * @returns request
   */
  request(request: AxiosRequestConfig) {
    console.log("请求拦截器处理业务逻辑", request);

    /**
     * 处理 POST 请求参数
     */
    if (request.method?.toUpperCase() === "POST") {
      request.headers = {
        ...request.headers,
        "Content-Type": "application/json;charset=utf-8",
      };
    }

    /**
     * 处理特殊参数
     */
    if (request.params?.extends) {
      // 打开新窗口访问 get 请求
      if (request.method?.toUpperCase() === "GET" && request.params.extends?.target === "_blank") {
        delete request.params.extends;
        window.open(`${request.url}?${qs.stringify(request.params)}`);
        removePending(request);
      }
      delete request.params.extends;
    }

    return request;
  },

  /**
   * 拦截响应处理相应的业务逻辑
   * @param response
   * @returns response
   */
  response(response: AxiosRequestConfig) {
    console.log("返回拦截器处理业务逻辑", response);
    return response.data;
  },
};

export default config;
