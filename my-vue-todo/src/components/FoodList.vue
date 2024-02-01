<script setup>
import { ref } from 'vue'
import { ElButton, ElRow, ElCol } from 'element-plus'

const data = ref([
  { name: '商品1', price: 10, id: 1 },
  { name: '商品2', price: 20, id: 2 }
])
</script>

<template>
  <div class="food-list">
    <el-row v-for="item in data" :key="item.id" justify="start" >
      <el-col :span="18">
        <div class="name">{{ item.name }}- {{ item.price }}元</div>
      </el-col>
      <el-col span="6">
        <el-button>添加购物车</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>