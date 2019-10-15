const getters = {
    getCount(state) {
        // getters里传入state属性，state里的值每操作一次，这里都会运行一次
        console.log(state.count);
        // state的值一被操作，这里就输出
        return `result:${state.count}`;
    }
}
export default getters