# webpack 项目结构中继承vue-router
- 安装vue-router
    + cnpm install vue-router --save
- 在App.vue 中 配置 
    + router-link 路由导航链接
    + router-view 渲染时的占位符 
- 在 src 目录中新建 component --> account 文件夹
    + 在其中保存创建的组件文件
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
- 在入口文件中全局导入mint-ui和它的css后即可在任何组件的中使用mint-ui组件了 
## MUI
- MUI是最接近原生APP体验的高性能前端框架，MUI不依赖任何第三方JS库，压缩后的JS和CSS文件仅有100+K和60+K
- 主要使用它的css布局，对于js特效没有用到
### 使用mui 组件
- 下载使用静态资源包
    + hellomui源码下载（完全可以直接拷贝里面的代码来实现自己的功能）：https://github.com/dcloudio/mui
- 在入口文件中引入mui.css文件
- 要实现某个功能只需要按照MUI在线DEMO，找到案例源码页面将效果迁移到项目中

- 查询版本 npm||yarn info 模块名称
    + npm info webpack
- 如果npm无法使用 可以安装 yarn
    + cnpm install yarn -g    
- 使用yarn查询版本
    + yarn info webpack