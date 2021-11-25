<template>
  <div class="page">
    <!-- <TopHeader  page="Lend"/> -->
    <div class="main">
      <Notice></Notice>
      <div class="page-big-tit">
        <span class="big-tit">Low Risk Farm</span>
      </div>
      <div class="first-lend-tabl-wrap">
        <div class="bct row">
          <div class="position-title row">
            <img src="../assets/arrow2.png" alt="" class="position-img" />
            <p class="position-desc">Your position</p>
          </div>
          <div class="row">
            <p class="lend-mdx">5MDX+6DEMA</p>
            <img src="../assets/kongtou-gift.png" alt="" class="gift-img" />
          </div>
        </div>

        <div class="farm-table">
          <div class="farm-table-thead row">
            <div style="width: 5%"></div>
            <div class="pool">Pool</div>
            <div class="balance">Balance</div>
            <div class="apy">APY</div>
            <div class="reward">Reward</div>
            <div class="last"></div>
          </div>
          <div class="farm-table-item row" v-for="(item, index) in lendList" :key="index">
            <div style="width: 5%">
              <img src="../assets/btc.png" alt="" class="farm-table-item-img" />
            </div>
            <div class="pool">{{ item.pool }}<span class="bitconin">Bitcoin</span></div>
            <div class="balance">{{ item.balance }}</div>
            <div class="apy">
              {{ item.apy }}<span class="pc-f14">%</span><img src="../assets/tip.png" alt="" class="tip-img" />
            </div>
            <div class="reward">
              {{ item.reward }}
            </div>
            <div class="last row">
              <div class="last-btn purple-text" @click="depositToastShow = true">Deposit</div>
              <div class="last-btn purple-text" @click="withdrawToastShow = true">Withdraw</div>
            </div>
          </div>
        </div>
      </div>

      <div class="farm-content row">
        <p class="lend-title">Lend</p>
        <div class="farm-ipt-box">
          <input type="text" class="farm-ipt" />
          <img src="../assets/search-icon.png" alt="" class="ipt-img" />
        </div>
      </div>
      <div class="farm-table">
        <div class="farm-table-thead row">
          <div style="width: 7%"></div>
          <div class="pool2">Pool</div>
          <div class="tvl">TVL</div>
          <div class="utilization">Utilization</div>
          <div class="dmc">DEMA/w</div>
          <div class="apy2">APY<img src="../assets/tip.png" alt="" class="tip-img" /></div>
          <div class="last2"></div>
        </div>
        <div class="farm-table-item row" v-for="(item, index) in list2" :key="index">
          <div style="width: 7%">
            <img src="../assets/btc.png" alt="" class="farm-table-item-img" />
          </div>
          <div class="pool2">{{ item.pool }}<span class="bitconin">Bitcoin</span></div>
          <div class="tvl">{{ item.tvl }}</div>
          <div class="utilization">{{ item.utilization }}<span class="pc-f14">%</span></div>
          <div class="dmc">{{ item.dmc }}</div>
          <div class="apy2">
            {{ item.apy }}<span class="pc-f14">%</span><img src="../assets/tip.png" alt="" class="tip-img" />
          </div>
          <div class="last2">
            <div class="last-btn purple-text" @click="depositToastShow = true">Deposit</div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <!-- 弹窗 -->
    <DepositToast @closeToast="depositToastShow = false" v-if="depositToastShow"></DepositToast>
    <WithdrawToast @closeToast="withdrawToastShow = false" v-if="withdrawToastShow"></WithdrawToast>
  </div>
</template>

<script>
import Notice from "../components/Notice";

import Footer from "../components/Footer";
import DepositToast from "../components/Deposit-toast";
import WithdrawToast from "../components/Withdraw-toast";
// import TopHeader from "../components/TopHeader.vue";
export default {
  components: {
    // TopHeader,
    Notice,
    Footer,
    DepositToast,
    WithdrawToast,
  },
  data() {
    return {
      lendList: [
        {
          pool: "BCT",
          balance: "400.25",
          apy: "10.12",
          reward: "10 MDX+ 50 DEMA",
        },
      ],
      list2: [
        {
          pool: "BCT",
          tvl: "256,571,210.52",
          utilization: "9,000",
          dmc: "9,000",
          apy: "2033.12",
        },
        {
          pool: "BCT",
          tvl: "256,571,210.52",
          utilization: "9,000",
          dmc: "9,000",
          apy: "2033.12",
        },
      ],
      depositToastShow: false,
      withdrawToastShow: false,
    };
  },
};
</script>

<style scoped>
.main {
  width: 1040px;
  margin: 0 auto;
  padding-top: 44px;
  padding-bottom: 80px;
  position: relative;
  z-index: 1;
}

