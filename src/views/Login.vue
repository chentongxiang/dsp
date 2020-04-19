<template>
  <div class="box">
    <div class="login">
        <div class="top">
            <div class="text">注册手机号:</div>
            <el-input class="phone" v-model="input" resize="both" placeholder="请输入内容"></el-input>
            <!-- <input v-model="input" placeholder="请输入手机号码" type="" class="phone"> -->
            <el-button type="primary" class="code-text">获取验证码</el-button>
        </div>
        <div class="middle">
            <div class="text">验证码:</div>
            <el-input class="phone" v-model="input" placeholder="请输入验证码" ></el-input>
            <div type="primary" class="code-text"></div>
        </div>
        <div class="bottom">
            <el-button type="primary" class="login-button">登录</el-button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      checked: true
    };
  },
  methods: {
    submitClick(formName) {
        // 表单验证
        this.$refs[formName].validate(valid => {
            if(valid) {
                alert('提交成功！')
            } else {
                console.log("error submit！")
                return false
            }
        })
    }
  }
};
</script>
<style lang="less" scoped>
.box{
    width:100%;
    height:100%;
    // border:1px solid black;
    overflow: hidden;
    .login{
        width:550px;
        height:210px;
        border:1px solid black;
        border-radius: 5px;
        margin:0 auto;
        margin-top:10%;  
        .top{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top:20px;
            .text{
                width:100px;
                height:50px;
                // border:1px solid red;
                text-align: center;
                line-height: 50px;
            }
            .phone{
                width:300px;
                height:50px;
                // border:1px solid red;
            }
            .code-text{
                width:110px;
                height:50px;
                // border:1px solid red;
            }
        }  
        .middle{
            .top;
        }
        .bottom{
            width:160px;
            height:40px;
            margin:0 auto;
            margin-top:10px;
            // border:1px solid red;
            display: flex;
            justify-content: center;
            .login-button{
                width:100%;
                height:100%;
            }
        }
    
    }
}
</style>

