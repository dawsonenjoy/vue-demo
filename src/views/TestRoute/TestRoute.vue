<template>
  <div>
    <div class="route-params">
        <span>通过$route.params接收路由参数：</span>
        <div>this is {{ $route.params.name }}'s page</div>
    </div>
    <div class="route-props">
        <span>通过props属性接收路由参数：</span>
        <div>this is {{ name }}'s page</div>
    </div>
    <div class="route-get">
        <span>通过$route.query接收get参数：</span>
        <div ref="get">the color in this div is {{ $route.query.color }}</div>
        <router-link :to="{name:'TestRoute', params:{name: randomName}, query:{color: randomColor}}">点击此处生成随机参数</router-link>
    </div>
    <div class="route-hook">
        <span>通过beforeRouteEnter/beforeRouteLeave属性设置路由进入和离开钩子函数：</span>
        <router-link to="/">点击离开当前路由</router-link>
    </div>
  </div>
</template>

<script>

import '@/assets/scss/picture.scss'
// 模块导入scss文件
export default {
    data(){
        return {
            randomName: "xxx",
            randomColor: "#ffffff"
        }
    },
    props: ["name"],
    // 获取路由传来的name参数
    mounted(){
        this.$refs.get.style.background = this.$route.query.color
        this.randomName = Math.random().toString(36).slice(-8)
        // 生成随机8位长度的36进制（10个数字+26个小写字母）字符
        this.randomColor = '#' + Math.random().toString(16).slice(-6)
        // 生成随机6位长度的16进制字符
    },
    watch:{
        $route(){
            // 监听get参数改变时，对应背景色也修改
            this.$refs.get.style.background = this.$route.query.color
        }
    },
    beforeRouteEnter(to, from, next){
        // to：前往的路由, from：从哪个路由来, next：前往路由执行的方法
        alert(`从路由：${from.path}，跳转到：${to.path}`)
        next()
        // next('/')
        // 跳转到前往的路由，这句不执行，路由不跳转，可以在里面传入参数，比如像注释这样跳转回/路由下
    },
    beforeRouteLeave(to, from, next){
        alert(`离开路由：${from.path}，前往：${to.path}`)
        next()
    }
}
</script>

<style lang="scss" scoped>
$types: params props get hook;
@each $type in $types {
  .route-#{$type} {
    margin: 10px 0px 10px 0px;
    padding: 10px;
    font-size: 20px;
    div {
      margin: 10px 0px 10px 0px;
      padding: 10px;
      background: #f1e9de;
    }
  }
}
.route-params {
  background: #e9f9fa;
}
.route-props {
  background: #dff3e7;
}
.route-get {
  background: #f5f5e7;
}
.route-hook {
  background: #f7e4f1;
}
</style>