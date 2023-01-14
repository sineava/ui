<template>
  <el-card shadow="never">
    <el-table className="w-full" :data="tableData" size="large">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="address" label="住址" />
      <el-table-column label="性别">
        <template #default="{row}">
          <el-tag :type="row.sex === 0 ? 'success' : ''">{{ ['女', '男'][row.sex] }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { tableData } from '../../../utils/mock'
import 'element-plus/dist/index.css'
import './reset.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
</script>