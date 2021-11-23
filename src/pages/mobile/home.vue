<template>
  <div>
    <Notice></Notice>
    <div class="mobile-home-title-box">
      <img
        src="../../assets/mobile-home-title.png"
        alt=""
        class="mobile-home-title-img"
      />
    </div>
    <div class="mobile-main">
      <div class="mobile-home-title-text f13">
        Skyrocket your payoff by maxmizing your investing utilization rate
      </div>
      <div class="mobile-home-number row flex-sp">
        <div class="mobile-number-left">
          <p class="mobile-left-top text-color-shadow f18">
            <span class="f16">$</span>2,748,234,980
          </p>
          <p class="f13 text-color">Total value locked</p>
        </div>
        <div class="mobile-number-right">
          <div class="mobile-right-item row">
            <p class="mobile-right-number text-color-shadow f16">
              <span class="f16">$</span>2,74
            </p>
            <p class="text-color mobile-right-text">DEMA</p>
          </div>
          <div class="mobile-right-item row">
            <p class="mobile-right-number text-color-shadow f16">
              <span class="f16">$</span>23,345,235
            </p>
            <p class="text-color mobile-right-text">User's daily revenue</p>
          </div>
        </div>
      </div>
      <div class="mobile-lend-farm-list">
        <div class="mobile-list-box">
          <div class="mobile-list-title row">
            <p class="text-color mobile-list-title-left">Lend</p>
            <p class="mobile-more purple-text">More></p>
          </div>
          <ul>
            <li class="row" v-for="(item, index) in lendList" :key="index">
              <img
                src="../../assets/mobile-home-lend.png"
                alt=""
                class="mobile-lend-list-bg"
              />
              <span class="mobile-list-no">{{ index + 1 }}</span>
              <div class="list-item-left row">
                <img
                  src="../../assets/list-icon.png"
                  alt=""
                  class="mobile-list-icon-img"
                />
                <div class="mobile-list-item-text">
                  <p>BCT</p>
                  <p class="f13">bitcoin</p>
                </div>
              </div>
              <div class="mobile-list-item-right row">
                <p>{{ item.num }}<span class="f13">%</span></p>
                <div
                  class="mobile-list-item-btn purple-text f13"
                >
                  Deposit
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="mobile-list-box mobile-farm-box">
          <div class="mobile-list-title row">
            <p class="text-color mobile-list-title-left">Farm</p>
            <p class="mobile-more purple-text">More></p>
          </div>
          <ul>
            <li class="row" v-for="(item, index) in farmList" :key="index">
              <img
                src="../../assets/mobile-home-farm.png"
                alt=""
                class="mobile-lend-list-bg"
              />
              <span class="mobile-list-no">{{ index + 1 }}</span>
              <div class="list-item-left row">
                <img
                  src="../../assets/list-icon.png"
                  alt=""
                  class="mobile-list-icon-img"
                />
                <div class="mobile-list-item-text">
                  <p>BCT</p>
                  <p class="f13">bitcoin</p>
                </div>
              </div>
              <div class="mobile-list-item-right row">
                <p>{{ item.num }}<span class="f13">%</span></p>
                <div class="mobile-list-item-btn purple-text f13">3x Farm</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
import Notice from "../../components/mobile/mobile-notice";
// import DepositToast from "../components/Deposit-toast";
// import TopHeader from "../components/TopHeader.vue";
import WakuangToast from "../../components/mobile/mobile-wakuang-toast.vue";
export default {
  components: {
    Notice,
    WakuangToast
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
  methods: {},
};
</script>
<style>
.mobile-main {
  padding: 0 1.125rem 9rem;
  background: #000;
}
.mobile-home-title-box {
  margin-bottom: 1rem;
  margin-top: 1.25rem;
  text-align: center;
}
.mobile-home-title-img {
  width: 19.4375rem;
}

.mobile-home-number {
  width: 100%;
  align-items: flex-start;
}
.mobile-home-title-text {
    width: 15rem;
  text-align: center;
  margin:0 auto;
  margin-bottom: 1.3125rem;
  font-family: Barlow Condensed;
  line-height: 1.125rem;
}
.mobile-number-left {
  text-align: center;
  font-family: Barlow Condensed;
}
.mobile-left-top {
  margin-bottom: 0.4375rem;
  font-weight: bold;
}
.text-color-shadow {
  text-shadow: 0.1875rem 0.125rem 0.5rem #c797ff;
}
.text-color {
  background: linear-gradient(90deg, #a4e1c2 0%, #9439ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mobile-right-item {
  margin-bottom: 0.6875rem;
}
.mobile-right-number {
  margin-right: 0.625rem;
  width: 5.875rem;
  text-align: right;
}
.mobile-right-text {
  width: 4.75rem;
  font-size: 0.8125rem;
  text-align: left;
}
.mobile-lend-farm-list {
  width: 100%;
  justify-content: space-between;
  margin-top: 1.9375rem;
}
.mobile-list-box {
  width: 100%;
  box-sizing: border-box;
}
.mobile-list-title {
  justify-content: space-between;
  margin-bottom: 1.5625rem;
}
.mobile-list-title-left {
  width: 100%;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mobile-more {
  font-size: 0.9375rem;
  text-decoration: underline;
}
.mobile-more:hover {
  cursor: pointer;
}
.mobile-lend-farm-list li {
  position: relative;
  height: 2.5rem;
  border-radius: 1.25rem;
  padding: 0 0.625rem 0 2.5rem;
  justify-content: space-between;
  margin-bottom: 0.9375rem;
}
.mobile-lend-list-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.mobile-list-no {
  position: absolute;
  left: 0.5rem;
  top: 0.25rem;
  font-size: 1.125rem;
}

.mobile-list-icon-img {
  width: 1.375rem;
  height: 1.375rem;
  margin-right: 0.625rem;
}

.mobile-list-item-text {
  font-size: 0.9375rem;
}
.mobile-list-item-right {
  font-size: 1.125rem;
}
.mobile-list-item-btn {
  width: 3.5625rem;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  background: rgba(148, 57, 255, 0.1);
  border: 0.0625rem solid #9439ff;
  margin-left: 0.9375rem;
  border-radius: 1rem;
}
.mobile-farm-box .mobile-list-title-left {
  background: linear-gradient(125deg, #e539ff 0%, #80b6ff 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.mobile-farm-box {
  margin-top: 3.6875rem;
}
</style>
