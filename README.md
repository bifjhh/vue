# vue

##### MVVM模式

 - MVVM拆分解释为
    + Model 负责数据存储
    + Vew   负责页面展示
    + View Model:负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示
- MVVM要解决的问题是将业务逻辑代码与视图代码进行完全分离，使各自的职责更加清晰，后期代码维护更加简单

- 用图解的形式分析Ajax请求回来数据后直接操作Dom来达到视图的更新的缺点，以及使用MVVM模式是如何来解决这个缺点的
- 
#### 使用   
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