<template>
  <div class="mobile-list-main">
    <div class="mobile-bct-item fw">
      <div class="row flex-sp">
        <div class="row">
          <div class="mobile-item-img-box f23">
            <img
              v-if="list.type == '1'"
              src="../../assets/btc.png"
              alt=""
              class="mobile-bitcoin-img"
            />
            <img
              v-if="list.type == '2'"
              src="../../assets/bct.png"
              alt=""
              class="mobile-bct-img"
            />
          </div>
          <p v-if="list.type == '1'">BCT bitcoin</p>
          <p v-if="list.type == '2'">BCT/USDT</p>
        </div>

        <div class="row">
          <p class="f18">{{ list.num1 }}</p>

          <img src="../../assets/tip.png" alt="" class="mobile-tip-img" />
        </div>
      </div>
      <div class="row flex-sp f18 mt10">
        <p>{{ list.num2 }}</p>
        <p>{{ list.num3 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["list"],
};
</script>
<style scoped>
.mobile-list-main {
  margin-bottom: 15px;
}
.mobile-bct-item {
  background: #26143a;
  border: 1px solid #6d2cba;
  opacity: 1;
  border-radius: 24px;
  padding: 12px 12px 15px;
}
.mobile-bitcoin-img {
  width: 24px;
}
.mobile-bct-img {
  width: 37px;
}
.mobile-item-img-box {
  width: 40px;
  text-align: center;
  white-space: nowrap;
}
.mobile-tip-img {
  width: 15px;
  height: 15px;
  margin-left: 8px;
}
.mt10 {
  margin-top: 10px;
}
</style>