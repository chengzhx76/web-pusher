<template>
  <div id="app">
    <header class="header">
      <div class="sidebar">
        <div class="logo">Pusher</div>
        <div class="nav">退出</div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "@/style/mixin.scss";
  @import "@/style/variables.scss";
  #app {
    background: #F7F5F6;
  }
  .header {
    @include height-px-width-100(60);
    @include justify-align-center;
    background: darkseagreen;
    .sidebar {
      @include height-scale-100-width-scale(60%);
      @include justify-space-between-align-center;
      background: darkkhaki;
      .logo {
        @include height-scale-100-width-px(120);
        @include text-center(60);
        font-size: 26px;
        color: #3D94FE;
        background: fuchsia;
      }
      .nav {
        @include height-scale-100-width-px(60);
        @include text-center(60);
      }
    }
  }

</style>
