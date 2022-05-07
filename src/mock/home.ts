import {Random} from "mockjs";

export default [
  {
    url: "/home/list",
    method: "get",
    timeout: 1500,
    response: () => {
      const rows: any = [];
      for (let i = 0; i < 10; i++) {
        rows.push({
          id: Random.integer(1, 99999),
          name: `${Random.name()} - 还提供了一个全局配置方法，在调用前提前配置，全局一次生效。还提供了一个全局配置方法，在调用前提前配置，全局一次生效。还提供了一个全局配置方法，在调用前提前配置，全局一次生效。还提供了一个全局配置方法，在调用前提前配置，全局一次生效。还提供了一个全局配置方法，在调用前提前配置，全局一次生效。`,
          date: Random.date(),
          city: `${Random.province()}-${Random.city()}-${Random.county()}`,
          guid: Random.guid(),
        });
      }
      return {
        code: 200,
        msg: "ok",
        data: {
          rows,
          total: Random.integer(111, 1999),
        },
      };
    },
  },
];
