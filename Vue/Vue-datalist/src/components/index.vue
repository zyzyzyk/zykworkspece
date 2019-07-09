<template>
  <div class="header">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="计划板" name="first" class="first">计划板</el-tab-pane>
      <el-tab-pane label="首页" name="second" class="second">首页</el-tab-pane>
      <el-tab-pane label="计划列表" name="third" class="third">计划列表</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      
      }
  },
}
</script>

<style>
  .header{
    display: inline-block;

  }
  .el-icon-time{
    float: left;
  }
</style>
