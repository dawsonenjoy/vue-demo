<template>
  <div class="main">
    <div class="not-found">
      <router-link class="content" to="/" title="点击返回主页">Not Found</router-link>
    </div>
    <!-- <el-button type @click="jump">click here to Main Page</el-button> -->
  </div>
</template>

<script>
export default {
  methods: {
    jump() {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
$border-height: 100px;
$border-width: 100px;
$border-weight: 10px;
$border-color: rgb(158, 156, 156);

@keyframes shake {
  0% {
    transform: skew(-10deg, -10deg);
    transform: scale(0.8);
  }
  100% {
    transform: skew(10deg, 10deg);
  }
}
.main {
  background: rgb(240, 233, 233);
  text-align: center;
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 20%;

  .not-found {
    animation: shake 1s 0s infinite linear alternate;
    text-shadow: 10px 10px 5px rgb(218, 216, 216);
  }
  .content {
    position: relative;
    text-decoration: none;
    // padding: 30px;
    font-size: 100px;
    font-weight: 600;
    color: rgb(190, 187, 187);
    &:hover {
      color: white;
    }
    &::before {
      position: absolute;
      left: -50px;
      top: -20px;
      content: "";
      height: $border-height;
      width: $border-width;
      border-left: $border-weight solid $border-color;
      border-top: $border-weight solid $border-color;
      border-radius: 10px;
    }
    &::after {
      position: absolute;
      right: -50px;
      bottom: -10px;
      content: "";
      height: $border-height;
      width: $border-width;
      border-right: $border-weight solid $border-color;
      border-bottom: $border-weight solid $border-color;
      border-radius: 10px;
    }
  }
}
</style>
