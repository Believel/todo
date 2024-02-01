<script setup>
import { ElCard, ElDivider } from "element-plus";
import FoodList from "../components/FoodList.vue";
import CarList from "../components/CarList.vue";
</script>

<template>
   <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>购物车</span>
        <!-- <el-button class="button" text>Operation button</el-button> -->
      </div>
    </template>
    <div class="content">
      <food-list></food-list>
      <el-divider></el-divider>
      <car-list></car-list>
    </div>

  </el-card>

</template>

<style scoped>
.box-card {
  margin: 50px auto 0;
  width: 700px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.content {
  padding: 10px;
}
</style>