<script>
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus'
export default defineComponent({
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small'
    }
  }
})
</script>

<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>

</style>
