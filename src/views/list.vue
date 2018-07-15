<template>
  <div class="list">
    <router-link to="/">返回首页</router-link>
    <Table  :loading="loading" border :columns="columns" :data="listData"></Table>
    <div style="margin-top:15px;" v-if="total > 0">
        <Page :total="total" :pageSize="rows - 1" @on-change="changeList"></Page>
    </div>

    <div style="margin-top:30px;">
        <h5>v-for</h5>
        <ul>
            <li v-for="(item,index) in listData" :key="index">{{item.phone}}</li>
        </ul>
    </div>

    <div :style="{ marginTop: '30px'}">
        <Button type="primary" @click="watchFn">watch</Button>
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
        index:1,
        rows:2,  
        total: 0,
        loading: true, 
        columns:[
            {
                title: '标题',
                key: 'abstract',
                render: (h, params) => {
                    return h('div', [
                        h('Icon', {
                            props: {
                                type: 'person'
                            }
                        }),
                        h('strong',{
                            style: {
                                marginLeft: '5px'
                            },
                        }, params.row.abstract)
                    ]);
                }
            },
            {
                title: '类型',
                key: 'categoryname'
            },
            {
                title:'状态',
                key:'state',
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                console.log(params.row);
                            }
                        }
                        }, params.row.state ==  'true' ? '启用' : '禁用')
                    ]);
                }
            },
            {
                title: '作者',
                key: 'username'
            },
        ],
        listData:[],
        wc:{
            a:{
                b:{
                    c:3
                }
            }
        }
      };
    },
    // 组件创建之前
    created() {
        // 初始化获取列表数据
        this.getListDate(); 
    },
    //  组件创建完成
    mounted() {
        setTimeout( () => {
            this.wc.a.b.c = 33333;
        },2000)
    },
    // 组件内的方法
    methods: {
        getListDate() {
           this.loading = true;
           let params = {
               index: this.index,
               rows: this.rows,
           } 
           this.$http('/ArticlePage',{ params }).then(res => {
               console.log(res);
               if(res.data.code == 0) {
                   this.listData = res.data.result; 
                   this.total = res.data.pagesize;
               } else {

               }
               this.loading = false;
           }).catch(error => {
               this.loading = false;
           })
        },
        changeList(index) {
            console.log(index);
            this.index=index; 
            this.getListDate(); 
        },
        watchFn(){
            console.log(this.wc);
        }
    },
    // 局部过滤器
    filter: {},
    // 计算属性
    computed: {},
    // 数据监听
    watch: {
        wc:{
　        handler(curVal,oldVal){
　          console.log(curVal,oldVal)
　　　　　},
　　　　　deep:true
        }
    },
    //  组件销毁
    destroyed() {

    }
  };
</script>

<style lang="less">
  .list {
    text-align: center;
    padding-top: 50px;
    a {
      line-height: 36px;
      height: 36px;
    }

  }
</style>
