import {DirectiveBinding} from "vue";

export default {
  name: "money",
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (!binding.value) return;

    // 获取参数
    const {lang, money, decimals, style, currency, currencyDisplay} = binding.value;
    if (!money) return;

    // 数字格式化
    const format = new Intl.NumberFormat(lang ?? "zh-CN", {
      style: style ?? "currency", // decimal | currency | percent | unit
      currency: currency ?? "CNY", // 货币符号
      currencyDisplay: currencyDisplay ?? "symbol", // 本地化 | 国际化
      minimumFractionDigits: decimals ?? 2, // 小数位数的最小数目
      maximumFractionDigits: decimals ?? 2, // 小数位数的最大数目
    }).format(Number(money));

    // 设置数据
    // eslint-disable-next-line no-param-reassign
    el.innerText = format ?? "";
  },
};
