<template>
  <div class="app-layout">
    <el-container>
      <el-header>
        Header
        <span>{{ $t("HeaderBar.home") }}</span>
      </el-header>

      <el-container>
        <el-aside>
          Aside left
        </el-aside>
      
        <el-main>
          Main Right
        </el-main>
      </el-container>
    
      <el-footer>
        Footer  
      </el-footer>
      
    </el-container>
  </div>
</template>

<script setup lang="ts">


</script>
<style scoped>
.app-layout {
  height: 100vh;
}


</style>