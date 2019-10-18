<template>
  <div>
    <Test />
    <TestConnect :fromChild="msg" @fromParent="showFromParent"></TestConnect>
    <!-- 往父组件TestConnect传入值fromChild，并监听fromParent事件获取父组件传递的值 -->
    <TestConnect2 />
  </div>
</template>

<script>
import Test from '@/components/Test/Test'
import TestConnect from '@/components/TestConnect/TestConnect'
import TestConnect2 from '@/components/TestConnect/TestConnect2'
export default {
  data() {
    return {
      msg: "this is a msg from child."
    }
  },
  components: {
    Test,
    TestConnect,
    TestConnect2
  },
  methods: {
    showFromParent(data) {
      alert(data.msg)
      // 接收并显示父组件传递的值
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
