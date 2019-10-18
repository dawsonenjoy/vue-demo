<template>
  <div>
    我和上面的按钮们没有关系，但可以给他们传值，不信你点右边的按钮试试：
    <el-button type="primary" plain @click=sendToOther>往一个没关系的组件TestConnect传值</el-button>
  </div>
</template>

<script>
import {Event} from '@/utils/component-pass'
export default {
    methods:{
        sendToOther(){
            Event.$emit("fromOther", {
                "msg": "this is a msg from Other."
                // 基于Event对象设置一个fromOther事件，用于传值，只有使用相同对象来接收才能获取到值
            })
        }
    }
}
</script>

<style lang="scss" scoped>
div {
  background: #cfd7ee;
  margin: 20px 20px 20px 0px;
  padding: 15px 15px 15px 0px;
}
</style>
