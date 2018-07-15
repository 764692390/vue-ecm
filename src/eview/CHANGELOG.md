CHANGELOG.md

## 0.1.3

`2017-06-07`

- 优化 `e-table` 样式，圆角、间距、颜色等
- 优化分页组件样式


## 0.1.2

`2017-06-06`

- 添加主题风格，目前支持 `light` 和 `dark`
  - `e-layout` 扩展 `theme`属性
  - `e-menu` 扩展 `theme`属性
- 重命名 `theme-dark.less` 文件为 `theme-base.less`，原因为此文件主要调整 `iView` 与公司设计风格不一致问题，不限于某些主题，因为 `dark` 为默认风格，所以在需要 `dark` 风格网站中不需要其他 `less` 文件
- 添加 `theme-light.less` 样式文件，需要 `light` 风格的情况下需要单独引入此文件
- 优化若干`menu`与公司设计风格不一致问题


## 0.1.1

`2017-06-06`

- 优化组件 `e-layout`
  - `footer` 始终位于底部
  - 左侧收起时，`logo`及菜单自适应
  - 修改顶部横栏为置顶
- 优化组件 `e-menu`
  - 垂直布局时，菜单如果过多自适应
  - 菜单展开收起激活、选中时样式适配
- 全局样式重设全局基色，符合统一规范


## 0.1.0

`2017-05-27`

- 初始化项目，封装基本组件 `e-404`、`e-breadcrumb`、`e-form-editing`、`e-form-generator`、`e-form-setting`、`e-layout`、`e-legend`、`e-menu`、`e-upload-image`
- 组件仍不完善