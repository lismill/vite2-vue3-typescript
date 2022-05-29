import {getTableList} from "@/api/develop";

export default {
  request: getTableList,
  visible: false,
  // 搜索栏
  search: {
    span: 8,
    data: {},
    forms: [
      {
        type: "input",
        label: "姓名姓名",
        name: "name",
        others: {},
      },
      {type: "date", label: "日期", name: "date", others: {}},
      {type: "date", label: "日期", name: "date", others: {}},
    ],
  },
  // 表格
  table: {
    data: [],
    selectedType: "radio",
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
      },
      {
        title: "姓名",
        dataIndex: "name",
        ellipsis: true,
      },
      {
        title: "年龄",
        dataIndex: "age",
      },
      {
        title: "日期",
        dataIndex: "date",
      },
      {
        title: "城市",
        dataIndex: "custom",
      },
    ],
  },
  // 模态框
  modal: {
    width: "1200px",
  },
  // 底部栏
  footer: {
    pagination: {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 50, 100],
    },
  },
};
