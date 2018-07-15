import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 按需加载
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component:  resolve => require(['@/components/index'], resolve)
//     },
//     {
//       path: '/homePage',
//       name: 'homePage',
//       component:  resolve => require(['@/views/home-page'], resolve)
//     }
//   ]
// })


// 非按需加载----加载首页慢
import HomePage from '@/views/home-page.vue'
import List from '@/views/list.vue'
import Reg from '@/views/reg.vue'
import Sign from '@/views/sign.vue'


export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/reg',
            name: 'Reg',
            component: Reg
        },
        {
            path: '/sign',
            name: 'Sign',
            component: Sign
        },

    ]
})
