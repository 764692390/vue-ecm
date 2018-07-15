<template>
  <div class='e-menu'>
    <Menu :active-name="_activeName" :theme="theme" width="auto" :open-names="openNames" @on-select='onSelect'>
      <div v-for='menu in menus'>

      <Menu-item v-if='!menu.children' :name='menu.name' :key='menu.name'>
        <Icon :type="menu.iconType"></Icon>
        <span class='e-menu-text'>{{menu.text}}</span>
      </Menu-item>

      <Submenu v-if='menu.children' :name='menu.name' :key='menu.name'>
        <template slot="title">
          <Icon :type="menu.iconType"></Icon>
          <span class='e-menu-text'>{{menu.text}}</span>
        </template>
        <Menu-item v-for='item in menu.children' :name='item.name' :key='menu.name'>
          <span class='e-menu-text'>{{item.text}}</span>
        </Menu-item>
      </Submenu>
      </div>
    </Menu>
  </div>
</template>
<script>

export default {
  props: {
    menus: {
      type: Array,
      default: []
    },
    activeName: {
      type: String
    },
    openNames: {
      type: Array,
      default: []
    },
    onSelect: {
      type: Function,
      default: function () {}
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    _activeName: function () {
      return this.activeName
    }
  }
}
</script>
