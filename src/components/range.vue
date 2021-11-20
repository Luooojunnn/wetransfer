<template>
  <div class="mb36">
    <div class="range-toast-ipt-border">
      <div class="range-toast-ipt-box row">
        <img src="../assets/list-icon.png" alt="" class="range-toast-icon" />
        <input type="text" class="range-toast-ipt" v-model="sliderNum" />
        <p class="range-toast-ipt-text">{{ sliderText }}</p>
      </div>
    </div>
    <!-- 滑块 -->
    <div class="toast-range-box mt20">
      <input
        type="range"
        min="0"
        max="100"
        step="0.01"
        v-model="sliderNum"
        class="toast-range-ipt"
      />
      <span style="left: 23%">25%</span>
      <span style="left: 47%">50%</span>
      <span style="left: 71%">75%</span>
      <span style="left: 90%">100%</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderNum: 0,
    };
  },
  props: ["sliderText"],
  watch: {
    sliderNum: {
      handler() {
        this.$emit("getRangeNum", this.sliderNum);
      },
      immediate: true,
    },
  },
};
</script>
<style>
.range-toast-icon {
  width: 34px;
  height: 34px;
}
.range-toast-ipt-box {
  width: calc(100% - 2px);
  height: 48px;
  background: #000;
  border-radius: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 6px 20px 10px 16px;
  box-sizing: border-box;
}
.range-toast-ipt-border {
  width: 100%;
  height: 50px;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 30px;
  position: relative;
}
.range-toast-ipt {
  margin-left: 32px;
  font-size: 24px;
  background: #000;
  outline: none;
  border: none;
  color: #fff;
}
.range-toast-ipt-text {
  flex-grow: 1;
  text-align: right;
  font-size: 30px;
}
.mt20 {
  margin-top: 20px;
}
.mb36{
    margin-bottom: 36px;
}
</style>