<template>
  <div>
    这是一个能通信的组件模块，不信你点右边的按钮试试：
    <el-button type="primary" plain @click=showFromChild>接收子组件TestComponent传值</el-button>
    <el-button type="success" plain @click=sendToChild>往子组件TestComponent传值</el-button>
  </div>
</template>

<script>
import {Event} from '@/utils/component-pass'
export default {
    props: ["fromChild"],
    // 设置可能从子组件（@/view/TestConnect/TestConnect）接收到的值
    methods:{
        showFromChild(){
            alert(this.fromChild)
        },
        sendToChild(){
            this.$emit("fromParent", {
                "msg": "this is a msg from parent."
                // 向子组件发送一条信息，需要子组件（@/view/TestConnect/TestConnect）通过监听FromParent事件接收
            })
        }
    },
    mounted(){
      Event.$on('fromOther', function(data) {
        // 挂载一个监听对象Event，监听任何组件使用该对象发送的fromOther事件（这里./TestConnect2监听了该事件）
        let msg = "I hear from a msg from other: " + data.msg
        alert(msg)
      })
    }
}
</script>

<style lang="scss" scoped>
div {
  background: rgb(222, 245, 223);
  margin: 20px 20px 20px 0px;
  padding: 15px 15px 15px 0px;
}
</style>
