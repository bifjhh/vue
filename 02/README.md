#### 过滤器

- 系统过滤器的使用
 + 系统过滤器只存在于vue-1版本中
 + 使用方法按照说明

##### 自定义私有过滤器 
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
    // this.vm 我们定义的名称
    // this.expression 是指设置的属性值，相当于变量
})
``` 


