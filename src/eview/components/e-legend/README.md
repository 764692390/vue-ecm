# ELegend 容器

## 使用示例

- 用法一

```html
<e-legend position='left' title='我的空间'>
  <div>content</div>
</e-legend>
```

- 用法二

```html
<e-legend position='left'>
  <span slot='title'><b>*</b> 我的空间</span>
  <div>content</div>
</e-legend>
```

- 如果用法一与用法二同时使用，最终会渲染为第二种的结果

## API

|参数|类型|默认值|说明|
|---|---|-----|----|
|position|String|'left'|位置信息，'left', 'center', 'right'|
|title|String|''|标题|
