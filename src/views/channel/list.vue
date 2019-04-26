<template>
  <div id="list">
    <div class="title">
      <span class="text">还没有可用的通道呢，</span>
      <span class="add">新增通道</span>
    </div>
    <div class="channels">
      <div class="channel">
        <div class="name">产品1</div>
        <div class="key">sendKey：gQH68DwAAAAAAAAAAS5od</div>
      </div>
      <div class="channel">
        <div class="name">产品2</div>
        <div class="key">sendKey：gQH68DwAAAAAAAAAAS5od</div>
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
  #list {
    width: 100%;
    .title {
      @include height-px-width-scale(50, 100%);
      background: #EDF6FD;
      line-height: 50px;
      text-indent: 10px;
      font-size: 18px;
      border-bottom: 2px solid #D6EBFA;
      margin-bottom: 5px;
      .text {
        color: #43A3E5;
      }
      .add {
        color: #FF6C9D;
      }
    }
    .channels {
      min-height: 77px;
      .channel {
        @include height-px-width-scale(77, 100%);
        background: darkcyan;
        text-indent: 14px;
        margin-bottom: 6px;
        .name {
          @include height-px-width-scale(47, 100%);
          line-height: 44px;
          font-size: 24px;
        }
        .key {
          @include height-px-width-scale(30, 100%);
          line-height: 30px;
          .text {
            font-size: 14px;
          }
        }
      }
    }
  }

</style>
