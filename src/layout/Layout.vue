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
        <Introduction>
          <div slot="content" v-html="content"></div>
        </Introduction>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Heading from '@/layout/Heading/Heading'
import Navigation from '@/layout/Navigation/Navigation'
import Title from '@/layout/Title/Title'
import Introduction from '@/layout/Introduction/Introduction'
import introduction from '@/config/introduction'
import { routeWatch } from '@/utils/route-utils'
export default {
  data() {
    return routeWatch(this.$route, introduction) || {
      content: introduction["none"]["content"],
      index: introduction["none"]["index"]
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  watch: {
    $route() {
      let { content, index } = routeWatch(this.$route, introduction) || {
      content: introduction["none"]["content"],
      index: introduction["none"]["index"]
    }
      this.content = content
      this.index = index
    }
  },
  components: {
    Heading,
    Navigation,
    Introduction,
    Title
  },
}
</script>

<style lang="scss" scope>
</style>
