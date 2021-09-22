<template>
  <DreamForm
    :form-config="formConfig"
    :form-items="formItem"
    :form-rules="formRules"
    :form-data="formData"
    :btnOpera="btnOpera"
    @btn-click="btnEvent"
  />
</template>
 <script>
 import DreamForm from "../../components/dream-from/index.vue"
export default {
  components: {
      DreamForm
  },
  data() {
    return {
      formItem: [
        {
          label: "1",
        },
        {
          label: "2",
        },
      ],
      btnOpera: [
        {
          label: "button",
          size: "small",
        },
        {
          label: "button",
          size: "small",
        },
      ],
      formRules: {},
      formData: {},
      formConfig: {
        asterisk: false,
        labelPosition: "top",
        size: "small",
      },
    };
  },
  methods: {
    btnEvent(eventName, info) {
      this["_" + eventName](info);
    },
  },
};
</script>

<style lang="scss">
</style>