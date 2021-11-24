<template>
  <div class="toast-mask">
    <div class="toast-bg">
      <div class="close-box">
        <img
          src="../assets/close.png"
          alt=""
          class="toast-close-img"
          @click="closeToast"
        />
      </div>
      <div class="deposit-toast-title row">
        <p>Deposit</p>
        <div class="deposit-toast-title-right">
          <div class="deposit-toast-title-top row">
            <img
              src="../assets/list-icon.png"
              alt=""
              class="deposit-toast-icon"
            />
            <p>BTC</p>
          </div>
          <p class="deposit-toast-text">Your Balance: 15.00</p>
        </div>
      </div>
      <div class="deposit-toast-table-border">
        <div class="deposit-toast-table row">
          <img
            src="../assets/list-icon.png"
            alt=""
            class="deposit-toast-icon"
          />
          <input type="number" class="deposit-toast-ipt" v-model="depositVal" />
          <p class="deposit-toast-table-text">MAX</p>
        </div>
      </div>
      <div class="deposit-toast-btn" @click="confirmMyDeposit">Confirm</div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      depositVal: 0,
    };
  },
  methods: {
    ...mapMutations({
      changeLoginToast: "changeGlobalMask", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    closeToast() {
      this.$emit("closeToast");
    },
    changeLoginToastFc() {
      // this.changeLoginToast({
      //   toastType: -1,
      // });
    },
    confirmMyDeposit() {
      console.log(this.$ethers);
    },
  },
};
</script>
<style scoped>
.toast-bg {
  height: 350px;
  padding-top: 16px;
  padding-bottom: 20px;
}
.close-box {
  text-align: right;
  margin-bottom: 12px;
}
.deposit-toast-title {
  font-size: 30px;
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: flex-start;
}
.deposit-toast-icon {
  width: 34px;
  height: 34px;
}
.deposit-toast-title-top p {
  margin-left: 10px;
}
.deposit-toast-text {
  font-size: 18px;
  margin-top: 10px;
}
.deposit-toast-table {
  width: calc(100% - 2px);
  height: 48px;
  background: #000;
  border-radius: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 6px 20px 10px 16px;
  box-sizing: border-box;
}
.deposit-toast-table-border {
  width: 100%;
  height: 50px;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 30px;
  position: relative;
}
.deposit-toast-table-text {
  flex-grow: 1;
  text-align: right;
  font-size: 30px;
}
.deposit-toast-btn {
  width: 450px;
  height: 40px;
  position: absolute;
  bottom: 20px;
  left: 20;
  text-align: center;
  line-height: 40px;
  border: 1px solid #9439ff;
  border-radius: 16px;
  font-size: 24px;
}
.deposit-toast-btn:hover {
  cursor: pointer;
}
.deposit-toast-ipt {
  margin-left: 32px;
  font-size: 24px;
  background: #000;
  border: none;
  color: #fff;
}
.deposit-toast-title-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>