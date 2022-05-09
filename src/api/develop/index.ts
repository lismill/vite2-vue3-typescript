import {AxiosPromise} from "axios";
import request from "@/packages/axios";

export const openTargetWindow = (params: any): AxiosPromise => {
  return request.get("/home/list", {params});
};
export const getTableList = (params: any): AxiosPromise => {
  return request.get("https://lismill.usemock.com/table/list", {params});
};
