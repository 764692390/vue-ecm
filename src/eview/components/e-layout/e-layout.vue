<template>
  <div class="e-layout" :class='layoutClass'>
      <div class="e-layout-left">
        <div class="e-layout-logo">
          <slot name='logo'></slot>
        </div>
        <slot name='menu'></slot>
        <div :title='shrinked ? "点击展开" : "点击收起"' class='e-layout-toggle' @click='toggleSidebar' hidden>
          <Icon type="ios-arrow-left"></Icon>
        </div>
      </div>
      <div class='e-layout-right'>
        <div class="e-layout-header">
          <slot name='header-left'></slot>
          <div class="header-right">
            <slot name='header-right'></slot>
          </div>
        </div>
        <div class="e-layout-content">
          <div class="e-layout-content-main">
            <slot></slot>
          </div>
          <div class="e-layout-copyright">
            <slot name='copyright'></slot>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data () {
    return {
      shrinked: false
    }
  },
  methods: {
    toggleSidebar () {
      this.shrinked = !this.shrinked
    }
  },
  computed: {
    layoutClass () {
      return {
        'e-layout-shrinked': this.shrinked,
        ['theme-' + this.theme]: Boolean(this.theme)
      }
    }
  }
}
</script>
