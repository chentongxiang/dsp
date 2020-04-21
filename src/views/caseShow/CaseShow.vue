<template>
  <div class="box">
    <div class="top">
      <el-button type="info" class="info">信息按钮</el-button>
    </div>
    <div class="middle">
      <div class="middle-box">
        <div class="left">
          <div class="type">行业:</div>
          <div class="type">区域:</div>
          <div class="type">类型:</div>
        </div>
        <div class="right">
          <div class="data">全部 xx</div>
          <div class="data">全部 xx</div>
          <div class="data">视频广告 图片广告 启动页广告</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-box">
        <div class="img"></div>
        <div class="text"></div>
      </div>
      <div class="bottom-box">
        <div class="img"></div>
        <div class="text">广告标题</div>
      </div>
      <div class="bottom-box">
        <div class="img"></div>
        <div class="text">广告标题</div>
      </div>
    </div>
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
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  // border: 1px solid red ;
  .top {
    width: 100%;
    height: 50px;
    background: #d7d7d7;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .info {
      margin-right: 50px;
    }
  }
  .middle {
    width: 100%;
    height: 200px;
    .middle-box {
      width: 90%;
      height: 150px;
      margin: 0 auto;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 10%;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        line-height: 50px;
        .type {
          width: 100%;
          height: 50px;
        }
      }
      .right {
        width: 90%;
        height: 150px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: start;
        line-height: 50px;
        .data {
          width: 100%;
          height: 50px;
          border: 1px solid black;
          padding-left: 30px;
        }
      }
    }
  }
  .bottom {
    width: 80%;
    height: 300px;
    margin: 0 auto;
    margin-top: 40px;
    // border:1px solid red;
    overflow-y: scroll;
    display: flex;
    justify-content: space-between;
    .bottom-box {
      width: 300px;
      height: 200px;
      // border:1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .img {
        width: 200px;
        height: 160px;
        border: 1px solid black;
        background-image: url("../../assets/image/u4.svg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
      .text {
        width: 200px;
        height: 40px;
        text-align: center;
      }
    }
  }
}
</style>
