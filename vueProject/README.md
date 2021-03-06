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

## 页面结构
- 使用mint-ui的header组件完成头部    
- 页面主体使用路由占位符
- 使用mui 完成底部选项卡
### 底部选项卡激活
- 将默认选项卡的a标签更改为router-link
- 将href更改为to
- 使用linkActiveClass:改变激活时的class
- 设置全局样式，组件减去head 和 底部 的 高度 防止组件内容被遮挡
### mint-ui-Swipe完成轮播图
- 复制Swipe轮播图基础用法的结构到home组件内
    + 具体属性参考文档https://mint-ui.github.io/docs/#/zh-cn2/swipe
- 设置Swipe的基础样式（因为Swipe轮播图没有基本样式）
- 使用模拟图片数据
- 使用v-for生成模板
```html
<mt-swipe :auto="3000">
            <!-- <mt-swipe-item>1</mt-swipe-item> -->
            <mt-swipe-item v-for='v in list'>
                <!-- 因为直接使用差值表达式无法解析,所以使用v-bind进行绑定 -->
                <a :href="v.url"> <!-- 绑定a标签跳转链接 -->
                    <img :src="v.img"><!-- 绑定图片属性 -->
                </a>
            </mt-swipe-item>
           
        </mt-swipe>
```
### 使用vue-resource发送ajax
- 安装vue-resource: cnpm install vue-resource --save
- 在入口文件中引入vue-resource 并使用
- 使用git请求数据
- 判断数据内容并赋值
### 渲染导航区域
- 使用MUI-九宫格样式
- 修改默认样式属性
- 调整子板块大小
- 覆盖更改图片
- 添加路由

#### 添加新闻列表板块
- 设置新闻板块路由组件
- 完成样式模板
- 设置git请求数据
- 完成渲染
##### 格式化日期
- 使用 Moment.js 实现日期格式化功能
    + 下载依赖包 cnpm install moment --save
- 由于多个页面都需要这个功能，所以自定义全局过滤器
- 在入口文件中 引入包
- 定义全局过滤器，设置传入参数
```javascript
// 引入 momentjs
import moment from 'moment';
// 定义全局过滤器，设置传入参数
Vue.filter('datefmt',function(input,fmtstring){
    return moment(input).format(fmtstring); 
})
```
- 使用过滤器
        {{v.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}


##### 获取图文详情
- 设置新闻列表 
        <router-link v-bind="{to:'/news/newsdetails/' + v.id}"> 
    + 设置点击时跳转到指定路由   
- 创建新的图文详情组件     
    + 并在入口文件中配置路由规则及相应组件
- 利用路由参数的传值，配置路由详情组件
        this.id = this.$route.params.id;
- 在点击时获取路由参数的值（传入点击时的id）
- 根据传入的id进行ajax请求
- 将返回的数据接收并渲染到页面               