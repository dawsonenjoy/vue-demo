<template>
  <div>
    <h1>404 Not Found</h1>
    <el-button type="" @click=jump>click here to Main Page</el-button>
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
div {
  text-align: center;
}
</style>
