import {get, post, put, _delete} from '../ajax'

export default class Test {
    // 定义一个类存放接口
    static getUser = () => get('/user')
    // 定义静态方法接口
    static getTest = () => get('/test')
}