<template>
  <div class="toast-mask">
    <div class="mobile-toast-bg">
      <div class="mobile-wakuang-toast-title row flex-sp">
        <span class="f15 fw">{{ title }}</span>
        <img
          src="../../assets/close.png"
          alt=""
          class="mobile-wakuang-toast-close"
          @click="closeToast"
        />
      </div>
      <!-- 滑块 -->
      <range @getRangeNum="getRangeNum1" sliderText="BTC"></range>
      <range @getRangeNum="getRangeNum2" sliderText="BUSD"></range>
      <!--  -->
      <div class="wakuang-Leverage-wrap">
        <span class="wakuang-Leverage"> Leverage </span>
        <div class="mobile-wakuang-Leverage-slider">
          <el-slider v-model="value1" :step="25" :show-tooltip="false">
          </el-slider>
          <span style="left: 0">1X</span>
          <span style="left: 19%">1.5X</span>
          <span style="left: 46%">2X</span>
          <span style="left: 69%">2.5X</span>
          <span style="left: 92%">3X</span>
        </div>
      </div>

      <div class="mobile-wakuang-available-tips">
        <span>Remaining BTC/BUSD available:</span>
        <span>100.00231568 BTC</span>
      </div>

      <div class="mobile-wakuang-Optimum-wrap row">
        <span class="mobile-wakuang-Optimum">Borrow</span>
        <div class="mobile-wakuang-Optimum-item">
          <div>Optimum</div>
          <div>BTC</div>
          <div>BUSD</div>
        </div>
      </div>
      <div class="mobile-wakuang-available-tips2">
        <span>Price Impact : 0.3%</span>
      </div>
      <div class="row flex-sp mb47">
        <p style="width: 36%">Converted into</p>
        <div class="mobile-conver-btn">0 BTC + 0BUSD</div>
      </div>
      <div class="row flex-sp">
        <p>Debt</p>
        <p>0.15 BUSD</p>
      </div>
      <div class="row flex-sp mt6 mb20">
        <p>Risk Value</p>
        <div class="row mobile-wakuang-risk-right">
          <el-progress
            :text-inside="true"
            :stroke-width="11"
            :percentage="70"
          ></el-progress>
          <span>58052%</span
          ><img
            src="../../assets/tip.png"
            alt=""
            class="mobile-wakuang-tip-img"
          />
        </div>
      </div>
      <div class="row flex-sp">
        <p>Total APR</p>
        <p class="row">
          <span class="mobile-wakuang-total-num purple-text">345.86%</span
          ><img
            src="../../assets/tip.png"
            alt=""
            class="mobile-wakuang-tip-img"
          />
        </p>
      </div>
      <div class="row flex-sp mt6">
        <p>Total APY</p>
        <p>1605.89%</p>
      </div>
      <div class="mobile-wakuang-btns row flex-sp">
        <div class="wakuang-btn-item">Authorize BTC</div>
        <div class="wakuang-btn-item">Authorize BUSD</div>
      </div>
      <div class="mobile-deposit-toast-btn">Confirm 3x Farm</div>
    </div>
  </div>
</template>

<script>
import range from "./mobile-range";
export default {
  components: {
    range,
  },
  data() {
    return {
      title: "BTC/BUSD",
      value1: 0,
      value2: 0,
    };
  },
  methods: {
    closeToast() {
      this.$emit("closeToast");
    },
    // 获取滑块数据
    getRangeNum1(num) {
      console.log(num);
    },
    // 获取滑块数据
    getRangeNum2(num) {
      console.log(num);
    },
  },
};
</script>
<style scoped>
.mobile-toast-bg {
  height: 90%;
  padding-top: 1.625rem;
  font-size: 0.625rem;
  overflow-y: scroll;
  padding-bottom: 4rem;
}
.mobile-toast-bg::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0.25rem; /*高宽分别对应横竖滚动条的尺寸*/
  height: 0.25rem;
}
.mobile-toast-bg::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 0.3125rem;
  background: #602c9b;
}
.mobile-toast-bg::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 0;
  background: #000;
}
</style>
<style scoped>
.mobile-wakuang-toast-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.625rem;
  /* padding: 3.4375rem 1.75rem 2.4375rem;  */
}

