<template>
  <button class="vue-button"><slot></slot></button>
</template>
<script>
export default {
  name: "VueButton"
};
</script>
<style lang="less" scoped>
.vue-button {
  height: 50px;
  width: 120px;
  background: #4269e1;
  color: #fff;
}
</style>

