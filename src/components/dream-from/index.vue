<template>
  <el-form ref="form"
           class="dreamForm"
           :model="formData"
           :rules="formRules"
           :hide-required-asterisk="formConfig.asterisk"
           :label-position="formConfig.labelPosition"
           :label-width="formConfig.labelWidth"
           :size="formConfig.size">
    <template v-for="(x, i) in formItems">
      <el-form-item :key="i"
                    :label="x.label">
        <el-input>{{ formItems }}</el-input>
      </el-form-item>
    </template>
    <div class="dreambutton">
      <template v-for="(x, i) in btnOpera">
        <el-button :key="i"
                   :type="x.type"
                   :size="x.size || 'small'"
                   @click="operaEvent($event, x.eventName, x.valid)">
          {{ "按钮" }}
        </el-button>
      </template>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "DreamForm",
  props: {
    formData: {
      type: Object,
      require: true,
    },
    formItems: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
    formRules: {
      type: Object,
      required: false,
      default: () => {
        return {};
      },
    },
    formConfig: {
      type: Object,
      required: false,
      default: () => {
        return {
          asterisk: true,
          labelPosition: "left",
          labelWidth: "90px",
          size: "medium",
        };
      },
    },
    btnOpera: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
  },
  data () {
    return {};
  },
  methods: {
    /**
     * @description 按钮点击事件
     * @param { String } name
     */
    operaEvent: function (eventName) {
      // this.$emit('btn-click', eventName)
      console.log(eventName)
    },
  }
};
</script>

<style lang="scss">
</style>