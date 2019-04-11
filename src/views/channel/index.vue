<template>
  <div id="channel" class="channel-container">
    <div class="main">
      <div class="header">通道管理</div>
      <div class="content">
        <div class="channel-warp">
          <div class="tip">
            <span class="text">还没有可用的通道呢，</span>
            <span class="add">新增通道</span>
          </div>
          <div class="channels">
            <div class="channel">
              <div class="name">产品1</div>
              <div class="key">
                <span class="title">sendKey：</span>
                <span class="text">gQH68DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzA</span>
              </div>
            </div>
          </div>
        </div>
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
  .channel-container {
    height: calc(100% - 60px);
    width: 100%;
    background: #bdb76b;
  }
  .main {
    @include height-width-scale-100;
    background: #F7F5F6;
    @include column-align-center;
    .header {
      @include height-px-width-scale(60, 59%);
      line-height: 60px;
      font-size: 24px;
      color: #828282;
    }
    .content {
      min-height: 130px;
      width: 59%;
      @include justify-align-center;
      padding-top: 30px;
      padding-bottom: 30px;
      background: #ffffff;
      .channel-warp {
        width: calc(100% - 60px);
        .tip {
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
    }
  }

</style>
