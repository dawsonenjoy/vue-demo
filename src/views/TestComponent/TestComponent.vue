<template>
  <div>
    <Test />
  </div>
</template>

<script>
import Test from '@/components/Test/Test'
export default {
  data() {
    return {
      msg: "this is a msg from child."
    }
  },
  components: {
    Test
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
