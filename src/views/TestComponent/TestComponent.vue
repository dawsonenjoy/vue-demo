<template>
  <div>
    <div class="intro">
      <h3>组件引入示例：</h3>
      <Test />
      <!-- 直接使用引入的组件 -->
    </div>
    <hr />
    <div class="data">
      <h3>data属性示例：</h3>
      <div>
        <label for="color">修改下面的背景色：</label>
        <el-input type="text" v-model="color" id="color"></el-input>
        <div class="color" :style="'background:' + color">我的背景颜色是：{{color}}</div>
        <!-- 绑定data里的color值到style属性里 -->
      </div>
    </div>
    <hr />
    <div class="method">
      <h3>method属性示例：</h3>
      <div>
        <el-select v-model="value" placeholder="请选择触发事件" @change=handleChange>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <button @[value]=handleEvent>{{label}}</button>
        <!-- 通过@[value]绑定事件名，并绑定事件触发的函数 -->
      </div>
    </div>
  </div>
</template>

<script>
import Test from '@/components/Test/Test'
export default {
  components: {
    // 引入组件
    Test
  },
  data() {
    // 组件化开发当中data需要定义成一个返回函数
    return {
      name: "",
      color: "green",
      options: [{
          value: 'click',
          label: '点击触发'
        }, {
          value: 'dblclick',
          label: '鼠标双击触发'
        }, {
          value: 'mouseenter',
          label: '鼠标进入触发'
        }, {
          value: 'keydown',
          label: '按下回车键触发'
        }],
        value: 'click',
        label: '点击触发'
      }
  },
  methods: {
    handleEvent(){
      alert("你触发了：" + this.value + " 事件")
      // 通过this.value获取data里的value值
    },
    handleChange(val) {
      this.label = this.options.find(item=>item.value == val).label
      // 更新按钮的对应文本
    }
  }
}
</script>

<style lang="scss" scoped>
.data {
  margin: 20px 20px 20px 0px;
  .el-input {
    width: 200px;
  }
  .color {
    margin-top: 20px;
    padding: 20px 20px 20px 0px;
  }
}
.method {
  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  button:active, button:hover {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: 0;
}
}
</style>
