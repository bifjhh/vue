<template lang="html">
    <div class="temp">
        <mt-header fixed :title="info.title">
            <router-link to="/news/newslist" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="title">
            <h4 v-text="info.title"></h4>
            <p>{{info.add_time | datefmt('YYYY-MM-DD')}} {{info.click}}次浏览</p>
        </div>
        <div id="content" v-html="info.content"></div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      info: {},
      id: 0
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getdetails();
  },
  methods: {
    getdetails() {
      console.log(this.id);
      var url = "http://vue.studyit.io/api/getnew/" + this.id;
      this.$http.get(url).then(function(res) {
        var data = res.body;
        if (data.status != 0) {
          //   判断数据是否正常，否的话则阻断之后的函数运行
          Toast("提示信息");
          return;
        }
        //   数据正常则 给list 赋值
        this.info = data.message[0];
        console.log(this.info);
      });
    }
  }
};
</script>

<style lang="css" scoped>
.mint-header {
  background-color: #ccc;
  color: #3d3d3d;
}
img {
  width: 100%;
}
</style>
