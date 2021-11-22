<template>
  <div class="mobile-list-main">
    <div class="row flex-sp f16 mobile-btc">
      <div class="row" v-if="mobilePage == 'lend'">
        <img src="../../assets/btc.png" alt="" class="mobile-btc-img" />
        <span class="fw">BCT bitcoin</span>
      </div>
      <div class="row" v-if="mobilePage == 'farm'">
        <img src="../../assets/bct.png" alt="" class="mobile-farm-bct-img" />
        <span class="fw">BCT/usdt</span>
      </div>
      <div class="mobile-btc-right">
        <p class="fw">5MDX + 6DEMA</p>
        <div class="mobile-btc-right-btn purple-text fw">claim$10.23</div>
      </div>
    </div>
    <div class="mobile-list-box f16">
      <div class="mobile-list-inner">
        <div v-if="mobilePage == 'farm'" class="row flex-sp">
          <p>Asset</p>
          <p>{{ list.asset }}<span class="ml10 f14">USDT</span></p>
        </div>
        <div v-if="mobilePage == 'farm'" class="row flex-sp">
          <p>Debt</p>
          <p>{{ list.debt }}<span class="ml10 f14">USDT</span></p>
        </div>
        <div v-if="mobilePage == 'lend'" class="row flex-sp">
          <p>Balance</p>
          <p>{{ list.balance }}</p>
        </div>
        <div class="row flex-sp">
          <p>APY</p>
          <div class="row">
            <p>{{ list.apy }}</p>
            <img src="../../assets/tip.png" alt="" class="mobile-tip-img" />
          </div>
        </div>
        <div v-if="mobilePage == 'lend'" class="row flex-sp">
          <p>Reward</p>
          <p>{{ list.reward }}</p>
        </div>
        <div v-if="mobilePage == 'farm'" class="row flex-sp">
          <p>Risk</p>
          <p>{{ list.risk }}</p>
        </div>
      </div>
      <div class="mobile-list-btns row flex-sp">
        <div>
          <p v-if="mobilePage == 'farm'"># 12357</p>
        </div>
        <div class="row purple-text fw">
          <div v-if="mobilePage == 'lend'" class="mobile-list-btn">Deposit</div>
          <div v-if="mobilePage == 'lend'" class="mobile-list-btn">
            Withdraw
          </div>
          <div v-if="mobilePage == 'farm'" class="mobile-list-btn" style="width:80px">补仓</div>
          <div v-if="mobilePage == 'farm'" class="mobile-list-btn" style="width:80px">赎回</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["mobilePage", "list"],
};
</script>
<style scoped>
.mobile-list-main {
  margin-bottom: 30px;
}
.mobile-btc {
  margin-bottom: 20px;
}
.mobile-btc-img {
  width: 20px;
  margin-right: 10px;
}
.mobile-farm-bct-img {
  width: 38px;
  margin-right: 6px;
}
.mobile-btc-right-btn {
  background: #26143a;
  border: 1px solid #6d2cba;
  border-radius: 33px;
  width: 140px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-top: 10px;
}
.mobile-list-box {
  padding: 20px 10px;
  background: #170f23;
  border: 1px solid #9439ff;
  opacity: 1;
  border-radius: 9px;
}
.mobile-tip-img {
  width: 14px;
  height: 14px;
  margin-left: 10px;
}
.mobile-list-inner > div {
  margin-bottom: 20px;
}
.mobile-list-inner {
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 20px;
}

.mobile-list-btn {
  width: 110px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  background: #26143a;
  border: 1px solid #6d2cba;
  opacity: 1;
  border-radius: 33px;
}
.mobile-list-btns .mobile-list-btn:first-child {
  margin-right: 10px;
}
.ml10 {
  margin-left: 10px;
}
</style>