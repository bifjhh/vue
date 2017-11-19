import Vue from 'vue'; //类似于script导入vue核心包
import App from "./APP.vue"; //导入App.vue的vue对象
// 利用Vue对象进行解析渲染
import VueRouter from 'vue-router'; //导入vue路由的依赖包
Vue.use(VueRouter); //在vue中使用路由
// 导入vue组件
import login from './component/acccount/login.vue';
import register from './component/acccount/register.vue';
// 定义路由规则
var router = new VueRouter({
    routes: [{
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        }
    ]
})
// 实例化vue对象并接管id=app 的div 元素上
new Vue({
    el: '#app',
    // render:function(create){create(App);}  //es5语法
    render: c => c(App), //es6的函数写法 =>：goes to 
    router: router, //可以使用ES6简写， 只写一个 router
});

// 引入mint-ui 组件包
import mintui from 'mint-ui';
//  导入mint-ui 样式
import 'mint-ui/lib/style.min.css';
Vue.use(mintui);

// 引入mui
import '../static/mui/css/mui.css';