/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-02-25 17:01:00
 * @LastEditTime: 2022-02-25 17:09:13
 * @FilePath: \create-react-app-typescript\src\api\home\index.ts
 */
import {AxiosPromise} from "axios";
import request from "@/packages/axios";

import {IHomeListP, IHomeListR} from "./types";

// 获取首页配置
export const getHomeList = (params: IHomeListP): AxiosPromise<IHomeListR> => {
  return request.get("/home/list", {params});
};

// 设置首页配置
export const setHomeList = (params: IHomeListP): AxiosPromise<IHomeListR> => {
  return request.post("/home/config", params);
};
