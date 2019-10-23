<template>
  <div>
    <div class="split">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <slot name="index"></slot>
      </el-breadcrumb>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  padding: 20px 20px 20px 0px;
  font-size: 16px;
}
.split {
  margin: 20px 20px 20px 0px;
  background: #f8f6f8;
  height: 50px;
}
</style>
