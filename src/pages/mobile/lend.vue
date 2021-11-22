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
  margin-top: 34px;
  margin-bottom: 62px;
}
.mobile-main {
  padding: 0 18px 200px;
}
.mobile-position-img {
  width: 16px;
  margin-right: 10px;
}
.mobile-overview {
  margin-top: 58px;
}
.mobile-overview-ipt-box {
  position: relative;
  width: 207px;
  height: 30px;
}
.mobile-overview-ipt {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #170f23;
  border: 1px solid #9439ff;
  border-radius: 29px;
  color: #fff;
  padding: 0 30px 0 10px;
  box-sizing: border-box;
}
.mobile-overview-ipt-img {
  width: 14px;
  height: 14px;
  position: absolute;
  right: 12px;
  top: 50%;
  margin-top: -7px;
}
.mobile-overview-tip {
  border: 1px dashed #fff;
  width: 95%;
  margin: 0 auto;
  height: 26px;
  line-height: 26px;
  padding: 0 10px 0 20px;
  box-sizing: border-box;
  margin-bottom: 25px;
  margin-top: 24px;
}
.mobile-overview-tip-img {
  width: 8px;
  margin-left: 6px;
}
</style>
