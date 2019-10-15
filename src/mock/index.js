import Mock from "mockjs";
Mock.mock("/user", {
  user: "dawsonenjoy"
});

let Random = Mock.Random
Random.word()
Mock.mock("/test", {
  "list|1-10": [{
    "name":'@word',
    "string|1-5": "★"
  }]
});

export default Mock;
