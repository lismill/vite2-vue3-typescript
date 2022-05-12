<template>
  <div class="dashboard">
    <template v-if="loading">
      <a-skeleton-button active block size="large" />
      <a-row type="flex" :gutter="16">
        <a-col flex="auto">
          <a-skeleton-button active block size="large" class="m-t16" />
          <a-skeleton-button active block size="large" class="m-t16" />
          <a-skeleton-button active block size="large" class="m-t16" />
        </a-col>
        <a-col flex="0 1 460px">
          <a-skeleton-button active block size="large" class="m-t16" />
          <a-skeleton-button active block size="large" class="m-t16" />
          <a-skeleton-button active block size="large" class="m-t16" />
        </a-col>
      </a-row>
    </template>
    <template v-else>
      <a-carousel>
        <div><h3></h3></div>
        <div><h3></h3></div>
        <div><h3></h3></div>
        <div><h3></h3></div>
      </a-carousel>
      <a-row type="flex" :gutter="16">
        <a-col flex="auto">
          <div class="m-t16 p-16 bg-ffffff">
            <a-row type="flex">
              <a-col class="p-l56 p-tb8" :span="6">
                <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
              </a-col>
              <a-col class="p-l56 p-tb8" :span="6">
                <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
              </a-col>
              <a-col class="p-l56 p-tb8" :span="6">
                <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
              </a-col>
              <a-col class="p-l56 p-tb8" :span="6">
                <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
              </a-col>
            </a-row>
          </div>
          <div class="m-t16 p-16 bg-ffffff">1</div>
          <div class="m-t16 p-16 bg-ffffff">1</div>
        </a-col>
        <a-col flex="0 1 460px">
          <div class="m-t16 p-t16 p-l16 p-r16 p-t32 p-b0 bg-ffffff">
            <a-timeline pending="Recording...">
              <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
              <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
              <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
            </a-timeline>
          </div>
          <div class="m-t16 p-16 bg-ffffff">
            <a-progress class="m-b8" :percent="30" />
            <a-progress class="m-b8" :percent="50" status="active" />
            <a-progress class="m-b8" :percent="70" status="exception" />
            <a-progress class="m-b8" :percent="100" />
            <a-progress :percent="50" :show-info="false" />
          </div>
          <div class="m-t16 p-b16 p-lr16 bg-ffffff">
            <a-skeleton :active="true" />
          </div>
        </a-col>
      </a-row>
    </template>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const loading = ref(true);
setTimeout(() => (loading.value = false), 600);
</script>

<style scoped>
.dashboard :deep .ant-skeleton-element .ant-skeleton-button {
  height: 56px;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #cccccc;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
