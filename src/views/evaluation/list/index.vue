<script setup lang="ts">
import { NCard, NSpace, NDataTable } from 'naive-ui';
import { ref } from 'vue';

defineOptions({ name: 'EvaluationList' });

const columns = [
  { title: '订单编号', key: 'orderNo' },
  { title: '老人姓名', key: 'elderName' },
  { title: '服务商', key: 'providerName' },
  { title: '服务人员', key: 'staffName' },
  { title: '服务评分', key: 'serviceScore' },
  { title: '态度评分', key: 'attitudeScore' },
  { title: '技能评分', key: 'skillScore' },
  { title: '准时评分', key: 'punctualityScore' },
  { title: '综合评分', key: 'overallScore' },
  { title: '操作', key: 'actions' }
];
const data = ref([]);
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="服务评价管理">
      <NDataTable :columns="columns" :data="data" :bordered="false" />
    </NCard>
  </NSpace>
</template>
