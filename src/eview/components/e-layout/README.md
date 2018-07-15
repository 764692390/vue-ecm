# ELayout 整体布局

## 使用示例

```html
<e-layout>
  <div slot='logo'>LOGO 的位置</div>
  <div slot='menu'>菜单 的位置</div>
  <div slot='header-left'>面包屑 的位置</div>
  <div slot='header-right'>用户头像 的位置</div>
  <div slot='copyright'>内容区底部版权 的位置</div>
  <div>这是内容区</div>
</e-layout>
```

## API

|参数|类型|默认值|说明|
|---|---|-----|----|
|theme|String|'dark'|主题颜色，可选值 `dark`， `light`|
