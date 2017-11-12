#vue-01

#####MVVM模式

 - MVVM拆分解释为
    + Model 负责数据存储
    + Vew   负责页面展示
    + View Model:负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示
- MVVM要解决的问题是将业务逻辑代码与视图代码进行完全分离，使各自的职责更加清晰，后期代码维护更加简单

- 用图解的形式分析Ajax请求回来数据后直接操作Dom来达到视图的更新的缺点，以及使用MVVM模式是如何来解决这个缺点的
- ​
####使用   
      1. 导入vuejs
        <script src="vue.js"></script>
      2. 实例化Vue对象
   ```html
    <body> <!-- 无法直接接管body -->
        {{ name }}<!-- 只有在vue接管的范围内才可以使用Vue的系统指令呈现数据 -->
	<div id="app">
	<!-- 在Vue接管区域中使用Vue的系统指令呈现数据
	这些指令就相当于是MVVM中的View这个角色 -->
		{{ name }}
	</div>
</body>
   ```

   ```javascript
         //vm :叫做MVVM中的 View Model
          var vm = new Vue({
          el:'#app', //表示当前vue对象接管app的div区域
          data: {
              name:'xxx'  // 相当于是MVVM中的Model这个角色
          }
      });
   ```

###vue指令

- 注册事件
- 
    + 在vue中，给想要添加事件的标签 添加 
            v-on:click="方法名"
            简写 @click="方法名"
    + 同时需要在vue代码中添加执行的方法函数         

 ```javascript
    var vm = new Vue({
        el:'#app', //表示当前vue对象接管app的div区域
        data: {
            name:'黑马程序员'  // 相当于是MVVM中的Model这个角色
        },
        methods:{
            change:function(){
                this.name += '1';
            }
        }

    });
 ```
- 差值表达式
    + 使用vue内定义好的数据渲染到Vew层 页面曾
      +
- 解决闪烁
        v-text=""
        v-html=""
    +   v-cloak 这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。则标签内的内容就会显示出来，也不会出现闪烁

- v-bind
    + 动态地绑定一个或多个特性，或一个组件 prop 到表达式
    + 只能从数据层赋值给Vew层

- v-model
    + 在表单控件或者组件上创建双向绑定

    + 修饰符
        + .lazy 在默认情况下，v-model 在 input 事件中同步输入框的值与数据 (除了 上述 IME 部分)，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：
        + .number 如果想自动将用户的输入值转为 Number 类型 (如果原值的转换结果为 NaN 则返回原值)，可以添加一个修饰符 number 给 v-model 来处理输入值：
        + .trim 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入：   

- v-for
    ```html
    <div v-for="item in items">
        {{ item.text }}
    </div>
    <!-- 另外也可以为数组索引指定别名 (或者用于对象的键)： -->
    ```

    + 1.0版本 索引在前
    ```html
    <div v-for="(index, item) in items"></div>
    <div v-for="(key, val) in object"></div>
    ```
    + 2.0版本 索引在后 

    ```html
    <div v-for="(item, index) in items"></div>
    <div v-for="(val, key) in object"></div>
    <div v-for="(val, key, index) in object"></div>
    ```
