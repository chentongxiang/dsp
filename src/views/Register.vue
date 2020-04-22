/* eslint-disable prettier/prettier */
<template>
  <div class="box">
    <div class="header">
      <!-- <el-button type="primary" class="register">注册</el-button> -->
      <el-button type="success" class="login" @click="register()"
        >登录</el-button
      >
    </div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
      :rules="rules"
      ref="formLabelAlign"
      class="form-box"
    >
      <div class="title">个人信息</div>
      <div class="form-top">
        <div class="info-left">
          <el-form-item label="联系人" prop="name">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="公司名称" prop="company">
            <el-input v-model="formLabelAlign.company"></el-input>
          </el-form-item>
        </div>
        <div class="info-right">
          <div class="radio-box" prop="radio">
            <el-radio v-model="formLabelAlign.radio" label="1">男</el-radio>
            <el-radio v-model="formLabelAlign.radio" label="0">女</el-radio>
          </div>
          <el-form-item label="职务" class="duty" prop="duty">
            <el-input v-model="formLabelAlign.duty"></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="title">联系方式</div>
      <div class="form-bottom">
        <div class="info-left">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="formLabelAlign.phone"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="formLabelAlign.code"></el-input>
          </el-form-item>
        </div>
        <div class="info-right">
          <el-button
            type="success"
            class="login"
            @click="validateBtn()"
            :disabled="disabled"
            >{{ btnTitle }}</el-button
          >
        </div>
      </div>
      <div class="button-box">
        <el-button
          type="primary"
          class="reg-button"
          @click="submitForm('formLabelAlign')"
          >注册</el-button
        >
      </div>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";

export default {
  data() {
    var checkNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不能为空"));
        this.disabled = true;
      } else {
        if (!/^1[345678]\d{9}$/.test(value)) {
          callback(new Error("请输入正确的手机号"));
          this.disabled = true;
        } else {
          callback();
          setTimeout(() => {
            this.disabled = false;
          }, 500);
        }
      }
    };
    var checkName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("姓名不能为空"));
        this.disabled = true;
      } else {
        if (!/^[\u4e00-\u9fa5]+$/i.test(value)) {
          callback(new Error("姓名只能是纯汉字"));
          this.disabled = true;
        } else {
          callback();
          setTimeout(() => {
            this.disabled = false;
          }, 500);
        }
      }
    };
    return {
      btnTitle: "获取验证码",
      disabled: true,
      formLabelAlign: {
        name: "",
        company: "",
        radio: "1",
        duty: "",
        phone: "",
        code: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          },
          { validator: checkName, trigger: "blur" }
        ],
        company: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur"
          },
          { validator: checkName, trigger: "blur" }
        ],
        duty: [
          { required: true, message: "请输入您在公司的职务", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur"
          },
          { validator: checkName, trigger: "blur" }
        ],
        phone: [
          // { required: true, message: "请输入您在公司的职务", trigger: "blur" },
          // { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
          { validator: checkNumber, trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    register() {
      this.$router.push("/login");
    },
    validateBtn() {
      this.disabled = true;
      let data = {
        mobile: this.formLabelAlign.phone
      };
      axios
        .post(this.REAURL.getCodeUrl, Qs.stringify(data), {})
        .then(res => {
          console.log(res);
          let data = res.data;
          if (data.code == 1) {
            let time = 5;
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
          } else if (data.code == 0) {
            alert(data.msg);
            this.disabled = false;
          }
        })
        .catch(res => {
          if (res) {
            alert("网页出错，请稍后再试");
          }
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            contacts: this.formLabelAlign.name,
            company_name: this.formLabelAlign.company,
            position: this.formLabelAlign.duty,
            gender: parseInt(this.formLabelAlign.radio),
            mobile: this.formLabelAlign.phone,
            code: this.formLabelAlign.code
          };
          console.log(this.REAURL.register);
          axios.post(this.REAURL.register, Qs.stringify(data), {}).then(res => {
            let data = res.data;
            if (data.code == 1) {
              alert("注册成功!3秒后跳转到登录页。");
              setTimeout(() => {
                this.$router.push("/login");
              }, 3000);
            } else {
              alert(data.msg);
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-image: url("../assets/image/login_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;

  .header {
    width: 100%;
    height: 60p;
    background: #d7d7d7;
    display: flex;
    justify-content: flex-end;
    // border:1px solid black;
    .login {
      margin-right: 30px;
    }
  }

  .form-box {
    width: 70%;
    height: 500px;
    border: 1px solid black;
    overflow: hidden;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 40px;
    .title {
      width: 100%;
      height: 50px;
      padding-left: 30px;
      line-height: 50px;
      font-size: 28px;
      font-weight: bold;
    }
    .form-top {
      width: 100%;
      height: 170px;
      display: flex;
      justify-content: space-between;
      // border: 1px solid red;
      .info-left {
        width: 49%;
        padding-top: 30px;
      }
      .info-right {
        width: 49%;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .duty {
          width: 90%;
          margin-left: -30px;
        }
      }
    }
    .form-bottom {
      width: 100%;
      height: 170px;
      display: flex;
      justify-content: start;
      // border: 1px solid red;
      .info-left {
        width: 49%;
        padding-top: 30px;
      }
      .info-right {
        width: 49%;
        padding-top: 30px;
        padding-left: 30px;
        .duty {
          width: 90%;
        }
      }
    }
    .button-box {
      width: 150px;
      height: 50px;
      margin: 0 auto;
    }
  }
}
</style>
