<script setup lang="ts">
import { NCard, NSpace, NGrid, NGi, NStatistic } from 'naive-ui';
import { ref } from 'vue';

defineOptions({ name: 'StatisticsFinance' });

const financeStats = ref({
  totalRevenue: 0,
  subsidyAmount: 0,
  selfPayAmount: 0,
  pendingSettlement: 0
});
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="财务统计">
      <NGrid cols="s:2 m:4" :x-gap="16" :y-gap="16">
        <NGi>
          <NStatistic label="总收入" :value="financeStats.totalRevenue" />
        </NGi>
        <NGi>
          <NStatistic label="政府补贴" :value="financeStats.subsidyAmount" />
        </NGi>
        <NGi>
          <NStatistic label="自付金额" :value="financeStats.selfPayAmount" />
        </NGi>
        <NGi>
          <NStatistic label="待结算" :value="financeStats.pendingSettlement" />
        </NGi>
      </NGrid>
    </NCard>
  </NSpace>
</template>
