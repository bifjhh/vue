# webpack 项目结构中继承vue-router
- 安装vue-router
    + cnpm install vue-router --save
- 在App.vue 中 配置 
    + router-link 路由导航链接
    + router-view 渲染时的占位符 
- 在 src 目录中新建 component --> account 文件夹
+   
- 在入口文件中配置  vue router：
    + 导入
    + 绑定
    + 配置VueRouter
    + 导入组件

- 在 new Vue 实例中， 绑定vue-router
```javascript
new Vue({
    el:'#app',
    router:router//可以使用ES6简写， 只写一个 router
}) 
```
## Vue移动组件mint-ui使用
### 安装mint-ui
- 利用：cnpm install mint-ui --save 命令将mint-ui安装到项目中
- 在main.js中全局导入mint-ui和它的css后即可在任何组件的中使用mint-ui组件了 
