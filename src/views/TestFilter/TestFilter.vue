<template>
  <div>
      {{ myName | setInfoStyle(myEmail) }}
      {{ age | round }}
      <!-- 使用过滤器 -->
  </div>
</template>

<script>
export default {
    data(){
        return {
            myName: "dawsonenjoy",
            myEmail: "xxx@test.com",
            age: 23 + 1/12
        }
    },
    filters:{
        // 定义局部过滤器
        setInfoStyle(name, email){
            return `Person Info： ${name} 【${email}】`
        }
    }
}
</script>

<style lang="scss" scope>
</style>
