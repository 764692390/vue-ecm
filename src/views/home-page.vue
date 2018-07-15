<template>
  <div class="hone-page">
    <!-- <router-link to="/reg">去注册</router-link>
    <router-link to="/sign">去登录</router-link> -->
    <router-link to="/list">去列表</router-link>

    <!--父子组件通信-->
    <div >
        <h5 style="padding:20px 0"> parent: {{parentData}} </h5>
        <Child  ref="child" :parentData="parentData"/>
        <h5 style="padding:20px 0">$refs--$on--这是子组件传递父组件的数据: {{ childData }} </h5>

        <div>
            过滤器:  {{ data1 | toStr }}
        </div>
        <div>
            过滤器: {{ data2 | toStr }}
        </div>
    </div>
    
  </div>
</template>

<script>
import Child from "../components/index.vue";
export default {
  // 加载组件
  components: {
    Child
  },
  // 接受父级传输的数据
  props: [],
  // 本组件定义的数据
  data() {
    return {
      parentData: "这是父组件数据 ",
      show: true,
      childData: "",
      data1:'1',
      data2:'0',
      timer:null,
    };
  },
  // 组件创建之前
  created() {
    console.log("创建-之前");

    // 子级emeit 父级 on
    this.$on("test", msg => {
      console.log(msg.childData);
      this.childData = msg.childData;
    });

    this.timer = setInterval(() => {
        console.log('定时器3秒走一次, 销毁组件记得关掉哦!')
    },3000);
  },
  //  组件创建完成
  mounted() {
    console.log("创建-完成");
    // 通过$refs 获取子组件数据
    //console.log(this.$refs.child);
    //this.childData = this.$refs.child.childData;
  },
  // 组件内的方法
  methods: {},
  // 局部过滤器
  filters: {
      toStr: function(str) {
          return str == 1 ? '启用' : '禁用'
      }
  },
  // 计算属性
  computed: {},
  // 数据监听
  watch: {},
  //  组件销毁
  destroyed() {
    console.log("组件-销毁");
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style lang="less" scoped>
.hone-page {
  text-align: center;
  padding-top: 50px;
  a {
    line-height: 36px;
    height: 36px;
  }
}
</style>
