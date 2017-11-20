<template lang="html">
    <div class="temp">
        <!-- 轮播图 -->
        <mt-swipe :auto="3000">
            <!-- <mt-swipe-item>1</mt-swipe-item> -->
            <mt-swipe-item v-for='v in list'>
                <!-- 因为直接使用差值表达式无法解析,所以使用v-bind进行绑定 -->
                <a :href="v.url"> <!-- 绑定a标签跳转链接 -->
                    <img :src="v.img"><!-- 绑定图片属性 -->
                </a>
            </mt-swipe-item>
           
        </mt-swipe>
        <!-- 九宫格 -->
        <div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">Home</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">Email</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">Chat</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">location</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">Search</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">Phone</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-gear"></span>
					<div class="mui-media-body">Setting</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-info"></span>
					<div class="mui-media-body">about</div></a></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-more"></span>
					<div class="mui-media-body">more</div></a></li>
			</ul> 
		</div>
    </div>
</template>

<script>
// 引入mint-ui的消息提示框
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getImg();
  },
  methods: {
    getImg() {
      var url = "http://vue.studyit.io/api/getlunbo";
      this.$http.get(url).then(function(res) {
        var data = res.body;
        if (data.status != 0) {
          //   判断数据是否正常，否的话则阻断之后的函数运行
          Toast("提示信息");
          return;
        }
        //   数据正常则 给list 赋值
        this.list = data.message;
      });
    }
  }
};
</script>

<style lang="css" scoped>
.mint-swipe {
  height: 300px;
  width: 100%;
}
.mint-swipe-item,
.mint-swipe-item a,
.mint-swipe-item a img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
