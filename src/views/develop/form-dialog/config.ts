export default {
  form: {
    dialog: {
      visible: false,
      title: "创建弹出表单",
    },
    data: {},
  },
  sections: [
    {
      title: "区块一",
      items: [
        {
          type: "switch",
          label: "开关",
          name: "switch",
          others: {},
        },
        {
          type: "input",
          label: "姓名",
          name: "name",
          rules: [{required: true, message: "请输入姓名"}],
          info: "这是一段自定义文案",
          tooltip: "当某个页面<br />需要向用户显示警告的信息时<br />当某个页面需要向用户显示警告的信息时",
          others: {},
        },
        {
          type: "number",
          label: "数字",
          name: "number",
          rules: [{required: true, message: "请输入数字"}],
          info: "这是一段自定义文案",
          tooltip: "当某个页面<br />需要向用户显示警告的信息时<br />当某个页面需要向用户显示警告的信息时",
          others: {},
        },
        {
          type: "input",
          label: "姓名",
          name: "name1",
          rules: [{required: true, message: "请输入姓名"}],
          info: "这是一段自定义文案",
          tooltip: "当某个页面<br />需要向用户显示警告的信息时<br />当某个页面需要向用户显示警告的信息时",
          others: {},
        },
      ],
    },
  ],
};
