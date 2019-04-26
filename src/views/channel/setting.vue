<template>
  <div id="setting">
    <div class="title">还没有可用的通道呢</div>
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
  #setting {
    height: calc(100% - 60px);
    width: 100%;
  }


</style>
