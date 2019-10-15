import {ADD, SUB} from './mutation-types'

const mutations = {
    [ADD](state) {
        state.count++
    },
    [SUB](state) {
        state.count--
    }
}
export default mutations