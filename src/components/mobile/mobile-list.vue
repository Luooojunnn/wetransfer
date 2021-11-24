<template>
  <div class="mobile-list-main">
    <div class="row flex-sp f18 mobile-btc">
      <div class="row ml8" v-if="mobilePage == 'lend'">
        <img src="../../assets/btc.png" alt="" class="mobile-btc-img" />
        <span class="fw">BCT bitcoin</span>
      </div>
      <div class="row ml8" v-if="mobilePage == 'farm'">
        <img src="../../assets/bct.png" alt="" class="mobile-farm-bct-img" />
        <span class="fw">BCT/usdt</span>
      </div>
      <div class="mobile-btc-right">
        <p class="fw">5MDX + 6DEMA</p>
        <div class="mobile-btc-right-btn purple-text fw">claim$10.23</div>
      </div>
    </div>
    <div class="mobile-list-box f16 fw">
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
            <img src="../../assets/tip.png" alt="" class="mobile-list-tip-img" />
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
      <div class="mobile-list-btns row flex-sp f18">
        <div>
          <p v-if="mobilePage == 'farm'" class="fn"># 12357</p>
        </div>
        <div class="row purple-text fw">
          <div v-if="mobilePage == 'lend'" class="mobile-list-btn" @click="depositClick">Deposit</div>
          <div v-if="mobilePage == 'lend'" class="mobile-list-btn" @click="withdrawClick">
            Withdraw
          </div>
          <div v-if="mobilePage == 'farm'" class="mobile-list-btn" style="width:80px" @click="addClick">补仓</div>
          <div v-if="mobilePage == 'farm'" class="mobile-list-btn" style="width:80px" @click="redeemClick">赎回</div>
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
  methods:{
      redeemClick(){
          this.$emit('redeemClick')
      },
      addClick(){
          this.$emit('addClick')
      },
      depositClick(){
          this.$emit('depositClick')
      },
      withdrawClick(){
          this.$emit('withdrawClick')
      },
  }
};
</script>
<style scoped>
.mobile-list-main {
  margin-bottom: 1.375rem;
}
.mobile-btc {
  margin-bottom: 0.75rem;
}
.mobile-btc-img {
  width: 1.25rem;
  margin-right: 0.5rem;
}
.mobile-farm-bct-img {
  width: 2.375rem;
  margin-right: 0.375rem;
}
.mobile-btc-right-btn {
  background: #26143a;
  border: 0.0625rem solid #6d2cba;
  border-radius: 2.0625rem;
  width: 8.75rem;
  height: 2.25rem;
  line-height: 2.25rem;
  text-align: center;
  margin-top: 0.625rem;
}
.mobile-list-box {
  padding: 0.9375rem 0.75rem;
  background: #170f23;
  border: 0.0625rem solid #9439ff;
  opacity: 1;
  border-radius: 0.5625rem;
  box-sizing: border-box;
}
.mobile-list-tip-img {
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.625rem;
}
.mobile-list-inner > div {
  margin-bottom: 0.75rem;
}
.mobile-list-inner {
  border-bottom: 0.0625rem solid #e1e1e1;
  margin-bottom: 1.25rem;
}

.mobile-list-btn {
  width: 6.25rem;
  height: 2.0625rem;
  text-align: center;
  line-height: 2.0625rem;
  background: #26143a;
  border: 0.0625rem solid #6d2cba;
  opacity: 1;
  border-radius: 2.0625rem;
}
.mobile-list-btns .mobile-list-btn:first-child {
  margin-right: 0.625rem;
}
.ml10 {
  margin-left: 0.625rem;
}
</style>