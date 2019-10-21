<template>
  <div>
    <TestConnect1 :fromChild="msg" @fromParent="showFromParent"></TestConnect1>
    <!-- 往父组件TestConnect1传入值fromChild，并监听fromParent事件获取父组件传递的值 -->
    <TestConnect2 />
  </div>
</template>

<script>
import Test from '@/components/Test/Test'
import TestConnect1 from '@/components/TestConnect/TestConnect1'
import TestConnect2 from '@/components/TestConnect/TestConnect2'
// 导入的算是父组件
export default {
  data() {
    return {
      msg: "this is a msg from child."
    }
  },
  components: {
    Test,
    TestConnect1,
    TestConnect2
  },
  methods: {
    showFromParent(data) {
      alert(data.msg)
      // 接收并显示父组件传递的值（这里是@/components/TestConnect/TestConnect1组件传递的）
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
