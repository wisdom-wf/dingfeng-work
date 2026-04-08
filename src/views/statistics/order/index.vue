<script setup lang="ts">
import { NCard, NSpace, NGrid, NGi, NStatistic } from 'naive-ui';
import { ref } from 'vue';

defineOptions({ name: 'StatisticsOrder' });

const orderStats = ref({
  total: 0,
  completed: 0,
  pending: 0,
  today: 0
});
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="订单统计">
      <NGrid cols="s:2 m:4" :x-gap="16" :y-gap="16">
        <NGi>
          <NStatistic label="总订单数" :value="orderStats.total" />
        </NGi>
        <NGi>
          <NStatistic label="已完成订单" :value="orderStats.completed" />
        </NGi>
        <NGi>
          <NStatistic label="待处理订单" :value="orderStats.pending" />
        </NGi>
        <NGi>
          <NStatistic label="今日订单" :value="orderStats.today" />
        </NGi>
      </NGrid>
    </NCard>
  </NSpace>
</template>
