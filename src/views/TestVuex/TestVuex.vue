<template>
  <div>
    <div class="content">
      <b>state.count:</b>
      {{count}}
      <br />
      <b>getters print:</b>
      {{getCount()}}
      <br />
      <el-button @click="ADD">add</el-button>
      <el-button @click="SUB">sub</el-button>
      <el-button @click="add2">add2</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
// 引入mapState等vuex当中的内容方法来获取对应的属性
export default {
  computed: {
    ...mapState(["count"])
    // mapState(["count"])获取的是count值的返回函数，将其解构放入computed属性当中
  },
  methods: {
    ...mapMutations(["ADD", "SUB"]),
    ...mapActions(["add2"]),
    ...mapGetters(["getCount"])
  },
}
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
  font-size: 30px;
  margin: 20px 20px 20px 0px;
}
</style>
