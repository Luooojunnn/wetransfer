<template>
  <div class="toast-mask">
    <div class="mobile-toast-bg">
      <div class="mobile-close-box row f30">
        <p class="f15">Impairment Loss Calculator</p>
        <img
          src="../../assets/close.png"
          alt=""
          class="mobile-toast-close-img"
          @click="closeToast"
        />
      </div>
      <p class="mobile-calc-toast-asset">Asset 1</p>
      <div class="row flex-sp mobile-asset-box">
        <div class="row">
          <p>Stake:</p>
          <div class="mobile-calc-asset-ipt-box">
            <input type="number" class="mobile-calc-asset-ipt" v-model="stake1" />
            <p>$</p>
          </div>
        </div>
        <div class="row">
          <p>Now:</p>
          <div class="mobile-calc-asset-ipt-box">
            <input type="number" class="mobile-calc-asset-ipt" v-model="now1" />
            <p>$</p>
          </div>
        </div>
      </div>
      <p class="mobile-calc-toast-asset">Asset 2</p>
      <div class="row flex-sp mobile-asset-box">
        <div class="row">
          <p>Stake:</p>
          <div class="mobile-calc-asset-ipt-box">
            <input type="number" class="mobile-calc-asset-ipt" v-model="stake2" />
            <p>$</p>
          </div>
        </div>
        <div class="row">
          <p>Now:</p>
          <div class="mobile-calc-asset-ipt-box">
            <input type="number" class="mobile-calc-asset-ipt" v-model="now2" />
            <p>$</p>
          </div>
        </div>
      </div>
      <div class="mobile-calc-toast-loss row flex-sp">
        <p class="f15">Loss</p>
        <p class="purple-text f15">-3.054683%</p>
      </div>
      <p class="mobile-calc-toast-laverage f13">x Leverage</p>
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
.mobile-toast-bg {
  height: 20.8125rem;
  padding-top: 1.5rem;
}
.mobile-close-box {
  justify-content: space-between;
  margin-bottom: 0.9375rem;
}
.f30 {
  font-size: 1.875rem;
}
.f24 {
  font-size: 1.5rem;
}
.mobile-calc-toast-asset {
  margin-bottom: 0.9375rem;
  font-size: 0.9375rem;
}
.mobile-calc-asset-ipt-box {
  position: relative;
  width: 6rem;
  height: 2.125rem;
  margin-left: 0.5625rem;
  
}
.mobile-calc-asset-ipt {
  width: 100%;
  height: 100%;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 0.5rem;
  padding: 0 0.625rem 0 2.1875rem;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.125rem;
  color: #fff;
}
.mobile-calc-asset-ipt-box p {
  position: absolute;
  left: 1.5625rem;
  top: 50%;
  margin-top: -0.5625rem;
  font-size: 1.125rem;
}
.mobile-calc-toast-loss {
  margin-top: 1.875rem;
  margin-bottom: 0.625rem;
}
.mobile-calc-toast-laverage {
  text-align: right;
}
.mobile-asset-box{
        margin-bottom: 1.5625rem;
}
</style>