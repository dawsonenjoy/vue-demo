<template>
  <div>
    <h1>404 Not Found</h1>
    <el-button type="" @click=jump>click here to Main Page</el-button>
  </div>
</template>

<script>
import Home from '@/views/Home/Home'
export default {
  components: {
    Home
  },
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
