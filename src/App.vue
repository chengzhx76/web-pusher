<template>
  <div id="app">
    <header class="header">
      <div class="sidebar">
        <div class="logo">Pusher</div>
        <div class="nav">登录</div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components:{
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "@/style/mixin.scss";
  @import "@/style/variables.scss";
  .header {
    @include height-px-width-100(80);
    @include justify-align-center;
    background: darkseagreen;
    .sidebar {
      @include height-scale-100-width-scale(80%);
      @include justify-space-between-align-center;
      background: darkkhaki;
      .logo {
        @include height-scale-100-width-px(120);
        @include text-center(80);
        font-size: 26px;
        color: #3D94FE;
        background: fuchsia;
      }
      .nav {
        @include height-scale-100-width-px(80);
        @include text-center(80);
      }
    }
  }

</style>
