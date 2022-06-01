<template>
  <div class="bg-ffffff p-16">
    <!-- 纯数字格式 -->
    <div class="m-b16">
      <a-alert type="info">
        <template #message>纯数字格式</template>
        <template #description>
          {{`<span v-number-format="{money: 653791.2981, style: 'decimal'}" class="color-danger"></span>`}}
          <div class="m-t16">
            - 653791.2981 => <span v-number-format="{money: 653791.2981, style: 'decimal'}" class="color-danger"></span>
          </div>
        </template>
      </a-alert>
    </div>
    <!-- 百分比格式 -->
    <div class="m-b16">
      <a-alert type="info">
        <template #message>百分比格式</template>
        <template #description>
          {{`<span v-number-format="{money: 653791.2981, style: 'percent'}" class="color-danger"></span>`}}
          <div class="m-t16">
            - 653791.2981 => <span v-number-format="{money: 653791.2981, style: 'percent'}" class="color-danger"></span>
          </div>
        </template>
      </a-alert>
    </div>
    <!-- 货币格式 -->
    <div class="m-b16">
      <a-alert type="info">
        <template #message>货币格式</template>
        <template #description>
          {{`<span v-number-format="{money: 653791.2981, style: 'currency'}" class="color-danger"></span>`}}
          <div class="m-t16">
            - 653791.2981 =>
            <span v-number-format="{money: 653791.2981, style: 'currency'}" class="color-danger"></span>
          </div>
        </template>
      </a-alert>
    </div>
    <!-- 保留3位小数 -->
    <div class="m-b16">
      <a-alert type="info">
        <template #message>保留3位小数</template>
        <template #description>
          {{`<span v-number-format="{money: 653791.2981, style: 'currency', decimals: 3}" class="color-danger"></span
          >`}}
          <div class="m-t16">
            - 653791.2981 =>
            <span v-number-format="{money: 653791.2981, style: 'currency', decimals: 3}" class="color-danger"></span>
          </div>
        </template>
      </a-alert>
    </div>
    <!-- 货币格式 - 人民币符号 -->
    <div class="m-b16">
      <a-alert type="info">
        <template #message>货币格式 - 人民币符号</template>
        <template #description>
          {{`<span
            v-number-format="{money: 653791.2981, style: 'currency', currency: 'CNY'}"
            class="color-danger"
          ></span
          >`}}
          <div class="m-t16">
            - 653791.2981 =>
            <span
              v-number-format="{money: 653791.2981, style: 'currency', currency: 'CNY'}"
              class="color-danger"
            ></span>
          </div>
        </template>
      </a-alert>
    </div>
    <!-- 货币格式 - 美元符号 -->
    <div class="m-b16">
      <a-alert type="info">
        <template #message>货币格式 - 美元符号</template>
        <template #description>
          {{`<span
            v-number-format="{money: 653791.2981, style: 'currency', currency: 'USD'}"
            class="color-danger"
          ></span
          >`}}
          <div class="m-t16">
            - 653791.2981 =>
            <span
              v-number-format="{money: 653791.2981, style: 'currency', currency: 'USD'}"
              class="color-danger"
            ></span>
          </div>
        </template>
      </a-alert>
    </div>
    <!-- 货币格式 - 欧元符号 -->
    <a-alert type="info">
      <template #message>货币格式 - 欧元符号</template>
      <template #description>
        {{`<span v-number-format="{money: 653791.2981, style: 'currency', currency: 'EUR'}" class="color-danger"></span
        >`}}
        <div class="m-t16">
          - 653791.2981 =>
          <span v-number-format="{money: 653791.2981, style: 'currency', currency: 'EUR'}" class="color-danger"></span>
        </div>
      </template>
    </a-alert>
  </div>
</template>
