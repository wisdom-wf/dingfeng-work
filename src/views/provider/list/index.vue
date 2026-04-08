<script setup lang="ts">
import { NCard, NSpace, NButton, NDataTable, NInput } from 'naive-ui';
import { ref } from 'vue';

defineOptions({ name: 'ProviderList' });

const searchValue = ref('');
const columns = [
  { title: '服务商名称', key: 'name' },
  { title: '统一社会信用代码', key: 'code' },
  { title: '法人代表', key: 'legalPerson' },
  { title: '联系电话', key: 'phone' },
  { title: '服务类型', key: 'serviceTypes' },
  { title: '信用等级', key: 'creditLevel' },
  { title: '状态', key: 'status' },
  { title: '操作', key: 'actions' }
];
const data = ref([]);
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="服务商管理">
      <template #header-extra>
        <NSpace>
          <NInput v-model:value="searchValue" placeholder="搜索服务商" clearable />
          <NButton type="primary">新增服务商</NButton>
        </NSpace>
      </template>
      <NDataTable :columns="columns" :data="data" :bordered="false" />
    </NCard>
  </NSpace>
</template>
