<template>
  <div id="login" class="login-container">
    <header class="header">
      <div class="sidebar">
        <div class="logo"></div>
        <div class="nav">ddd</div>
      </div>
    </header>


  </div>
</template>

<script>

  export default {
    name: 'login',
    components:{
    },
    data() {
      return {
        uid: ''
      }
    },
    methods: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
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
      background: darkkhaki;
    }
  }

</style>
