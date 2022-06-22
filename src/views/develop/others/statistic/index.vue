<template>
  <div class="bg-ffffff p-24">
    <l-statistic :data="data" span="6"></l-statistic>
  </div>
</template>

<script setup lang="ts">
const data: any = [
  {title: "用户数据", value: 112863, status: 1, tips: "这是用户数据的提示"},
  {title: "支付金额", value: "656656", status: 0, tips: "这是支付金额的提示"},
  {title: "支付订单", value: "68963.78", status: 1, tips: "这是支付订单的提示"},
  {title: "支付人数", value: 3126978.78, status: 0, tips: "这是支付人数的提示"},
];
</script>

<style lang="scss" scoped></style>
