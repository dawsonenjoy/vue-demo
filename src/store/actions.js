import {ADD, SUB} from './mutation-types'
const actions = {
    add2(context) {
        context.commit(ADD);
        context.commit(ADD);
    }
}
export default actions