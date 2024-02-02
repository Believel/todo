<script setup>
import { ElButton, ElRow, ElCol, ElButtonGroup, ElText, ElMessage } from 'element-plus'
import { useShoppingStore } from '../stores/shopping'

const shopping = useShoppingStore()

function decrease(id) {
  shopping.decreaseShopping(id)
}

function add(id) {
  shopping.addShopping(id)
}
</script>

<template>
  <div class="food-list">
    <!-- v-if 比 v-for 优先级高， 意味着 v-if 的条件将无法访问到 v-for作用域内定义的变量别名 -->
    <template v-for="item in shopping.carFoodList">
      <el-row :key="item.id" justify="start" v-if="item.quantity">
          <el-col :span="18">
            <div class="name">
              {{ item.title }}
              (数量{{ item.quantity }})
            </div>
          </el-col>
          <el-col :span="6">
            <el-button-group>
              <el-button type="primary" @click="add(item.id)">+</el-button>
              <el-button type="primary" @click="decrease(item.id)">-</el-button>
            </el-button-group>
          </el-col>
      </el-row>
    </template>
    <el-text type="danger" size="large">总价：{{shopping.totalPrice}}元 </el-text>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>