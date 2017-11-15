# 组件
#### 什么是组件
- 组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 is 特性扩展

#### 使用
        1.0版本
- 定义组件
    + 可以用 Vue.extend() 创建一个组件构造器：
```javascript
   var MyComponent = Vue.extend({
  // 选项...
})
```
- 注册组件   
    + 要把这个构造器用作组件，需要用 Vue.component(tag, constructor) 注册  
```javascript
// 全局注册组件，tag 为 my-component
Vue.component('my-component', MyComponent)
```
    2.0版本
- 注册一个全局组件
    + 可以使用 Vue.component(tagName, options)    
```javascript   
Vue.component('my-component', {
  // 选项
})
``` 
###### 快捷方式
```javascript
Vue.component('名称',{
    // 选项

})
```
*注意*
- 在2.0版本中创建组件时，需要使用一个根元素进行包裹
##### 子组件
- 就是在父级组件的内部再次注册组件
- 使用时也必须在父级组件的内部使用
