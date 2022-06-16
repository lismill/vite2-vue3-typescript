import {getTableList} from "@/api/develop";

/**
 * 配置基础表格组件
 */
const config = {
  // 配置表格数据请求
  request: getTableList,
  // 配置表格搜索条件
  search: {
    // 配置一行显示几列搜索项
    span: {
      xs: 24,
      sm: 12,
      lg: 8,
      xl: 6,
    },
    // 配置默认的搜索值
    data: {
      status: "1",
    },
    // 配置搜索表单
    forms: [
      {
        type: "input",
        label: "姓名姓名",
        name: "name",
        others: {},
      },
      {type: "date", label: "日期", name: "date", others: {}},
      {type: "date", label: "日期", name: "date", others: {}},
      {type: "date", label: "日期", name: "date", others: {}},
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
  // 配置表格工具栏 - 状态筛选 & 操作按钮
  toolbar: {
    // 配置状态栏搜索选项
    statusProp: "status",
    // 配置左侧状态栏信息
    status: [
      {name: "未开始", value: "1"},
      {name: "进行中", value: "2"},
      {name: "已完成", value: "3", total: 999},
    ],
    // 配置右侧操作栏信息
    operates: [
      {name: "新增数据", others: {type: "primary"}},
      {name: "导出数据", others: {type: "primary", class: "success"}},
      {name: "查看配置", others: {}},
    ],
  },
  // 配置表格基本信息
  table: {
    // 配置表格默认数据
    data: [],
    // 配置表格默认选中数据
    selectedRows: [],
    // 配置表格基本信息
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
    // 配置表格扩展项 - antdv 官方参数
    others: {
      scroll: {x: "100%"},
    },
  },
  // 配置表格底部信息 - 选中操作 & 分页信息
  footer: {
    // 配置底部是否固定
    fixed: true,
    // 配置是否选中
    checked: false,
    // 配置选中后的操作
    operates: [
      {name: "批量开始", others: {type: "primary"}},
      {name: "批量关闭", others: {type: "primary", danger: true}},
    ],
    // 配置分页信息
    pagination: {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 50, 100],
    },
  },
};

export default config;
