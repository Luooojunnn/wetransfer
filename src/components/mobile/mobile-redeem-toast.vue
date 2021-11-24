<template>
  <div class="toast-mask">
    <div class="mobile-toast-bg">
      <div class="mobile-close-box row flex-sp">
        <p class="f15">Redeem</p>
        <img
          src="../../assets/close.png"
          alt=""
          class="mobile-toast-close-img"
          @click="closeToast"
        />
      </div>
      <div class="mobile-redeem-toast-main">
        <div class="row line-text">
          <p>Assets</p>
          <p>0.001 BTC +1.3864 BUSD</p>
        </div>
        <p class="predeem-prpportion">Redeem Proportion</p>

        <div class="prpportion-ipt-box">
          <input
            v-model="prpportionSlider"
            type="text"
            class="prpportion-ipt"
          />
          <span class="prpportion-ipt-text">%</span>
        </div>
        <!-- 滑块 -->
        <div class="toast-range-box">
          <input
            type="range"
            min="0"
            max="100"
            step="0.01"
            v-model="prpportionSlider"
            class="toast-range-ipt"
          />
          <span style="left: 23%">25%</span>
          <span style="left: 47%">50%</span>
          <span style="left: 71%">75%</span>
          <span style="left: 90%">100%</span>
        </div>
        <!-- <el-slider v-model="prpportionSlider" :show-tooltip="false"></el-slider> -->
        <div class="mobile-wakuang-Optimum-wrap row">
          <span class="mobile-wakuang-Optimum">Select</span>
          <div class="mobile-wakuang-Optimum-item">
            <div>Optimum</div>
            <div>BTC</div>
            <div>BUSD</div>
          </div>
        </div>
        <div class="mobile-wakuang-available-tips2">
          <p class="gray-text">Price Impact : 0.3%</p>
        </div>
        <div class="row line-text" style="margin-bottom: 0.5625rem">
          <p>Expected to Redeem</p>
          <p>0.001 BTC +1.3864 BUSD</p>
        </div>
        <div class="row line-text">
          <p>Invesetd Asset</p>
          <p>0.001BTC</p>
        </div>
      </div>
      <div class="mobile-deposit-toast-btn">Confirm</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prpportionSlider: 0,
    };
  },
  mounted() {},
  methods: {
    closeToast() {
      this.$emit("closeToast");
    },
  },
};
</script>
<style scoped>
.mobile-toast-bg {
  height: 26rem;
  padding-top: 1.625rem;
}

.mobile-close-box {
  margin-bottom: 2.0625rem;
}
.mobile-redeem-toast-main {
  font-size: 0.625rem;
}
.mobile-redeem-toast-main .predeem-prpportion {
  margin-top: 0.5625rem;
  margin-bottom: 0.9375rem;
}
.mobile-redeem-toast-main .prpportion-ipt-box {
  width: 100%;
  height: 2.1875rem;
  position: relative;
  margin-bottom: 0.75rem;
}
.mobile-redeem-toast-main .prpportion-ipt {
  width: 100%;
  height: 2.1875rem;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #9439ff;
  border-radius: 0.5rem;
  padding-left: 0.9375rem;
  padding-right: 2.1875rem;
  box-sizing: border-box;
  background: rgba(148, 57, 255, 0.1);
  color: #fff;
  font-size: 0.9375rem;
}
.mobile-redeem-toast-main .prpportion-ipt-text {
  font-size: 1.25rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  margin-top: -0.625rem;
}
.mobile-wakuang-Optimum-wrap {
  margin-top: 1.5625rem;
}
.mobile-wakuang-Optimum {
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  width: 26%;
}
.mobile-wakuang-Optimum-item {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.mobile-wakuang-Optimum-item > div {
  font-size: 0.75rem;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 1rem;
  width: 4rem;
  height: 1.3125rem;
  line-height: 1.3125rem;
  text-align: center;
}
.wakuang-Optimum-item > div:hover {
  cursor: pointer;
}
.mobile-redeem-toast-main .line-text {
  justify-content: space-between;
}
.mobile-wakuang-available-tips2 {
  position: relative;
  font-family: Barlow Condensed;
  height: 0.625rem;
  margin-top: 0.5625rem;
  margin-bottom: 0.5625rem;
  line-height: 0.625rem;
}
.gray-text {
  text-align: right;
  transform: scale(0.8);
  right: -4%;
  white-space: nowrap;
  position: absolute;
}
.mobile-deposit-toast-btn {
  margin-top: 1.25rem;
}
</style>
<style>
.mobile-toast-bg .el-slider__runway {
  height: 0.25rem;
  background-color: #fdfbfe;
}
.mobile-toast-bg .el-slider__button {
  border-color: #592cbd;
}
.mobile-toast-bg .el-slider__button {
  background-color: #592cbd;
}
.mobile-toast-bg .el-slider__bar {
  background-color: #fdfbfe;
  height: 0.25rem;
}
</style>