<template>
  <div class="toast-mask">
    <div class="toast-bg">
      <div class="close-box row">
        <p>Add</p>
        <img
          src="../assets/close.png"
          alt=""
          class="toast-close-img"
          @click="closeToast"
        />
      </div>
      <!-- 滑块 -->
      <range @getRangeNum="getRangeNum" sliderText="BTC"></range>
      <range @getRangeNum="getRangeNum2" sliderText="BUSD"></range>
      <!--  -->
      <div class="row add-converte-box">
        <p>Converted into</p>
        <div class="add-converte-btn">0 BTC + 0BUSD</div>
      </div>
      <div class="row line-text">
        <p>Assets</p>
        <p style="text-decoration: line-through">0.15 BUSD+0.003 BTC</p>
      </div>
      <div class="row line-text">
        <p>Updated Assets</p>
        <p>0.45 BUSD+0.053 BTC</p>
      </div>
      <div class="row line-text">
        <p>Updated Risk Value</p>
        <div class="row add-risk">
          <p style="text-decoration: line-through">70.52%</p>
          <p>→</p>
          <div class="add-risk-progress">
            <el-progress
              :text-inside="true"
              :stroke-width="22"
              :percentage="70"
            ></el-progress>
          </div>
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
    getRangeNum2(num) {
      console.log(num);
    },
  },
};
</script>
<style scoped>
.toast-bg {
  height: 650px;
  padding-top: 26px;
  font-size: 18px;
}
.close-box {
  justify-content: space-between;
  margin-bottom: 40px;
}
.close-box p {
  font-size: 30px;
}

.add-converte-box {
  margin-bottom: 30px;
  justify-content: space-between;
}
.add-converte-btn {
  width: 310px;
  height: 40px;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 16px;
  line-height: 40px;
  text-align: center;
}
.line-text {
  justify-content: space-between;
  margin-bottom: 20px;
}
.add-risk p {
  margin-left: 6px;
}
.add-risk-progress {
  margin-left: 6px;
  width: 50px;
}
</style>
<style>
.el-progress-bar__inner {
  background-color: #00ff00;
}
.el-progress {
  width: 50px;
}
</style>