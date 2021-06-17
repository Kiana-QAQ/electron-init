<template>
  <div class="user">
    <el-input :placeholder="input.placeholder" v-model="input.input" class="input-with-select" >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-input type="textarea" :rows="2" :placeholder="text.placeholder" v-model="text.textarea" ></el-input>
  </div>
</template>

<script>
export default {
  name: "user",
  components: {
  },
  data() {
    return {
      input: {
        placeholder:"请输入查询内容",
        input:"",
      },
      text:{
        placeholder:"内容显示",
        textarea:"",
      }
    };
  },
};
</script>
<style lang="scss">
.el-textarea{
  margin-top: 20px;
}
</style>
