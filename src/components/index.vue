<template>
    <div>
      <div>Child:{{childData}}</div>
      <Button type="primary" @click="modal1 = true">Child</Button>
      <div>这是父组件传过来的数据: {{parentData}}</div>
      <Modal
          v-model="modal1"
          title="Common Modal dialog box title"
          @on-ok="ok"
          @on-cancel="cancel"
      >
          <p></p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
      </Modal>
    </div>
</template>
<script>
export default {
  props: ["parentData"],
  data() {
    return {
      modal1: false,
      childData: "这是子组数据"
    };
  },
  created() {
    // 向父组件传递数据
    this.$parent.$emit("test", {
        childData: this.childData
    });
  },
  mounted() {},
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "/assets/style/index.less"; */
</style>
