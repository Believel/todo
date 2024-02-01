<script setup>
import { ElButton, ElRow, ElCol, ElButtonGroup, ElText, ElMessage } from 'element-plus'
import { useShoppingStore } from '../stores/shopping'

const shopping = useShoppingStore()

function decrease(id) {
  shopping.decreaseShopping(id)
}

function add(item) {
  shopping.addShopping(item)
}
</script>

<template>
  <div class="food-list">
    <!-- v-if v-for 如何结合使用 -->
    <el-row v-for="item in shopping.carList" :key="item.id" justify="start">
      <template v-if="item.count">
        <el-col :span="18">
          <div class="name">
            {{ item.name }}
            (数量{{ item.count }})
          </div>
        </el-col>
        <el-col :span="6">
          <el-button-group>
            <el-button type="primary" @click="add(item)">+</el-button>
            <el-button type="primary" @click="decrease(item.id)">-</el-button>
          </el-button-group>
        </el-col>
      </template>
    </el-row>
    <el-text type="danger" size="large">总价：40元 </el-text>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>