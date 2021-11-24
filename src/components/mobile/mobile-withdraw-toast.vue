<template>
  <div class="toast-mask">
    <div class="mobile-toast-bg">
      <div class="mobile-close-box">
        <img
          src="../../assets/close.png"
          alt=""
          class="mobile-toast-close-img"
          @click="closeToast"
        />
      </div>
      <div class="mobile-deposit-toast-title row">
        <p>Withdraw</p>
        <div class="mobile-deposit-toast-title-right">
          <div class="mobile-deposit-toast-title-top row">
            <img
              src="../../assets/list-icon.png"
              alt=""
              class="mobile-deposit-toast-icon"
            />
            <p>BTC</p>
          </div>
          <p class="mobile-deposit-toast-text gray-text">Your Balance: 15.00</p>
        </div>
      </div>
      <div class="mobile-deposit-toast-table-border">
        <div class="mobile-deposit-toast-table row">
          <img
            src="../../assets/list-icon.png"
            alt=""
            class="mobile-deposit-toast-icon"
          />
          <input type="number" class="mobile-deposit-toast-ipt" v-model="withdrawVal"/>
          <p class="mobile-deposit-toast-table-text">MAX</p>
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
        withdrawVal:0
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
  margin-bottom: 2.375rem;
  text-align: right;
}
.mobile-deposit-toast-title {
  font-size: 0.9375rem;
  margin-bottom: 0.9375rem;
  justify-content: space-between;
  align-items: flex-start;
}
.mobile-deposit-toast-icon {
  width: 1.375rem;
  height: 1.375rem;
}
.mobile-deposit-toast-title-top p {
  margin-left: 0.4375rem;
}
.mobile-deposit-toast-text {
  font-size: 0.625rem;
  margin-top: 0.5rem;
}
.mobile-deposit-toast-table {
  width: calc(100% - 0.125rem);
  height: 2rem;
  background: #000;
  border-radius: 1.875rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 0.375rem 1.25rem 0.625rem 1rem;
  box-sizing: border-box;
}
.mobile-deposit-toast-table-border {
  width: 100%;
  height: 2.1875rem;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 1rem;
  position: relative;
}
.mobile-deposit-toast-ipt {
  margin-left: 0.75rem;
  font-size: 0.9375rem;
  background: #000;
  border: none;
  color: #fff;
}
.mobile-deposit-toast-table-text {
  flex-grow: 1;
  text-align: right;
  font-size: 1.25rem;
}

.mobile-deposit-toast-btn {
  margin-top: 4.25rem;
}
.mobile-deposit-toast-btn:hover {
  cursor: pointer;
}
.mobile-deposit-toast-table-num-ipt {
  border: none;
  outline: none;
  background: transparent;
  color: #fff;
}
.mobile-deposit-toast-title-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>