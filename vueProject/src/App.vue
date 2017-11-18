<!-- 整个项目的根组件 -->
<template>
    <div>
        <!-- 页面结构 -->
        {{name}}
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-view></router-view>
    </div>
    <!-- 由于是vue2.0 所以这个里面一定要放一个根元素，可以放vue的指令 v- -->
</template>

<script>
// 本质上是一个vue组件
export default {//es6导出对象的写法
  // data: function() {
    data(){//es6写法 等价于data: function() {}
    return {
      name: "人生不过一场场的遇见."
    };
  }
};
</script>
<style scoped>
/* scope的含义 代表此处的css文件只能够在当前vue文件中使用有效 */
</style>

