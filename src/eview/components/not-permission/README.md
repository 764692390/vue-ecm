# 没有权限 默认没有权限

## 使用示例

```html
<e-404></e-404>
```

## 使用说明

推荐在路有中添加一个默认配置，如：

```js
{
  path: '..',
  name: '没有权限',
  component: resolve => require(['eview/components/not-permission/not-permission.vue'], resolve).default
}
```
