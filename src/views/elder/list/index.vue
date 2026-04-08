<script setup lang="ts">
import { NCard, NSpace, NButton, NDataTable, NInput } from 'naive-ui';
import { ref } from 'vue';

defineOptions({ name: 'ElderList' });

const searchValue = ref('');
const columns = [
  { title: '姓名', key: 'name' },
  { title: '性别', key: 'gender' },
  { title: '年龄', key: 'age' },
  { title: '身份证号', key: 'idCard' },
  { title: '联系电话', key: 'phone' },
  { title: '照护等级', key: 'careLevel' },
  { title: '状态', key: 'status' },
  { title: '操作', key: 'actions' }
];
const data = ref([]);
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="老人管理">
      <template #header-extra>
        <NSpace>
          <NInput v-model:value="searchValue" placeholder="搜索老人信息" clearable />
          <NButton type="primary">新增老人</NButton>
        </NSpace>
      </template>
      <NDataTable :columns="columns" :data="data" :bordered="false" />
    </NCard>
  </NSpace>
</template>
