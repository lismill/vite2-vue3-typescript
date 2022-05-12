export default {
  // disabled: true,
  headerButton: true,
  footerButton: true,
  headerTips: "这是头部提示信息，支持 <span class='color-danger'>HTML</span> 语法",
  footerTips: "这是底部提示信息，支持 <span class='color-danger'>HTML</span> 语法",
  data: [{}, {}],
  border: true,
  columns: [
    {
      title: "#",
      width: 55,
      align: "center",
    },
    {
      type: "input",
      title: "姓名",
      dataIndex: "name",
      ellipsis: true,
    },
    {
      type: "input",
      title: "年龄",
      dataIndex: "age",
      others: {},
      rules: [{required: true, message: "请输入年龄"}],
    },
    {
      type: "date",
      title: "日期",
      dataIndex: "date",
      others: {},
    },
    {
      type: "daterange",
      title: "时间范围",
      dataIndex: "daterange",
      others: {},
    },
    {
      title: "性别",
      dataIndex: "sex",
      type: "select",
      options: [
        {label: "男", value: "1"},
        {label: "女", value: "2"},
        {label: "未知", value: "0"},
      ],
      rules: [{required: true, message: "请选择性别"}],
      others: {},
    },
    {
      type: "operate",
      title: "操作",
      width: 100,
      align: "center",
      fixed: "right",
    },
  ],
  others: {
    scroll: {x: "100%"},
  },
};
