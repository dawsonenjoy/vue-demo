import {ADD, SUB} from './mutation-types'
// 定义对state的操作

const mutations = {
    [ADD](state) {
        state.count++
    },
    [SUB](state) {
        state.count--
    }
}
export default mutations