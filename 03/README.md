#### 过滤器

- 系统过滤器的使用
 + 系统过滤器只存在于vue-1版本中
 + 使用方法按照说明

##### 自定义私有过滤器 
filters:{}
```javascript
new Vue({
            el: '#app',
            data: {
                time: new Date(),
            },
            filters: {
                datefmt: function (input) {
                    // input 是自定义过滤器的默认参数，input的值永远都是取自于 | 左边的内容
                    // 过滤器的逻辑 将input的值格式化yyyy-mm-dd 字符串格式输出
                }
            }
            // 在某一个vue对象内部定义的过滤器称之为私有过滤器
            // 这种过滤器只有在当前vue对象el指定的监管的区域有用
        })
```
##### 全局过滤器 
```javascript
Vue.filter('datefmt',function(c1,c2,c3){
    // 可以传入参数设置，但是顺序要保持一致

})
```
#### v-on 按键修饰符
- 1.0版本中如果不是系统默认的则需要自己添加
- 2.0版本中直接使用键值码

#### 自定义指令

```javascript
Vue.directive('指令名',function(){
    // 在定义指令的时候不用添加v-前缀，但是在使用的时候必须添加v-
    // this.el 是指使用当前指令的元素
    // this.vm 当前元素所在的区间
    // this.expression 是指自定义指令设置的属性值，相当于变量
})
``` 
#### 使用vue-resource
- $http发送get请求
- $http发送post请求
- $http发送jsonp请求

#### 生命周期
- 所有的生命周期钩子自动绑定 this 上下文到实例中
- 1.0 
    + init
    + created
    + beforeCompile
    + compiled
    + ready
    + attached
- 2.0
    + beforeCreate
    + created
    + beforeMount
    + mounted

#### 结合css实现过渡动画
        在进入/离开的过渡中，会有 6 个 class 切换。
- v-enter：
    +定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
- v-enter-active：
    +定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
- v-enter-to: 
    +2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)，在 transition/animation 完成之后移除。
- v-leave: 
    +定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
- v-leave-active：
    +定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
- v-leave-to: 
    +2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)，在 transition/animation 完成之后移除。
#### 结合animate实现过渡动画
```html
<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
<div id="example-3">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show">hello-vue</p>
  </transition>
</div>
```
#### 钩子函数实现动画
- 可以在属性中声明钩子
```html 
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
</transition>
```