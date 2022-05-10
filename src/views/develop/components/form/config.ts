export default {
  form: {
    // disabled: true,
    // span: 24,
    operates: {
      header: [{name: "暂存数据", others: {}}],
      footer: [{name: "检测数据", others: {}}],
    },
    data: {},
  },
  sections: [
    {
      title: "区块一",
      items: [
        {
          type: "text",
          label: "文本",
          name: "text",
          others: {},
        },
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
          type: "select",
          label: "城市",
          name: "city",
          rules: [{required: true, message: "请选择城市"}],
          options: [
            {label: "A", value: "a"},
            {label: "B", value: "b"},
            {label: "C", value: "c"},
          ],
          others: {a: 111},
        },
        {
          type: "cascader",
          label: "级联菜单",
          name: "cascader",
          options: [
            {
              value: "浙江省",
              label: "浙江省",
              children: [
                {
                  value: "杭州市",
                  label: "杭州市",
                  children: [
                    {
                      value: "西湖区",
                      label: "西湖区",
                    },
                  ],
                },
              ],
            },
            {
              value: "江苏省",
              label: "江苏省",
              children: [
                {
                  value: "南京市",
                  label: "南京市",
                  children: [
                    {
                      value: "鼓楼区",
                      label: "鼓楼区",
                    },
                  ],
                },
              ],
            },
          ],
          others: {},
        },
        {
          type: "textarea",
          label: "多行文本",
          name: "textarea",
          rules: [{required: true, message: "请输入多行文本"}],
          others: {},
        },
      ],
    },
    {
      title: "区块二",
      items: [
        {
          type: "radio",
          label: "性别",
          name: "radio",
          options: [
            {label: "男", value: "1"},
            {label: "女", value: "2"},
            {label: "未知", value: "0"},
          ],
          rules: [{required: true, message: "请选择性别"}],
        },
        {
          type: "checkbox",
          label: "城市",
          name: "checkbox",
          options: [
            {label: "北京", value: "beijing"},
            {label: "上海", value: "shanghai"},
            {label: "广州", value: "guangzhou"},
            {label: "深圳", value: "shenzhen"},
          ],
        },
        {type: "time", label: "时间", name: "time", others: {}},
        {
          type: "date",
          label: "日期",
          name: "date",
          others: {picker: "year"},
        },
        {type: "range", label: "活动时间", name: "range", others: {}},
        {type: "range", label: "活动时间范围", name: "rangeTime", others: {showTime: true}},
        {
          type: "slot",
          label: "自定义插槽",
          name: "slot",
        },
      ],
    },
  ],
};
