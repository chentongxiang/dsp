<template>
  <div class="text_group">
    <div class="input_group" :class="{ 'is-invalid': error }">
      <!-- 输入框 -->
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :name="name"
        @input="$emit('input', $event.target.value)"
      />
      <!-- 输入框后面的内容 -->
      <button v-if="btnTitle" @click="$emit('btnClick')" :disabled="disabled">
        {{ btnTitle }}
      </button>
    </div>
    <!-- 验证提示 -->
    <div v-if="error" class="invalid-feedback">{{ error }}</div>
  </div>
</template>
<script>
export default {
  name: "InputGroup",
  // props: {
  //   type: {
  //     type: String,
  //     default: "text"
  //   },
  //   placeholder: String,
  //   value: String,
  //   name: String,
  //   disabled: Boolean,
  //   btnTitle: String, //input框中的文字
  //   error: String //验证不正确提示
  // }
  props: [
    "type",
    "placeholder",
    "value",
    "name",
    "disabled",
    "btnTitle", //input框中的文字
    "error" //验证不正确提示
  ]
};
</script>
<style lang="less" scoped>
.text_group {
  width: 500px;
  height: 200px;
  border:1px solid blue;
  .input_group {
    width: 400px;
    height: 100px;
  }
  input{
    width: 400px;
    height: 100px;
  }
}
</style>
