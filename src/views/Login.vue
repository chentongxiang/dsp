<template>
  <div class="box">
    <div class="login">
      <div class="top">
        <div class="text">手机号:</div>
        <div class="input-box">
          <el-input
            class="phone"
            v-model="phone"
            resize="both"
            placeholder="请输入手机号"
          ></el-input>
          <div class="tip">
            {{ phoneTip }}
          </div>
        </div>
        <el-button
          type="primary"
          class="code-text"
          @click="validatePhone()"
          :disabled="disabled"
          >{{ btnTitle }}</el-button
        >
      </div>
      <div class="middle">
        <div class="text">验证码:</div>
        <div class="input-box">
          <el-input
            class="phone"
            v-model="code"
            placeholder="请输入验证码"
          ></el-input>
          <div class="tip">
            {{ codeTip }}
          </div>
        </div>

        <div type="primary" class="code-text"></div>
      </div>
      <div class="bottom">
        <el-button type="primary" class="login-button" @click="submitClick()"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import Qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      phoneTip: "",
      codeTip: "",
      phone: "",
      code: "",
      btnTitle: "获取验证码",
      disabled: false
    };
  },
  methods: {
    //点击登录
    submitClick() {
      console.log(this.phone);
      // 表单验证
      if (this.phone == "" || this.code == "") {
        if (this.phone == "") {
          this.phoneTip = "请输入手机号";
        } else if (this.code == "") {
          this.codeTip = "请输入验证码";
        }
      } else {
        this.phoneTip = "";
        this.codeTip = "";
        let data = {
          mobile: this.phone,
          code: parseInt(this.code)
        };
        this.$http
          .post(this.REAURL.mobileLogin, Qs.stringify(data), {})
          .then(res => {
            let data = res.data;
            if (data.code == 1) {
              alert("登录成功!");
              // setTimeout(() => {
              // }, 3000);
              this.$router.push("/index");
            } else {
              alert(data.msg);
            }
          });
      }
    },
    validatePhone() {
      //判断输入的手机号是否合法
      if (!this.phone) {
        this.phoneTip = "手机号码不能为空";
        // return false
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.phoneTip = "请输入正确是手机号";
        // return false
      } else {
        this.phoneTip = "";
        this.validateBtn();
        return true;
      }
    },
    validateBtn() {
      this.disabled = true;
      //倒计时
      let data = {
        mobile: this.phone,
        event: "mobilelogin" //登录事件
      };
      (() => {
        let time = 10;
        let timer = setInterval(() => {
          if (time == 0) {
            clearInterval(timer);
            this.disabled = false;
            this.btnTitle = "获取验证码";
          } else {
            this.btnTitle = time + "秒后重试";
            this.disabled = true;
            time--;
          }
        }, 1000);
      })();
      this.$http
        .post(this.REAURL.getCodeUrl, Qs.stringify(data), {})
        .then(res => {
          let data = res.data;
          if (data.code == 1) {
            console.log(1423);
          } else {
            alert(data.msg);
            this.disabled = false;
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  // border:1px solid black;
  background-image: url("../assets/image/login_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  padding-top: 150px;
  .login {
    width: 550px;
    height: 220px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.3);
    .top {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      .text {
        width: 100px;
        height: 50px;
        // border:1px solid red;
        text-align: center;
        line-height: 50px;
        color: #fff;
      }
      .input-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .phone {
          width: 300px;
          height: 50px;
          line-height: 70px;
          // border: 1px solid red;
        }
        .tip {
          width: 300px;
          height: 20px;
          margin-top: 7px;
          color: red;
          // border: 1px solid red;
        }
      }

      .code-text {
        width: 110px;
        height: 40px;
        // border:1px solid red;
      }
    }
    .middle {
      .top;
    }
    .bottom {
      width: 160px;
      height: 40px;
      margin: 0 auto;
      margin-top: 20px;
      // border:1px solid red;
      display: flex;
      justify-content: center;
      .login-button {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
