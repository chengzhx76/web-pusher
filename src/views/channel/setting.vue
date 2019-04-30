<template>
  <div id="setting">
    <div class="base">
      <div class="title">基本信息</div>
      <form class="info">
        <div class="input">
          <label for="name">通道名字</label>
          <input type="text" id="name">
        </div>
        <div class="input">
          <label for="email">联系邮箱</label>
          <input type="text" id="email">
        </div>
      </form>
      <div class="button-group">
        <button class="submit"></button>
      </div>
    </div>
    <div class="qrcode">
      <div class="title">订阅二维码</div>
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
  #setting {
    width: 100%;
  }
  .title {
    @include height-px-width-100(36);
    line-height: 36px;
    font-size: 18px;
    color: #E5649C;
    text-indent: 8px;
    font-weight: bold;
    background: #F7F5F6;
  }
  .base {
    .info {
      width: 100%;
      .input {
        @include height-px-width-100(55);
        margin-top: 3px;
        label {
          @include height-px-width-100(29);
          display: block;
          line-height: 40px;
          text-indent: 5px;
        }
        input {
          @include height-px-width-100(25);
          display: block;
          text-indent: 5px;
          line-height: 35px;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 1px solid #cccccc;
        }
      }
    }
  }


</style>
