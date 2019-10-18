import Vue from 'vue'

export const todo = Vue.directive('todo', (el, data) => {
    // 传入todo事情以及done标志，完成了就显示绿色背景，否则红色背景
    if (data.modifiers.done){
        el.style.background = '#aaffaa'
        el.innerText = "todo:" + data.arg + " has done!"
    } else{
        el.style.background = '#ffaaaa'
        el.innerText = "todo:" + data.arg
    }
})