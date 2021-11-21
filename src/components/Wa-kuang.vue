<template>
  <div id="Wa-kuang-wrap" class="toast-mask">
    <div class="toast-bg">
      <div class="Wa-kuang-toast-title">
        <span class="Wa-kuang-toast-title-desc">{{ title }}</span>
        <img
          src="../assets/close.png"
          alt=""
          class="Wa-kuang-toast-title-notice-img"
          @click="closeToast"
        />
      </div>
      <!-- 滑块 -->
      <range @getRangeNum="getRangeNum1" sliderText="BTC"></range>
      <range @getRangeNum="getRangeNum2" sliderText="BUSD"></range>
      <!--  -->
      <div class="wakuang-Leverage-wrap">
        <span class="wakuang-Leverage"> Leverage </span>
        <div class="wakuang-Leverage-slider">
          <el-slider v-model="value1" :step="25" :show-tooltip="false">
          </el-slider>
          <span style="left: 0">1X</span>
          <span style="left: 19%">1.5X</span>
          <span style="left: 46%">2X</span>
          <span style="left: 69%">2.5X</span>
          <span style="left: 92%">3X</span>
        </div>
      </div>

      <div class="wakuang-available-tips">
        <span>Remaining BTC/BUSD available:</span>
        <span>100.00231568 BTC</span>
      </div>

      <div class="wakuang-Optimum-wrap row">
        <span class="wakuang-Optimum">Borrow</span>
        <div class="wakuang-Optimum-item">
          <div>Optimum</div>
          <div>BTC</div>
          <div>BUSD</div>
        </div>
      </div>
      <div class="row flex-sp">
        <p>Debt</p>
        <p>0.15 BUSD</p>
      </div>
      <div class="row flex-sp mt6 mb20">
        <p>Risk Value</p>
        <div class="row wakuang-risk-right">
          <el-progress
            :text-inside="true"
            :stroke-width="22"
            :percentage="70"
          ></el-progress>
          <span>58052%</span
          ><img src="../assets/tip.png" alt="" class="wakuang-tip-img" />
        </div>
      </div>
      <div class="row flex-sp">
        <p>Total APR</p>
        <p class="row">
          <span class="wakuang-total-num purple-text">345.86%</span
          ><img src="../assets/tip.png" alt="" class="wakuang-tip-img" />
        </p>
      </div>
      <div class="row flex-sp mt6">
        <p>Total APY</p>
        <p>1605.89%</p>
      </div>
      <div class="wakuang-btns row flex-sp">
        <div class="wakuang-btn-item">Authorize BTC</div>
        <div class="wakuang-btn-item">Authorize BUSD</div>
      </div>
      <div class="deposit-toast-btn">Confirm 3x Farm</div>
    </div>
  </div>
</template>

<script>
import range from "./range";
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

<style>
#Wa-kuang-wrap {
  /* width: 490px;
  background: #000000;
  opacity: 0.9;
  border-radius: 20px; */

  /* box-sizing: border-box;
  padding: 20px 23px;
  width: 490px;
  background: #000000;
  opacity: 0.9;
  border-radius: 20px;
  margin: 119px auto; */
}
.toast-bg::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.toast-bg::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  background: #602c9b;
}
.toast-bg::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 0;
  background: #fff;
}
.toast-bg {
  height: 90%;
  padding-top: 54px;
  font-size: 18px;
  overflow-y: scroll;
  padding-bottom: 38px;
}
.Wa-kuang-toast-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  /* padding: 55px 28px 39px;  */
}
.Wa-kuang-toast-title-desc {
  width: 154px;
  font-size: 30px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  flex: 3;
}
.Wa-kuang-toast-title-notice-img {
  width: 28px;
  height: 28px;
  cursor: pointer;
}
.btc-change-wrap {
  text-align: center;
  font-size: 24px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px 0;
  background: url("../assets/bg.png") center center no-repeat;
  background-size: cover;
}
.wakuang-list-icon {
  width: 34px;
  height: 34px;
}
.wakuang-pool {
  font-size: 24px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.wakuang-last {
  /* width: 38px;
height: 22px; */
  font-size: 30px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.wakuang-change-ipt-wrap {
  padding: 6px 16px 10px;
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
  border-radius: 20px;
}
.wakuang-Leverage-slider {
  width: 318px;
  display: inline-block;
  position: relative;
}
.wakuang-Leverage-slider span {
  position: absolute;
  top: 30px;
}
.wakuang-available-tips {
  display: flex;
  justify-content: space-between;
  margin-top: 42px;
}
.wakuang-available-tips > span {
  font-size: 16px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
}
.wakuang-Optimum-wrap {
  display: flex;
  margin-top: 16px;
  margin-bottom: 26px;
}
.wakuang-Optimum,
.wakuang-Debt-Risk-num {
  font-size: 18px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.wakuang-Optimum {
  width: 26%;
}
.wakuang-Optimum-item {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.wakuang-Optimum-item > div {
  font-size: 18px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 16px;
  width: 91px;
  height: 41px;
  line-height: 41px;
  text-align: center;
}
.wakuang-Optimum-item > div:hover {
  cursor: pointer;
}
.mt6 {
  margin-top: 6px;
}
.mb20 {
  margin-bottom: 20px;
}
.wakuang-risk-right span {
  margin: 0 10px;
}
.wakuang-total-num {
  font-size: 24px;
  margin-right: 10px;
}
.wakuang-btns {
  margin-top: 42px;
  margin-bottom: 20px;
}
.wakuang-btn-item {
  width: 46%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 16px;
}
.deposit-toast-btn {
  position: static;
}
.wakuang-tip-img {
  width: 18px;
  height: 18px;
}
</style>
<style>
.el-progress-bar__inner {
  background-color: #00ff00;
}
.el-progress {
  width: 50px;
}
.el-slider__runway {
  height: 4px;
  background: #fff;
}
.el-slider__bar {
  height: 4px;
  background: #fff;
}
.el-slider__button {
  background: #592cbd;
  border-color: #592cbd;
}
</style>
