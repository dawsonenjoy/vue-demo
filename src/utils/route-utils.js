export function routeWatch(route, introduction) {
  // 监听路由变化，并更新面包屑导航和文字说明
  let path = route.path.split("/").filter(item => item != "");
  let content = introduction["defaultIntro"]["content"];
  let index = introduction["defaultIntro"]["index"];
  if (path.length > 0) {
    let intro = path.pop();
    if (path.includes("testRoute")) {
      // 对于testRoute页面，则应该对倒二个路由进行判断
      intro = path.pop();
    }
    try {
      content = introduction[intro]["content"];
      index = introduction[intro]["index"];
    } catch (e) {
      return null;
    }
  }
  return {
    content,
    index
  };
}
