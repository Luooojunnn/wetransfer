<template>
  <div class="toast-mask">
    <div class="toast-bg">
      <div class="close-box row">
        <p>Repay</p>
        <img
          src="../assets/close.png"
          alt=""
          class="toast-close-img"
          @click="closeToast"
        />
      </div>
      <!-- 滑块 -->
      <range @getRangeNum="getRangeNum" sliderText="BTC"></range>
      <!--  -->
  
      <div class="row line-text flex-sp">
        <p>Debts</p>
        <p style="text-decoration: line-through">0.003 BTC </p>
      </div>
      <div class="row line-text flex-sp">
        <p>Updated Debts</p>
        <p>0.001BTC </p>
      </div>
      <div class="row line-text flex-sp">
        <p>Updated Risk Value </p>
        <div class="row add-risk">
          <p style="text-decoration: line-through">70.52%</p>
          <p>→</p>
          <p>58.52%</p>
        </div>
      </div>
      <div class="deposit-toast-btn">Confirm</div>
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
    return {};
  },
  methods: {
    closeToast() {
      this.$emit("closeToast");
    },
    // 获取滑块数据
    getRangeNum(num) {
      console.log(num);
    },
  },
};
</script>
<style scoped>
.toast-bg {
  height: 470px;
  padding-top: 26px;
  font-size: 18px;
}
.close-box {
  justify-content: space-between;
  margin-bottom: 50px;
}
.close-box p {
  font-size: 30px;
}
.line-text{
    margin-bottom: 22px;
}
.add-risk p {
  margin-left: 6px;
}
</style>