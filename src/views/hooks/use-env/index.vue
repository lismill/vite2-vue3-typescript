<template>
  <div class="bg-ffffff p-16">
    <a-list bordered :data-source="[1, 2, 3]">
      <a-list-item>
        <span v-pre>{{ useEnv() }}</span> - {{ useEnv() }}
      </a-list-item>
      <a-list-item>
        <span v-pre>{{ useEnv("development") }}</span> - {{ useEnv("development") }}
      </a-list-item>
      <a-list-item>
        <span v-pre>{{ useEnv("production") }}</span> - {{ useEnv("production") }}
      </a-list-item>
      <a-list-item>
        <span v-pre>{{ useEnv("test") }}</span> - {{ useEnv("test") }}
      </a-list-item>
      <a-list-item>
        <span v-pre>{{ useEnv("dev") }}</span> - {{ useEnv("dev") }}
      </a-list-item>
      <a-list-item>
        <span v-pre>{{ useEnv("prod") }}</span> - {{ useEnv("prod") }}
      </a-list-item>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import {useEnv} from "@/hooks/useEnv";
</script>
