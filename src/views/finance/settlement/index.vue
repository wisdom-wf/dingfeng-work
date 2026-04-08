<script setup lang="ts">
import { NCard, NSpace, NDataTable } from 'naive-ui';

defineOptions({ name: 'FinanceSettlement' });

const columns = [
  { title: '结算单号', key: 'settlementNo' },
  { title: '服务商', key: 'providerName' },
  { title: '老人姓名', key: 'elderName' },
  { title: '服务类型', key: 'serviceType' },
  { title: '服务费', key: 'serviceFee' },
  { title: '政府补贴', key: 'subsidyFee' },
  { title: '自付金额', key: 'selfPayFee' },
  { title: '结算金额', key: 'settlementAmount' },
  { title: '状态', key: 'status' },
  { title: '操作', key: 'actions' }
];
const data: any[] = [];
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="财务结算管理">
      <NDataTable :columns="columns" :data="data" :bordered="false" />
    </NCard>
  </NSpace>
</template>
