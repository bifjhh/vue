import Vue from 'vue'; //类似于script导入vue核心包
import App from "./APP.vue"; //导入App.vue的vue对象
// 利用Vue对象进行解析渲染
new Vue({
    el: '#app',
    // render:function(create){create(App);}  //es5语法
    render: c => c(App) //es6的函数写法 =>：goes to 把App.vue文件
})