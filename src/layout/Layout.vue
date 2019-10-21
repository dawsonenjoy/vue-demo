<template>
  <div>
    <Heading />
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <Navigation />
        </div>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <Title>
            <div slot="index" v-if="index!=''">
              <el-breadcrumb-item>{{index}}</el-breadcrumb-item>
            </div>
          </Title>
          <keep-alive>
            <router-view :key="key" v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view :key="key" v-if="!$route.meta.keepAlive" />
        </div>
        <Instruction>
          <div slot="content" v-html="content"></div>
        </Instruction>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Heading from '@/layout/Heading/Heading'
import Navigation from '@/layout/Navigation/Navigation'
import Title from '@/layout/Title/Title'
import Instruction from '@/layout/Instruction/Instruction'
import instruction from '@/config/instruction'
import { routeWatch } from '@/utils/route-utils'
export default {
  data() {
    return routeWatch(this.$route, instruction) || {
      content: instruction["none"]["content"],
      index: instruction["none"]["index"]
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  watch: {
    $route() {
      let { content, index } = routeWatch(this.$route, instruction) || {
      content: instruction["none"]["content"],
      index: instruction["none"]["index"]
    }
      this.content = content
      this.index = index
    }
  },
  components: {
    Heading,
    Navigation,
    Instruction,
    Title
  },
}
</script>

<style lang="scss" scope>
</style>
