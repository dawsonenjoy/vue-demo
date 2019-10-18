import Vue from 'vue'
// 定义全局过滤器

export const round = Vue.filter("round", data => Math.round(data))
// 四舍五入过滤器
