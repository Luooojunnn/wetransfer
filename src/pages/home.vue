<template>
  <div class="page">
    <!-- <TopHeader page="Home" /> -->
    <div class="main">
      <Notice></Notice>
      <div class="home-title-box">
        <p class="home-title">New Era for</p>
        <p class="home-title">Lend & Leverage Yield Farm</p>
      </div>

      <div class="home-title-text">
        Skyrocket your payoff by maxmizing your investing utilization rate
      </div>
      <div class="home-number row">
        <div class="number-left">
          <p class="left-top text-color-shadow">
            <span class="pc-f20">$</span>2,748,234,980
          </p>
          <p class="pc-f20 text-color">Total value locked</p>
        </div>
        <div class="number-right">
          <div class="right-item row">
            <p class="right-number text-color-shadow">
              <span class="pc-f20">$</span>2,74
            </p>
            <p class="text-color right-text">DEMA</p>
          </div>
          <div class="right-item row">
            <p class="right-number text-color-shadow">
              <span class="pc-f20">$</span>23,345,235
            </p>
            <p class="text-color right-text">User's daily revenue</p>
          </div>
        </div>
      </div>
      <div class="lend-farm-list row">
        <div class="list-box">
          <div class="list-title row">
            <p class="text-color list-title-left">Lend</p>
            <p class="more purple-text">More></p>
          </div>
          <ul>
            <li class="row" v-for="(item, index) in lendList" :key="index">
              <span class="list-icon">{{ index + 1 }}</span>
              <div class="list-item-left row">
                <img
                  src="../assets/list-icon.png"
                  alt=""
                  class="list-icon-img"
                />
                <div class="list-item-text">
                  <p>BCT</p>
                  <p class="pc-f14">Bitcoin</p>
                </div>
              </div>
              <div class="list-item-right row">
                <p>{{ item.num }}<span class="pc-f14">%</span></p>
                <div
                  class="list-item-btn purple-text pc-f20"
                  @click="changeLoginToastFc"
                >
                  Deposit
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-box farm-box">
          <div class="list-title row">
            <p class="text-color list-title-left">Farm</p>
            <p class="more purple-text">More></p>
          </div>
          <ul>
            <li class="row" v-for="(item, index) in farmList" :key="index">
              <span class="list-icon">{{ index + 1 }}</span>
              <div class="list-item-left row">
                <img
                  src="../assets/list-icon.png"
                  alt=""
                  class="list-icon-img"
                />
                <div class="list-item-text">
                  <p>BCT</p>
                  <p class="pc-f14">Bitcoin</p>
                </div>
              </div>
              <div class="list-item-right row">
                <p>{{ item.num }}<span class="pc-f14">%</span></p>
                <div class="list-item-btn purple-text pc-f20">3x Farm</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <!-- 弹窗 -->
    <!-- <DepositToast
      @closeToast="depositToastShow = false"
      v-if="depositToastShow"
    ></DepositToast> -->
    <WakuangToast
      @closeToast="wakuangToastShow = false"
      v-if="wakuangToastShow"
    ></WakuangToast>
  </div>
</template>

<script>
import Notice from "../components/Notice";
import Footer from "../components/Footer";
// import DepositToast from "../components/Deposit-toast";
// import TopHeader from "../components/TopHeader.vue";
import WakuangToast from "../components/Wa-kuang.vue";

import { mapMutations } from "vuex";

export default {
  components: {
    // TopHeader,
    Notice,
    Footer,
    // DepositToast,
    WakuangToast,
  },
  data() {
    return {
      lendList: [
        {
          num: 563.32,
        },
        {
          num: 563.32,
        },
      ],
      farmList: [
        {
          num: 563.32,
        },
        {
          num: 563.32,
        },
      ],
      depositToastShow: false,
      wakuangToastShow: true,
    };
  },
  methods:{
    ...mapMutations({
      changeLoginToast: "changeGlobalMask", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    changeLoginToastFc(){
      this.changeLoginToast({
        toastType: 2
      })
    },
  }
};
</script>
<style>
.main {
  width: 1072px;
  margin: 0 auto;
  padding-top: 44px;
  padding-bottom: 80px;
  position: relative;
  z-index: 1;
}
.home-title-box {
  margin-bottom: 44px;
  margin-top: 22px;
}
.home-title {
  line-height: 82px;
  text-align: center;
  font-size: 60px;
  background: linear-gradient(90deg, #a4e1c2 26%, #9439ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.home-number {
  width: 906px;
  margin: 0 auto;
  justify-content: center;
}
.home-title-text {
  text-align: center;
  margin-bottom: 52px;
  font-family: Barlow Condensed;
}
.number-left {
  text-align: center;
  font-family: Barlow Condensed;
}
.left-top {
  font-size: 38px;
  line-height: 32px;
  font-weight: bold;
}
.text-color-shadow {
  text-shadow: 3px 2px 8px #c797ff;
}
.text-color {
  background: linear-gradient(90deg, #a4e1c2 0%, #9439ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.right-item {
  margin-bottom: 22px;
}
.right-number {
  font-size: 32px;
  margin-right: 31px;
  width: 230px;
  text-align: right;
}
.right-text {
  width: 101px;
  font-size: 16px;
  text-align: left;
}
.lend-farm-list {
  width: 100%;
  justify-content: space-between;
  margin-top: 75px;
}
.list-box {
  width: 520px;
}
.list-title {
  justify-content: space-between;
  margin-bottom: 42px;
}
.list-title-left {
  width: 140px;
  font-weight: bold;
  font-style: italic;
  font-size: 48px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.more {
  font-size: 20px;
  text-decoration: underline;
}
.more:hover {
  cursor: pointer;
}
.lend-farm-list li {
  position: relative;
  background: #000;
  border: 1px transparent solid;
  height: 60px;
  border-radius: 20px;
  padding: 0 10px 0 58px;
  justify-content: space-between;
  margin-bottom: 18px;
}
.lend-farm-list li:after {
  content: "";
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 20px;
  content: "";
  z-index: -1;
}
.list-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(135deg, #a4e1c2 1%, #9439ff 100%);
  border-radius: 20px 0px 20px 0px;
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
}
.list-icon-img {
  width: 34px;
  height: 34px;
  margin-right: 16px;
}

.list-item-text {
  font-size: 24px;
}
.list-item-right {
  font-size: 28px;
}
.list-item-btn {
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  margin-left: 16px;
  border-radius: 16px;
}
.farm-box .list-title-left {
  background: linear-gradient(125deg, #80b6ff 0.5126953125%, #e539ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.farm-box li:after {
  background: linear-gradient(157deg, #80b6ff, #e539ff);
}
.farm-box .list-icon {
  background: linear-gradient(135deg, #80b6ff 1%, #e539ff 100%);
  color: #391068;
}
</style>
