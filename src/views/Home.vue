<template>
  <div class="box">
    <div class="top">
      <el-button type="primary" class="login" @click="register()">注册</el-button>
      <el-button type="success" class="register" @click="login()">登录</el-button>
    </div>
    <div class="middle"></div>
  </div>
</template>
<script>
export default {
  beforeCreate() {},
  mounted() {
    // this.setRemSize();
  },
  data() {
    return {
      msg: "hello Vue",
      fontSizeNum: ""
    };
  },
  methods: {
    setRemSize() {
      this.fontSizeNum = (document.documentElement.clientWidth / 1920) * 100;
      document.documentElement.style.fontSize = this.fontSizeNum + "px";
    },
    login(){
      this.$router.push("/login");
    },
    register(){
      this.$router.push("/register");
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  width:100%;
  height:100%;
  
  .top {
    width: 100%;
    height: 60px;
    background: #d7d7d7;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .register {
      margin-right: 50px;
      width: 150px;
      height: 40px;
    }
    .login {
      width: 150px;
      height: 40px;
    }
  }
  .middle {
    width: 100%;
    height: calc(100% - 60px);
    // background: #0193C2;
    background-image: url("../assets/image/u4.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }
}
</style>
