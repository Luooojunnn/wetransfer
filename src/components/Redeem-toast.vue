<template>
  <div class="toast-mask">
    <div class="toast-bg">
      <div class="close-box row">
        <p>Redeem</p>
        <img
          src="../assets/close.png"
          alt=""
          class="toast-close-img"
          @click="closeToast"
        />
      </div>
      <div class="redeem-toast-main">
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
        <div class="wakuang-Optimum-wrap row">
          <span class="wakuang-Optimum">Select</span>
          <div class="wakuang-Optimum-item">
            <div>Optimum</div>
            <div>BTC</div>
            <div>BUSD</div>
          </div>
        </div>
        <p class="gray-text">Price Impact : 0.3%</p>
        <div class="row line-text" style="margin-bottom: 22px">
          <p>Expected to Redeem</p>
          <p>0.001 BTC +1.3864 BUSD</p>
        </div>
        <div class="row line-text">
          <p>Invesetd Asset</p>
          <p>0.001BTC</p>
        </div>
      </div>
      <div class="deposit-toast-btn">Confirm</div>
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
.toast-bg {
  height: 600px;
  padding-top: 26px;
}
.close-box {
  justify-content: space-between;
  margin-bottom: 60px;
}
.close-box p {
  font-size: 30px;
}
.redeem-toast-main {
  font-size: 18px;
}
.redeem-toast-main .predeem-prpportion {
  margin-top: 26px;
  margin-bottom: 18px;
}
.redeem-toast-main .prpportion-ipt-box {
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 20px;
}
.redeem-toast-main .prpportion-ipt {
  width: 100%;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #9439ff;
  border-radius: 20px;
  padding-left: 28px;
  padding-right: 62px;
  box-sizing: border-box;
  background: rgba(148, 57, 255, 0.1);
  color: #fff;
}
.redeem-toast-main .prpportion-ipt-text {
  font-size: 22px;
  position: absolute;
  right: 40px;
  top: 50%;
  margin-top: -11px;
}
.wakuang-Optimum-wrap {
  margin-top: 30px;
}
.wakuang-Optimum {
  font-size: 18px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
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
.wakuang-Optimum-item > div:hover{
  cursor: pointer;
}
.redeem-toast-main .line-text {
  justify-content: space-between;
}
</style>
<style>
.el-slider__runway {
  height: 4px;
  background-color: #fdfbfe;
}
.el-slider__button {
  border-color: #592cbd;
}
.el-slider__button {
  background-color: #592cbd;
}
.el-slider__bar {
  background-color: #fdfbfe;
  height: 4px;
}
.gray-text {
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: right;
}
</style>