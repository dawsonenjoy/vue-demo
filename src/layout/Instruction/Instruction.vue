<template>
  <div class="instr">
    <hr />
    <el-button type="primary" @click="showInstr">页面实现说明</el-button>
    <el-card shadow="always" v-show="isShow">
      <slot name="content"></slot>
    </el-card>
  </div>
</template>

<script>
// 页面功能实现说明卡片
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showInstr() {
      this.isShow = !this.isShow
    }
  },
  watch: {
    $route() {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.instr {
  .el-button {
    margin-bottom: 20px;
  }
  margin: 20px 20px 20px 0px;
}
hr {
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
}
</style>
