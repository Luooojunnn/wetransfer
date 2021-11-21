<template>
  <div class="toast-mask">
    <div class="toast-bg">
      <div class="close-box row f30">
        <p>Impairment Loss Calculator</p>
        <img
          src="../assets/close.png"
          alt=""
          class="toast-close-img"
          @click="closeToast"
        />
      </div>
      <p class="calc-toast-asset">Asset 1</p>
      <div class="row flex-sp">
        <div class="row">
          <p>Stake:</p>
          <div class="calc-asset-ipt-box">
            <input type="number" class="calc-asset-ipt" v-model="stake1" />
            <p>$</p>
          </div>
        </div>
        <div class="row">
          <p>Now:</p>
          <div class="calc-asset-ipt-box">
            <input type="number" class="calc-asset-ipt" v-model="now1" />
            <p>$</p>
          </div>
        </div>
      </div>
      <p class="calc-toast-asset">Asset 2</p>
      <div class="row flex-sp">
        <div class="row">
          <p>Stake:</p>
          <div class="calc-asset-ipt-box">
            <input type="number" class="calc-asset-ipt" v-model="stake2" />
            <p>$</p>
          </div>
        </div>
        <div class="row">
          <p>Now:</p>
          <div class="calc-asset-ipt-box">
            <input type="number" class="calc-asset-ipt" v-model="now2" />
            <p>$</p>
          </div>
        </div>
      </div>
      <div class="calc-toast-loss row flex-sp">
        <p class="f30">Loss</p>
        <p class="purple-text f24">-3.054683%</p>
      </div>
      <p class="calc-toast-laverage f24">x Leverage</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stake1: 0,
      now1: 0,
      stake2: 0,
      now2: 0,
    };
  },
  methods: {
    closeToast() {
      this.$emit("closeToast");
    },
  },
};
</script>
<style scoped>
.toast-bg {
  height: 400px;
  padding-top: 34px;
  font-size: 18px;
}
.close-box {
  justify-content: space-between;
}
.f30 {
  font-size: 30px;
}
.f24 {
  font-size: 24px;
}
.calc-toast-asset {
  margin-bottom: 12px;
  margin-top: 26px;
  font-size: 30px;
}
.calc-asset-ipt-box {
  position: relative;
  width: 150px;
  height: 50px;
  margin-left: 8px;
}
.calc-asset-ipt {
  width: 100%;
  height: 100%;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 20px;
  padding: 0 10px 0 46px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 24px;
  color: #fff;
}
.calc-asset-ipt-box p {
  position: absolute;
  left: 30px;
  top: 50%;
  margin-top: -10px;
}
.calc-toast-loss {
  margin-top: 26px;
  margin-bottom: 10px;
}
.calc-toast-laverage {
  text-align: right;
}
</style>