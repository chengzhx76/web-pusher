<template>
  <div id="login" class="login-container">
    <div class="main">
      dff
    </div>
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
  .login-container {
    height: calc(100% - 80px);
    width: 100%;
  }
  .main {
    @include height-width-scale-100;
    background: #fa4d5c;
  }

</style>
