<template>
  <div class="toast-mask">
    <div class="mobile-toast-bg">
      <div class="mobile-close-box row flex-sp">
        <p class="f15">Add</p>
        <img
          src="../../assets/close.png"
          alt=""
          class="mobile-toast-close-img"
          @click="closeToast"
        />
      </div>
      <!-- 滑块 -->
      <range @getRangeNum="getRangeNum" sliderText="BTC"></range>
      <range @getRangeNum="getRangeNum2" sliderText="BUSD"></range>
      <!--  -->
      <div class="row mobile-add-converte-box">
        <p style="width: 36%">Converted into</p>
        <div class="mobile-add-converte-btn">0 BTC + 0BUSD</div>
      </div>
      <div class="row mobile-line-text">
        <p>Assets</p>
        <p style="text-decoration: line-through">0.15 BUSD+0.003 BTC</p>
      </div>
      <div class="row mobile-line-text">
        <p>Updated Assets</p>
        <p>0.45 BUSD+0.053 BTC</p>
      </div>
      <div class="row mobile-line-text">
        <p>Updated Risk Value</p>
        <div class="row add-risk">
          <p style="text-decoration: line-through">70.52%</p>
          <p>→</p>
          <div class="mobile-add-risk-progress">
            <el-progress
              :text-inside="true"
              :stroke-width="11"
              :percentage="70"
            ></el-progress>
          </div>
          <p>58.52%</p>
        </div>
      </div>
      <div class="mobile-deposit-toast-btn">Confirm</div>
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
    getRangeNum2(num) {
      console.log(num);
    },
  },
};
</script>
<style scoped>
.mobile-toast-bg {
  padding-top: 1.625rem;
  height: 29.1875rem;
}
.mobile-close-box {
  margin-bottom: 1.875rem;
}
.mobile-add-converte-box {
  margin-bottom: 1.375rem;
  justify-content: space-between;
}
.mobile-add-converte-btn {
  flex-grow: 1;
  height: 1.8125rem;
  background: #10071b;
  border: 1px solid #8032dd;
  text-align: center;
  line-height: 1.8125rem;
  border-radius: 0.625rem;
}
.mobile-line-text {
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}
.add-risk p {
  margin-left: 0.375rem;
}
.mobile-add-risk-progress {
  margin-left: 0.375rem;
}
.mobile-deposit-toast-btn{
    margin-top: 1.25rem;
}
</style>
<style>
.mobile-toast-bg .el-progress-bar__inner {
  background-color: #00ff00;
}
.mobile-toast-bg .el-progress {
  width: 1.5625rem;
  margin-top: -0.125rem;
}
</style>