<template>
  <div class="user">
    <a href="https://widget-page.qweather.net/h5/index.html?md=0123456&bg=1&lc=auto&key=99c1fd76c4ef46968121163a444b52b7&v=_1631948468424">111</a>
  </div>
</template>

<script>
export default {
  name: "user",
  components: {
  },
  data () {
    return {
      input: {
        placeholder: "请输入查询内容",
        input: "",
      },
      text: {
        placeholder: "内容显示",
        textarea: "",
      }
    };
  },
  mounted () {
    // 初始化
    // this.init();
  },
  methods: {}
};
</script>
<style lang="scss">
.el-textarea {
  margin-top: 20px;
}
</style>
