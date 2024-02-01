<script setup>
import { ref } from 'vue'
import { ElButton, ElRow, ElCol, ElButtonGroup, ElText } from 'element-plus'

const data = ref([
  { name: '商品1', price: 10, id: 1, count: 1 },
  { name: '商品2', price: 20, id: 2, count: 2 }
])
</script>

<template>
  <div class="food-list">
    <el-row v-for="item in data" :key="item.id" justify="start" >
      <el-col :span="18">
        <div class="name">{{ item.name }}(数量{{ item.count }})</div>
      </el-col>
      <el-col span="6">
        <el-button-group>
          <el-button type="primary">+</el-button>
          <el-button type="primary">-</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-text type="danger" size="large">总价：40元 </el-text>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>