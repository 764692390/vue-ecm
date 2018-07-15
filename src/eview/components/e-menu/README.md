# EMenu 左侧菜单

## 使用示例

```html
<e-menu slot='menu' :menus='menus' :openNames='openNames' :activeName='activeName' :onSelect='onMenuSelect'>
</e-menu>
```

## API

|参数|类型|默认值|说明|
|---|---|-----|----|
|menus|Array|[]|菜单数据|
|openNames|Array|[]|展开的菜单|
|activeName|String|''|默认选中的菜单|
|onSelect|Function|function () {}|点击子菜单时回调|
|theme|String|'dark'|主题颜色，可选值 `dark`， `light`|


- `menus` 数据格式如下

```js
// menus 
[
  {
    name: '/orange',
    text: '统一APP',
    children: [
      {
        name: '/orange/list',
        text: '申请列表'
      }
    ]
  }
]
```

- `openNames` 数据格式如下

```js
['/orange']
```

- `onSelect` 回调参数为 `menus` 中配的 `name` 字段
