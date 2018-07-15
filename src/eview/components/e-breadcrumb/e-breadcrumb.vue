<template>
  <div class="e-breadcrumb">
    <Breadcrumb :separator="separator">
      <Breadcrumb-item v-for='breadcrumb in breadcrumbs' :href="breadcrumb.href" :key='breadcrumb.href'>{{breadcrumb.content}}</Breadcrumb-item>
    </Breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      default: []
    },
    separator: {
      type: String,
      default: '/'
    }
  }
}
</script>
