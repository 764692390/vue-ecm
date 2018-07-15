# 404 默认404

## 使用示例

```html
<e-404></e-404>
```

## 使用说明

推荐在路有中添加一个默认配置，如：

```js
{
  path: '*',
  name: '找不到资源',
  component: resolve => require(['eview/components/e-404/e-404.vue'], resolve).default
}
```
