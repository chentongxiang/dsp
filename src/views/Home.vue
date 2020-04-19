<template>
  <div class="box">
    <div class="top">
          <el-button type="primary" class="login">注册</el-button>
          <el-button type="success" class="register">登录</el-button>
    </div>
      <div class="middle">
         
      </div>
      <div class="bottom">
      </div>
  </div>
</template>
<script>

export default {
   beforeCreate() {
    },
    mounted() {
        // this.setRemSize();
    },
    data () {
        return {
            msg: 'hello Vue',
            fontSizeNum:"",
        }
    },
    methods: {
        setRemSize(){
          this.fontSizeNum = document.documentElement.clientWidth / 1920 * 100;
          document.documentElement.style.fontSize = this.fontSizeNum + "px";
        }
    }
};
</script>
<style lang="less" scoped>
  .box{
    .top{
      width: 100%;
      height: 60px;
      background: #D7D7D7;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .register{
        margin-right:50px;
        width:150px;
        height:40px;
      }
      .login{
        width:150px;
        height:40px;
      }
    }
    .middle{
      width: 100%;
      height: 500px;
      // background: #0193C2;
      background-image: url("../assets/image/u4.svg");
      background-repeat: no-repeat;
      background-size:100% 100%;
      background-position:center;
      
    }
    .bottom{
     
    }
  }
</style>