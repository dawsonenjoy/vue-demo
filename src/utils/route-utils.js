export function routeWatch(route, instruction) {
  // 监听路由变化，并更新面包屑导航和文字说明
  let path = route.path.split("/").filter(item => item != "");
  let content = instruction["defaultInstr"]["content"];
  let index = instruction["defaultInstr"]["index"];
  if (path.length > 0) {
    let instr = path.pop();
    if (path.includes("testRoute")) {
      // 对于testRoute页面，则应该对倒二个路由进行判断
      instr = path.pop();
    }
    try {
      content = instruction[instr]["content"];
      index = instruction[instr]["index"];
    } catch (e) {
      return null;
    }
  }
  return {
    content,
    index
  };
}
