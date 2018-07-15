<template>
  <div id="app-container">
    <e-layout :theme='theme'>
      <template slot='logo'>
        <router-link to='/'>
          <img :src='"./assets/img/logo-" + theme + ".png"' />
        </router-link>
      </template>
      <e-menu slot='menu' :menus='menu.list' :openNames='menu.openNames' :activeName='menu.activeName' :onSelect='onMenuSelect' :theme='theme'>
      </e-menu>
      <div slot='header-right'>
        <div class="change-btn">
          <Radio-group v-model="theme" type="button" @on-change="changeTheme">
            <Radio label="light">白色</Radio>
            <Radio label="dark">黑色</Radio>
          </Radio-group>
        </div>
        <Dropdown slot='header-right' placement="bottom-end" @on-click='onUserClick'>
          <span class="uesr-sp">{{user.username}}
            <img v-bind:src='user.logo' class="login-pic" />
            <Icon type="ios-arrow-down"></Icon>
          </span>
          <Dropdown-menu slot="list">
            <Dropdown-item name='logout'>退出登录</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </div>
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </e-layout>
  </div>
</template>

<script>
import { ELayout, EMenu } from "./eview";
import { menu } from "./config";
import Cookie from "js-cookie";
export default {
  name: "app",
  components: {
    ELayout,
    EMenu
  },
  data() {
    return {
      menu,
      theme: "", // 页面主题
      user: {
        username: Cookie.get("ecm_display_name") || "默认账号",
        logo: Cookie.get("ecm_avatar") || require("./assets/img/default_header.png")
      }
    };
  },
  created() {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    this.theme = localStorage.getItem("theme");
  },
  watch: {
    $route: function(to, from) {
      this.setActiveName(to.path);
    }
  },
  mounted() {
    
  },
  methods: {
    changeTheme(theme) {
      this.theme = theme;
      localStorage.setItem("theme", theme);
    },
    onMenuSelect: function(path) {
      this.$router.push(path);
    },
    setActiveName(path) {
      const matched = path.match(/(\/[\w\-_]+)/g);
      if (matched) {
        this.menu.activeName = path;
      } else {
        this.menu.activeName = "/";
      }
    },
    onUserClick(name) {
      switch (name) {
        case "logout": {
          Cookie.remove("ecm_display_name");
          Cookie.remove("ecm_avatar");
          // location.href = api.ecm.logout + "?jumpto=" + encodeURIComponent(location.href);
          break;
        }
        default:
          break;
      }
    }
  }
};
</script>

<style lang='less' scoped>
#app-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.e-layout .e-layout-header {
  line-height: 50px;
}

.login-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}

.e-layout .e-layout-header .header-right .ivu-dropdown {
  margin-top: 0;
}

.change-btn {
  display: block;
  float: left;
  margin-top: 10px;
}

.uesr-sp {
  display: inline-block;
  margin-left: 15px;
  margin-top: 5px;
}

.uesr-sp img {
  margin: 0 5px;
}
</style>