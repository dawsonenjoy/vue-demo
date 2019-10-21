import {ADD, SUB} from './mutation-types'
// 定义结合mutation里方法的高级操作
const actions = {
    add2(context) {
        context.commit(ADD);
        context.commit(ADD);
    }
}
export default actions