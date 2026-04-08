<script setup lang="ts">
import { NCard, NSpace, NButton, NDataTable } from 'naive-ui';

defineOptions({ name: 'OrderList' });

const columns = [
  { title: '订单编号', key: 'orderNo', width: 150 },
  { title: '老人姓名', key: 'elderName', width: 100 },
  { title: '联系电话', key: 'elderPhone', width: 120 },
  { title: '服务类型', key: 'serviceType', width: 100 },
  { title: '服务时间', key: 'serviceTime', width: 180 },
  { title: '服务人员', key: 'staffName', width: 100 },
  { title: '订单金额', key: 'serviceFee', width: 100 },
  { title: '状态', key: 'status', width: 80 },
  { title: '操作', key: 'actions', width: 150 }
];
const data: any[] = [];
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="订单管理">
      <template #header-extra>
        <NButton type="primary">创建订单</NButton>
      </template>
      <NDataTable :columns="columns" :data="data" :bordered="false" />
    </NCard>
  </NSpace>
</template>
