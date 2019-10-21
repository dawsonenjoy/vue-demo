<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#3C7741"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/">主页</el-menu-item>
    <el-menu-item index="/testComponent">组件使用测试页</el-menu-item>
    <el-menu-item index="/testConnect">组件通信测试页</el-menu-item>
    <el-menu-item index="/testStatic">静态资源测试页</el-menu-item>
    <el-menu-item index="/testFilter">过滤器测试页</el-menu-item>
    <el-menu-item index="/testDirective">指令测试页</el-menu-item>
    <el-menu-item index="/testRoute/dawsonenjoy/?color=white">路由测试页</el-menu-item>
    <el-menu-item index="/testVuex">Vuex测试页</el-menu-item>
    <el-menu-item index="/testMock">Mock测试页</el-menu-item>
    <el-menu-item index="/testForm">表单缓存测试页</el-menu-item>

    <!-- <el-submenu class="right" index v-if="loginStatus">
      <template slot="title">我的工作台</template>
      <el-menu-item index="/me">工作台</el-menu-item>
      <el-menu-item index="/setting">设置</el-menu-item>
      <el-menu-item index="/instruction">说明</el-menu-item>
    </el-submenu>

    <el-menu-item class="right" index="/login" v-if="!loginStatus">登录</el-menu-item>
    <el-menu-item class="right" index="/sign" v-if="!loginStatus">注册</el-menu-item> -->
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
      loginStatus: true
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // 处理点击时的路由跳转
      if (key !== null && key !== "") {
        this.$router.push(key)
      } else {
        console.log("index is null")
      }
    }
  },
  watch: {
    $route() {
      this.activeIndex = this.$route.path
    }
  }
}
</script>

<style lang="scss" scope>
$head-hight: 70px !important;
$head-line-height: 70px !important;
body {
  font-family: "Microsoft YaHei";
}
.el-menu--horizontal {
  height: $head-hight;
  line-height: $head-line-height;
  right: 0px;

  .el-menu-item,
  .is-active,
  .el-submenu,
  .el-submenu .el-submenu__title {
    height: $head-hight;
    line-height: $head-line-height;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: white;
  }
}
.el-menu--popup-bottom-start {
  margin-top: 0px;
}
.right {
  float: right !important;
}
</style>
