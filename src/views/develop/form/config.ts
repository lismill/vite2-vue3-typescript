export default {
  // 配置表单基础信息
  form: {
    // 配置表单是否禁用
    disabled: false,
    // 配置表单一行显示几列
    span: 24,
    // 配置表单操作按钮
    operates: {
      left: [{name: "预览数据", others: {type: "primary"}}],
      center: {
        // default center value
        resetButtonShow: true,
        resetButtonText: "重置",
        confirmButtonShow: true,
        confirmButtonText: "提交",
      },
      right: [
        {name: "检测数据", others: {type: "primary", class: "warning"}},
        {name: "暂存数据", others: {type: "primary", class: "success"}},
        {name: "删除数据", others: {type: "primary", danger: true}},
      ],
    },
    // 配置表单默认数据
    data: {},
  },
  // 配置表单结构和表单项
  sections: [
    {
      // 配置区块
      title: "区块一",
      // 配置区块项
      items: [
        {
          // 配置文本
          type: "text",
          label: "文本",
          name: "text",
          // 配置扩展 antdv 官方参数
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
        {
          type: "upload",
          label: "文件上传",
          name: "upload",
          rules: [{required: true, message: "请上传文件"}],
          others: {
            maxCount: 2,
          },
        },
        {
          type: "slot",
          label: "可编辑表格",
          name: "tableEdit",
        },
        {
          type: "slot",
          label: "可选择表格",
          name: "tableChoose",
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
        {type: "daterange", label: "活动时间", name: "daterange", others: {}},
        {type: "daterange", label: "活动时间范围", name: "rangeTime", others: {showTime: true}},
        {type: "editor", label: "富文本编辑器", name: "editor", others: {}},
      ],
    },
  ],
};
