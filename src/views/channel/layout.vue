<template>
  <div id="channel-main">
    <div class="warp">
      <div class="header">通道设置</div>
      <div class="content">
        <router-view></router-view>
      </div>
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
  #channel-main {
    height: calc(100% - 60px);
    width: 100%;
    @include justify-center;
  }
  .warp {
    width: 70%;
  }
  .header {
    @include height-px-width-100(65);
    line-height: 65px;
    font-size: 22px;
  }
  .content {
    padding: 20px;
    background: #ffffff;
  }


</style>
