<template>
  <div>
    <Notice></Notice>
    <p class="mobile-title f20">High Profit Leverage Farm</p>
    <div class="mobile-main">
      <div class="row f15 ml8" style="margin-bottom: 6px">
        <img src="../../assets/bct.png" alt="" class="mobile-position-img" />
        <p>Your position</p>
      </div>
      <div v-for="(item, index) in lendList" :key="index">
        <List mobilePage="lend" :list="item"></List>
      </div>
      <!-- 总览 -->
      <div class="mobile-overview">
        <div class="row flex-sp">
          <p class="f20 ml8">总览</p>
          <div class="mobile-overview-ipt-box">
            <input type="text" class="mobile-overview-ipt" />
            <img
              src="../../assets/search-icon.png"
              alt=""
              class="mobile-overview-ipt-img"
            />
          </div>
        </div>
        <div class="mobile-overview-tip row flex-sp f13">
          <div class="row">
            <p>币种资金使用率</p>
            <img
              src="../../assets/arrow.png"
              alt=""
              class="mobile-overview-tip-img"
            />
          </div>
          <div class="row">
            <p>收益/TLV</p>
            <img
              src="../../assets/arrow.png"
              alt=""
              class="mobile-overview-tip-img"
            />
          </div>
        </div>
      </div>
      <div v-for="(item, index) in bctLendList" :key="index + 'bct'">
        <BctList :list="item"></BctList>
      </div>
    </div>
  </div>
</template>
<script>
import Notice from "../../components/mobile/mobile-notice";
import List from "../../components/mobile/mobile-list";
import BctList from "../../components/mobile/mobile-bctList";
export default {
  components: {
    Notice,
    List,
    BctList,
  },
  data() {
    return {
      lendList: [
        {
          balance: 400.25,
          apy: "10.12%",
          reward: "10 MDX+50 DMC",
        },
        {
          balance: 400.25,
          apy: "10.12%",
          reward: "10 MDX+50 DMC",
        },
      ],
      bctLendList: [
        {
          type: 1,
          num1: "2033.12%",
          num2: "96.32%",
          num3: "651,245.00",
        },
        {
          type: 2,
          num1: "2033.12%",
          num2: "96.32%",
          num3: "651,245.00",
        },
      ],
    };
  },
};
</script>
<style scoped>
.mobile-title {
  text-align: center;
  font-weight: bold;
  margin-top: 2.125rem;
  margin-bottom: 3.875rem;
}
.mobile-main {
  padding: 0 1.125rem 9rem;
  background: #000;
}
.mobile-position-img {
  width: 1rem;
  margin-right: 0.625rem;
}
.mobile-overview {
  margin-top: 3.625rem;
}
.mobile-overview-ipt-box {
  position: relative;
  width: 12.9375rem;
  height: 1.875rem;
}
.mobile-overview-ipt {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #170f23;
  border: 0.0625rem solid #9439ff;
  border-radius: 1.8125rem;
  color: #fff;
  padding: 0 1.875rem 0 0.625rem;
  box-sizing: border-box;
}
.mobile-overview-ipt-img {
  width: 0.875rem;
  height: 0.875rem;
  position: absolute;
  right: 0.75rem;
  top: 50%;
  margin-top: -0.4375rem;
}
.mobile-overview-tip {
  border: 0.0625rem dashed #fff;
  width: 95%;
  margin: 0 auto;
  height: 1.625rem;
  line-height: 1.625rem;
  padding: 0 0.625rem 0 1.25rem;
  box-sizing: border-box;
  margin-bottom: 1.5625rem;
  margin-top: 1.5rem;
}
.mobile-overview-tip-img {
  width: 0.5rem;
  margin-left: 0.375rem;
}
</style>
