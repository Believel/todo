<script setup>
import { ref } from 'vue'
import { ElButton, ElRow, ElCol } from 'element-plus'
// TODO vite中 @ 符如何配置
// import { useShoppingStore } from '@/stores/shopping'
import { useShoppingStore } from '../stores/shopping'

const shopping = useShoppingStore()

function addCar(id) {
  shopping.addShopping(id)
}

</script>

<template>
  <div class="food-list">
    <el-row v-for="item in shopping.foodList" :key="item.id" justify="start" >
      <el-col :span="18">
        <div class="name">{{ item.title }}- {{ item.price }}元</div>
      </el-col>
      <el-col :span="6">
        <el-button @click="addCar(item.id)">添加购物车</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>