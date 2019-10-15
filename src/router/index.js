import Vue from "vue";
import Router from "vue-router";

import Layout from "@/layout/Layout";
import Home from "@/views/Home/Home";
import Page404 from "@/views/Page404/Page404";

// 测试页组件
import TestComponent from "@/views/TestComponent/TestComponent";
import TestVuex from "@/views/TestVuex/TestVuex";
import TestMock from "@/views/TestMock/TestMock";
import TestForm from "@/views/TestForm/TestForm";
import TestStatic from "@/views/TestStatic/TestStatic";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
// 屏蔽访问同一路由时报错问题

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        },
        {
          path: "/testComponent",
          name: "TestComponent",
          component: TestComponent
        },
        {
          path: "/testVuex",
          name: "TestVuex",
          component: TestVuex
        },
        {
          path: "/testMock",
          name: "TestMock",
          component: TestMock
        },
        {
          path: "/testForm",
          name: "TestForm",
          meta: {
            keepAlive: true
          },
          component: TestForm
        },
        {
          path: "/testStatic",
          name: "TestStatic",
          component: TestStatic
        }
      ]
    },
    {
      path: "/*",
      name: "Page404",
      component: Page404
    }
  ]
});

router.beforeEach((to, from, next) => {
// 路由钩子，每次路由跳转前执行
  console.log("to:" + to.path);
  next();
});

export default router;