.mobile-wakuang-toast-close {
  width: 1.1875rem;
  height: 1.1875rem;
  cursor: pointer;
}
.btc-change-wrap {
  text-align: center;
  font-size: 1.5rem;
  justify-content: space-between;
  margin-bottom: 0.625rem;
  padding: 1.25rem 0;
  background: url("../../assets/bg.png") center center no-repeat;
  background-size: cover;
}
.wakuang-list-icon {
  width: 2.125rem;
  height: 2.125rem;
}
.wakuang-pool {
  font-size: 1.5rem;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.wakuang-last {
  /* width: 2.375rem;
height: 1.375rem; */
  font-size: 1.875rem;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.wakuang-change-ipt-wrap {
  padding: 0.375rem 1rem 0.625rem;
}
.wakuang-btc-wrap {
  border: none;
  background: none;
  color: #fff;
}
.wakuang-Leverage-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wakuang-Leverage {
  background: #000000;
  opacity: 0.9;
  border-radius: 1.25rem;
}
.mobile-wakuang-Leverage-slider {
  width: 12rem;
  display: inline-block;
  position: relative;
}
.mobile-wakuang-Leverage-slider span {
  position: absolute;
  top: 1.6875rem;
}
.mobile-wakuang-available-tips {
  display: flex;
  justify-content: space-between;
  margin-top: 0.9375rem;
  height: 0.625rem;
  white-space: nowrap;
  position: relative;
}
.mobile-wakuang-available-tips > span {
  font-size: 0.75rem;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  transform: scale(0.8);
  position: absolute;
  left: -6%;
}
.mobile-wakuang-available-tips > span:last-child {
  left: 67%;
}
.mobile-wakuang-available-tips2 {
  position: relative;
  font-size: 0.75rem;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  height: 0.625rem;
  margin-bottom: 0.5625rem;
}
.mobile-wakuang-available-tips2 > span {
  right: -4%;
  white-space: nowrap;
  transform: scale(0.8);
  position: absolute;
}
.mobile-wakuang-Optimum-wrap {
  display: flex;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}
.mobile-wakuang-Optimum,
.wakuang-Debt-Risk-num {
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.mobile-wakuang-Optimum {
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
  border: 0.0625rem solid #9439ff;
  border-radius: 1rem;
  width: 4rem;
  height: 1.3125rem;
  line-height: 1.3125rem;
  text-align: center;
}
.mobile-wakuang-Optimum-item > div:hover {
  cursor: pointer;
}
.mt6 {
  margin-top: 0.375rem;
}
.mb20 {
  margin-bottom: 1.25rem;
}
.mobile-wakuang-risk-right span {
  margin: 0 0.25rem 0 0.4375rem;
}
.mobile-wakuang-total-num {
  font-size: 0.8125rem;
  margin-right: 0.25rem;
}
.mobile-wakuang-btns {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.wakuang-btn-item {
  width: 46%;
  height: 1.8125rem;
  line-height: 1.8125rem;
  text-align: center;
  font-size: 0.9375rem;
  background: rgba(148, 57, 255, 0.1);
  border: 0.0625rem solid #9439ff;
  border-radius: 0.5rem;
}

.mobile-deposit-toast-btn {
  position: static;
  width: 100%;
  height: 1.8125rem;
  text-align: center;
  line-height: 1.8125rem;
  border: 0.0625rem solid #9439ff;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
}

.mobile-wakuang-tip-img {
  width: 0.625rem;
  height: 0.625rem;
}
.mobile-conver-btn {
  flex-grow: 1;
  height: 1.25rem;
  background: #10071b;
  border: 0.0625rem solid #8032dd;
  text-align: center;
  line-height: 1.25rem;
  border-radius: 0.625rem;
}
.mb47 {
  margin-bottom: 2.9375rem;
}
</style>
<style scoped>
.el-progress-bar__inner {
  background-color: #00ff00;
}
.mobile-toast-bg .el-progress {
  width: 1.5625rem;
}
.mobile-toast-bg .el-slider__runway {
  height: 0.0625rem;
  background: #fff;
}
.mobile-toast-bg .el-slider__bar {
  height: 0.0625rem;
  background: #fff;
}
.el-slider__button {
  background: #592cbd;
  border-color: #592cbd;
}
.mobile-toast-bg .el-slider__button {
  width: 0.375rem;
  height: 0.375rem;
}
.mobile-toast-bg .el-slider__button-wrapper{
    top: -18px;
}
</style>
