<template>
  <div>
    这是一个能通信的组件模块，不信你点右边的按钮试试：
    <el-button type="primary" plain @click=showFromChild>接收子组件TestComponent传值</el-button>
    <el-button type="success" plain @click=sendToChild>往子组件TestComponent传值</el-button>
  </div>
</template>

<script>
export default {
    props: ["fromChild"],
    // 设置可能从子组件接收到的值
    methods:{
        showFromChild(){
            alert(this.fromChild)
        },
        sendToChild(){
            this.$emit("fromParent", {
                "msg": "this is a msg from parent."
                // 向子组件发送一条信息，需要子组件通过监听FromParent事件接收
            })
        }
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
