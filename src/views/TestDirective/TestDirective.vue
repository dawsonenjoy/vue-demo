<template>
  <div>
    <div class="directive-if">
      <span class="title">v-if/v-show区别：</span>
      <div v-if="IfDataTrue">v-if true show</div>
      <div v-show="IfDataTrue">v-show true show</div>
      <div v-if="IfDataFalse">v-if false disapear</div>
      <div v-show="IfDataFalse">v-show false hidden</div>
      <!-- 为true时差别不大，为false时，v-if会将节点销毁，而v-show是将节点隐藏 -->
    </div>
    <div class="directive-for">
      <span class="title">v-for/v-html示例：</span>
      <ul v-for="(item, index) in ForData" :key="index">
        <span v-html="item"></span>
        <!-- v-html指令会将字符串转成html代码 -->
      </ul>
    </div>
    <div class="directive-diy">
      <span class="title">自定义示例：</span>
      <div v-color="diyColor">字体变色指令</div>
      <!-- 根据传入颜色变色指令 -->
      <div v-todo:ererything.done></div>
      <!-- 引号后面的everything会传入data的arg里，只能传一个值，点号后面的代表标志属性，这里传了done，可以在data的modifies里获取，值是true -->
      <div v-todo:something></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IfDataTrue: "test",
      IfDataFalse: "",
      ForData: ["<li>data1</li>", "<li>data2</li>", "<li>data3</li>"],
      // arrayForTrue: [1,2,3],
      diyColor: "red"
    }
  },
  directives: {
    color(el, data) {
      // 默认获取dom，并且可以接收数据
      el.style.color = data.value
      // 将字体颜色改成传入的颜色
    }
  }
}
</script>

<style lang="scss" scope>
$types: if for diy;
@each $type in $types {
  .directive-#{$type} {
    margin: 10px 0px 10px 0px;
    padding: 10px;
    font-size: 20px;
    div {
      margin: 10px 0px 10px 0px;
      background: #f1e9de;
      width: 500px;
      text-align: center;
    }
  }
}
.directive-if {
  background: #e9f9fa;
}
.directive-for {
  background: #dff3e7;
}
.directive-diy {
  background: #f5f5e7;
}
</style>
