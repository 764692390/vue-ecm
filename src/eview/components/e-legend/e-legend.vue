<template>
  <div class="e-legend">
    <div class='e-legend-title' v-if='$slots.title || title'>
      <div v-if='showLeftLine' class='e-legend-line e-legend-line-left'></div>
      <div v-if='$slots.title'><slot name='title'></slot></div>
      <div v-else>{{title}}</div>
      <div v-if='showRightLine' class='e-legend-line e-legend-line-right'></div>
    </div>
    <div class="e-legend-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      default: 'left'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showLeftLine: ['center', 'right'].indexOf(this.position) > -1,
      showRightLine: ['center', 'left'].indexOf(this.position) > -1
    }
  }
}
</script>