.farm-title-img {
  width: 549px;
  margin: 0 auto;
  margin-bottom: 43px;
  display: block;
}
.position-title {
  margin-bottom: 12px;
  padding-top: 9px;
}
.position-img {
  width: 32px;
  margin-right: 12px;
}
.bct {
  font-size: 24px;
  margin-bottom: 9px;
  justify-content: space-between;
}
.bct-img {
  margin-left: 27px;
  width: 49px;
  height: 30px;
  margin-right: 12px;
}
.gift-img {
  width: 57px;
  height: 50px;
  margin-left: 13px;
}
.bct-box {
  padding: 18px 42px 42px 27px;
  background: #1f0c21;
  border: 1px transparent solid;
  border-radius: 20px;
  margin-bottom: 70px;
  position: relative;
}
.bct-box:after {
  content: "";
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: -3px;
  right: -3px;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 28px;
  content: "";
  z-index: -1;
}

.farm-table {
  width: 100%;
  text-align: center;
}

.farm-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 12px;
}
.farm-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 28px;
  margin-top: 94px;
}
.farm-content .lend-title {
  font-size: 48px;
}
.farm-left {
  font-size: 30px;
  font-weight: bold;
}
.farm-left-top p:first-child {
  color: #9439ff;
  margin-right: 30px;
}
.farm-list {
  margin-top: 23px;
}
.farm-list li {
  font-size: 18px;
}
.farm-list .farm-active {
  font-size: 26px;
  color: #9439ff;
}
.farm-list li:not(:last-child) {
  margin-right: 30px;
}
.farm-ipt-box {
  position: relative;
}
.farm-ipt {
  width: 388px;
  height: 35px;
  border: 1px solid #9439ff;
  border-radius: 20px;
  background: rgba(148, 57, 255, 0.1);
  padding-left: 10px;
  padding-right: 36px;
  box-sizing: border-box;
  color: #fff;
}
.ipt-img {
  width: 16px;
  height: 16px;
  position: absolute;
  right: 16px;
  top: 50%;
  margin-top: -8px;
}
.farm-right-bottom {
  margin-right: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.farm-right-bottom .farm-img {
  width: 20px;
  height: 30px;
  margin-right: 22px;
}
.farm-right-bottom p {
  font-size: 20px;
  text-decoration: underline;
}
.farm-table {
  width: 100%;
  color: #fff;
}

.farm-table-item,
.farm-table-thead {
  box-sizing: border-box;
  text-align: center;
  font-size: 24px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px 0;
  background: url("../assets/bg.png") center center no-repeat;
  background-size: cover;
}
.farm-table-item {
  height: 60px;
}
.farm-table-thead {
  height: 50px;
}

.farm-table-item {
  background: #1a1125;
  border: 1px transparent solid;
  border-radius: 28px;
  position: relative;
}

.farm-table-item:after {
  content: "";
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: -3px;
  right: -3px;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 28px;
  content: "";
  z-index: -1;
}
.farm-table-item-img {
  width: 34px;
  margin-right: 18px;
  margin-left: 12px;
}

.farm-table .pool {
  width: 15%;
}

.farm-table .balance {
  width: 15%;
}

.farm-table .apy {
  width: 17%;
}
.farm-table .reward {
  width: 30%;
}
.farm-table .pool2 {
  width: 10%;
}
.farm-table .tvl {
  width: 25%;
}
.farm-table .utilization {
  width: 13%;
}
.farm-table .dmc {
  width: 15%;
}
.farm-table .apy2 {
  width: 15%;
}
.farm-table .last2 {
  width: 15%;
}
.farm-table .last {
  width: 28%;
}
.farm-table-item {
  font-size: 24px;
}
.farm-table-item .bitconin {
  font-size: 14px;
  margin-left: 6px;
}

.farm-table .last-btn {
  width: auto;
  height: 40px;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 16px;
  text-align: center;
  line-height: 40px;
  float: right;
  margin-right: 8px;
  font-size: 20px;
  padding: 0 24px;
}

.tip-img {
  width: 18px;
  height: 18px;
  margin-left: 8px;
  position: relative;
  top: -2px;
}
.bottom {
  width: 100%;
  height: 80px;
  background: #080808;
  font-size: 20px;
  color: #6b6b6b;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  z-index: 100;
}
.bottom p {
  margin-right: 14px;
}
.bottom .row {
  margin-left: 16px;
}
.bottom-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
}
.page-big-tit .big-tit {
  width: 549px;
  height: 57px;
  font-size: 60px;
  font-family: Barlow Condensed;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  text-shadow: 6px 5px 10px #9439ff;
}
.page-big-tit {
  text-align: center;
  margin: 46px 0;
}
.table-icon {
  width: 34px;
  height: 34px;
}
.position-desc {
  height: 22px;
  font-size: 24px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.lend-mdx {
  height: 23px;
  font-size: 30px;
  font-family: Barlow Condensed;
  font-weight: 800;
  color: #ffffff;
}
.first-lend-tabl-wrap {
  padding: 13px 13px 30px 7px;
  box-sizing: border-box;
  background: #0a0a0a;
  width: 1060px;
  height: 220px;
  border-radius: 20px;
}
</style>
