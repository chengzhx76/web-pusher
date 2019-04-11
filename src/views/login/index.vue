<template>
  <div id="login" class="login-container">
    <div class="main">
      <div class="logo">
        <img src="http://pushbear.ftqq.com/static/pblogo.png" alt="logo">
        <h2 class="text">欢迎回来</h2>
      </div>
      <div class="qrcode">
        <img src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQH68DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyQm5PV05IQ2ZlNjAxeU9JTGhzMUwAAgSqJa9cAwQIBwAA" alt="qrcode">
        <h5 class="text">请用微信扫描二维码，关注后自动登入</h5>
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
  .login-container {
    height: calc(100% - 80px);
    width: 100%;
  }
  .main {
    @include height-width-scale-100;
    background: #fa4d5c;
    .logo {
      @include height-scale-width-scale-100(40%);
      @include justify-column-align-center;
      background: #656F7F;
      img {
        @include height-width-px(200);
      }
      .text {
        margin-top: 10px;
        font-size: 24px;
        font-weight: 100;
        color: white;
      }
    }
    .qrcode {
      @include height-scale-width-scale-100(60%);
      @include column-align-center;
      background: #F7F5F6;
      img {
        margin-top: 50px;
        @include height-width-px(180);
      }
      .text {
        margin-top: 20px;
        font-size: 18px;
        font-weight: normal;
        color: #828282;
      }
    }
  }

</style>
