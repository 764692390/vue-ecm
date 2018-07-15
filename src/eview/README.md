## eview

> 基于[iview](https://www.iviewui.com)组件库封装符合内部系统统一规范的组件，技术栈使用[vue](https://cn.vuejs.org)

推荐在自己项目的`src`目录下，同时推荐在`webpack`中添加或修改一个配置：

```js
export default {
  // ...
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'eview': '@/eview'
    }
  }
  // ...
}
```


## 使用

- 代码中可以直接这样引入

```html
<template>
  <e-layout>
    <e-menu slot='menu'></e-menu>
    <!-- others... -->
  </e-layout>
</template>

<script>
import { ELayout, EMenu } from 'eview'
export default {
  data () {
    components: {
      ELayout,
      EMenu
    }
  }
}
</script>
```
- 由于是基于 [iview](https://www.iviewui.com) 进行再次封装，在使用 `eview` 时需要其对应组件内的 **README.md** 文件
- 使用 `eview` 不影响继续使用 [iview](https://www.iviewui.com) ，文档请参考官网

