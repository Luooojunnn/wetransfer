<template>
  <div class="page">
    <Notice></Notice>
    <p class="mobile-title f20">High Profit Leverage Farm</p>
    <div class="mobile-main">
      <div class="row f15 ml8" style="margin-bottom: 6px">
        <img src="../../assets/bct.png" alt="" class="mobile-position-img" />
        <p>Your position</p>
      </div>
      <div v-for="(item, index) in farmList" :key="index">
        <List mobilePage="farm" :list="item" @redeemClick="redeemToastShow=true" @addClick="addToastShow=true"></List>
      </div>
      <!-- 总览 -->
      <div class="mobile-overview">
        <div class="row mobile-baseline ml8">
          <div
            v-for="(item, index) in titleList"
            :key="index"
            class="mr15 mobile-title-unactive"
            @click="titleListClick(index)"
          >
            <p :class="[index == titleListActive ? 'mobile-title-Active' : '']">
              {{ item.content }}
            </p>
          </div>
        </div>
        <div class="mobile-second-title row mobile-baseline ml8">
          <div
            v-for="(item, index) in secondTitleList"
            :key="index"
            class="mr11 mobile-second-title-unactive"
            @click="secondTitleListClick(index)"
          >
            <p
              :class="[
                index == secondTitleListActive
                  ? 'mobile-second-title-Active'
                  : '',
              ]"
            >
              {{ item.content }}
            </p>
          </div>
        </div>
        <div class="mobile-overview-tip row flex-sp f14">
          <div class="row">
            <p>矿池日产</p>
            <img
              src="../../assets/arrow.png"
              alt=""
              class="mobile-overview-tip-img"
            />
          </div>
          <div class="row">
            <p>年化收益</p>
            <img
              src="../../assets/arrow.png"
              alt=""
              class="mobile-overview-tip-img"
            />
            <img
              src="../../assets/arrow.png"
              alt=""
              class="mobile-overview-tip-img"
            />
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
     <!-- 弹窗 -->
    <RedeemToast @closeToast="redeemToastShow=false" v-if="redeemToastShow"></RedeemToast>
    <AddToast @closeToast="addToastShow=false" v-if="addToastShow"></AddToast>
    <CalcToast @closeToast="calcToastShow=false" v-if="calcToastShow"></CalcToast>
  </div>
</template>
<script>
import Notice from "../../components/mobile/mobile-notice";
import List from "../../components/mobile/mobile-list";
import BctList from "../../components/mobile/mobile-bctList";
import RedeemToast from "../../components/mobile/mobile-redeem-toast";
import AddToast from "../../components/mobile/mobile-add-toast";
import CalcToast from "../../components/mobile/mobile-calc-toast";
export default {
  components: {
    Notice,
    List,
    BctList,
    RedeemToast,
    AddToast,
    CalcToast
  },
  data() {
    return {
      titleList: [
        {
          content: "Leverage",
        },
        {
          content: "Leverage-plus",
        },
      ],
      secondTitleList: [
        {
          content: "All",
        },
        {
          content: "USDT",
        },
        {
          content: "BUSD",
        },
        {
          content: "Others",
        },
      ],
      titleListActive: 0,
      secondTitleListActive: 0,
      farmList: [
        {
          asset: "436,560,460.71",
          debt: "2.50k",
          apy: "10.12%",
          risk: "60.12%",
        },
        {
          asset: "436,560,460.71",
          debt: "2.50k",
          apy: "10.12%",
          risk: "60.12%",
        },
      ],
      bctLendList: [
        {
          type: 2,
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
      redeemToastShow:false,
      addToastShow:false,
      calcToastShow:true
    };
  },
  methods: {
    titleListClick(index) {
      this.titleListActive = index;
    },
    secondTitleListClick(index) {
      this.secondTitleListActive = index;
    },
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

.mobile-overview-tip {
  border: 0.0625rem dashed #fff;
  width: 95%;
  margin: 0 auto;
  height: 1.875rem;
  line-height: 1.875rem;
  padding: 0 0.625rem 0 1.25rem;
  box-sizing: border-box;
  margin-bottom: 1.875rem;
}
.mobile-overview-tip-img {
  width: 0.5rem;
  margin-left: 0.375rem;
}

.mr15 {
  margin-right: 0.9375rem;
}
.mr11 {
  margin-right: 0.6875rem;
}
.mobile-title-unactive p {
  font-size: 0.9375rem;
}
.mobile-second-title-unactive p {
  font-size: 0.8125rem;
}
.mobile-second-title {
  margin-top: 1.125rem;
  margin-bottom: 1.125rem;
}
.mobile-title-Active {
  color: #9439ff;
  font-size: 1.25rem !important;
  font-weight: bold;
}
.mobile-second-title-Active {
  color: #9439ff;
  font-size: 1.125rem !important;
  font-weight: bold;
}
.mobile-overview {
  margin-top: 3.125rem;
}
.mobile-baseline {
  align-items: baseline;
}
</style>
