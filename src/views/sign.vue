<template>
  <div class="reg">
    <router-link to="/">返回首页</router-link>
    <div class="reg-box">
      <Form :model="formItem" ref="formItem" :rules="ruleValidate" :label-width="80">
        <FormItem label="手机号" prop="phone">
          <Input v-model="formItem.phone" placeholder="请输入手机号..."></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model="formItem.password" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="signFn">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    // 加载组件
    components: {},
    // 接受父级传输的数据
    props: [],
    // 本组件定义的数据
    data() {
      return {
        formItem: {
          phone: "",
          password: "",
        },
        ruleValidate: {

          phone: [
            {
              required: true,
              message: "请输入手机号",
              trigger: "blur"
            }
          ],
          password: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }
          ],
        }
      };
    },
    // 组件创建之前
    created() {
    },
    //  组件创建完成
    mounted() {
    },
    // 组件内的方法
    methods: {
      // 提交
      signFn() {
        this.$refs.formItem.validate(valid => {
          if (valid) {
            this.$Spin.show();
            let data = this.formItem;
            this.$http
              .post("/user/signIn", data)
              .then(res => {
                this.$Spin.hide();
                if (res.data.errno == 0) {
                  this.$Message.success("登录成功");
                } else {
                  this.$Message.warning(res.data.errmsg);
                }
              })
              .catch(error => {
                this.$Spin.hide();
                this.$Message.error("登录失败");
              });
          } else {
            this.$Message.warning("请填写完整信息!");
          }
        });
      },
    }
  };
</script>

<style lang="less">
  .reg {
    text-align: center;
    .reg-box {
      width: 60%;
      margin: 60px auto;
    }
  }
</style>
