<template>
  <div class="mb17">
      <div class="mobile-range-toast-ipt-box row">
        <img src="../../assets/list-icon.png" alt="" class="mobile-range-toast-icon" />
        <input type="number" class="mobile-range-toast-ipt" v-model="sliderNum" />
        <p class="mobile-range-toast-ipt-text">{{ sliderText }}</p>
      </div>
    <!-- 滑块 -->
    <div class="toast-range-box mt12">
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
.mobile-range-toast-icon {
  width: 22px;
  height: 22px;
}
.mobile-range-toast-ipt-box {
  
  padding: 6px 16px;
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  background: #10071B;
border: 1px solid #8032DD;
box-sizing: border-box;
  border-radius: 8px;
  position: relative;
}

.mobile-range-toast-ipt {
        width: 70%;
  margin-left: 12px;
  font-size: 15px;
  background: #000;
  outline: none;
  border: none;
  color: #fff;
}
.mobile-range-toast-ipt-text {
  flex-grow: 1;
  text-align: right;
  font-size: 20px;
}
.mt12 {
  margin-top: 12px;
}
.mb17{
    margin-bottom: 17px;
}
</style>