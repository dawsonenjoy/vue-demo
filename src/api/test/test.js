import {get, post, put, _delete} from '../ajax'

export default class Test {
    static getUser = () => get('/user')
    static getTest = () => get('/test')
}