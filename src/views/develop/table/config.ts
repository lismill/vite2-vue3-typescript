import {getTableList} from "@/api/develop";

export default {
  request: getTableList,
  // 搜索栏
  search: {
    col: {
      span: 8,
      xs: 24,
      sm: 12,
      lg: 8,
      xl: 6,
    },
    data: {
      status: "1",
    },
    forms: [
      {
        type: "input",
        label: "姓名姓名",
        name: "name",
        others: {},
      },
      {type: "date", label: "日期", name: "date", others: {}},
      {type: "slot", label: "自定义日期", name: "slot-date", others: {}},
      {type: "date", label: "日期", name: "date", others: {}},
      {type: "daterange", label: "日期范围", name: "daterange", others: {}},
      {type: "date", label: "日期", name: "date", others: {}},
      {
        type: "select",
        label: "城市",
        name: "city",
        options: [
          {label: "A", value: "a"},
          {label: "B", value: "b"},
          {label: "C", value: "c"},
        ],
        others: {a: 111},
      },
    ],
  },
  // 工具栏
  toolbar: {
    statusProp: "status",
    status: [
      {name: "未开始", value: "1"},
      {name: "进行中", value: "2"},
      {name: "已完成", value: "3", total: 999},
    ],
    operates: [
      {name: "新增数据", others: {type: "primary"}},
      {name: "导出数据", others: {type: "primary", class: "success"}},
      {name: "查看配置", others: {}},
    ],
  },
  // 表格
  table: {
    data: [],
    selectedRows: [],
    columns: [
      {
        title: "#",
        width: 55,
        align: "center",
        fixed: "left",
      },
      {
        type: "slot",
        title: "图片",
        dataIndex: "image",
        width: 190,
      },
      {
        title: "姓名",
        width: 460,
        dataIndex: "name",
        ellipsis: true,
        sorter: (a: any, b: any) => a.name > b.name,
      },
      {
        title: "年龄",
        width: 300,
        dataIndex: "age",
        sorter: (a: any, b: any) => a.age - b.age,
      },
      {
        title: "日期",
        dataIndex: "date",
        width: 160,
      },
      {
        title: "城市",
        dataIndex: "custom",
        width: 300,
      },
      {
        type: "slot",
        title: "操作",
        dataIndex: "operate",
        width: 200,
        align: "center",
        fixed: "right",
      },
    ],
    others: {
      scroll: {x: "100%"},
    },
  },
  // 底部栏
  footer: {
    fixed: true,
    checked: false,
    operates: [
      {name: "批量开始", others: {type: "primary"}},
      {name: "批量关闭", others: {type: "primary", danger: true}},
    ],
    pagination: {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 50, 100],
    },
  },
};
