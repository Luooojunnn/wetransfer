<template>
  <div>
    <Notice></Notice>
    <p class="mobile-title f20">High Profit Leverage Farm</p>
    <div class="mobile-main">
      <div class="row 14">
        <img src="../../assets/bct.png" alt="" class="mobile-position-img" />
        <p>Your position</p>
      </div>
      <div v-for="(item, index) in farmList" :key="index">
        <List mobilePage="farm" :list="item"></List>
      </div>
      <!-- 总览 -->
      <div class="mobile-overview">
        <div class="row">
          <div
            v-for="(item, index) in titleList"
            :key="index"
            class="mr20"
            @click="titleListClick(index)"
          >
            <p :class="[index == titleListActive ? 'mobile-title-Active' : '']">
              {{ item.content }}
            </p>
          </div>
        </div>
        <div class="mobile-second-title row">
          <div
            v-for="(item, index) in secondTitleList"
            :key="index"
            class="mr20"
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
  margin-top: 24px;
  margin-bottom: 62px;
}
.mobile-main {
  padding: 0 16px 60px;
}
.mobile-position-img {
  width: 16px;
  margin-right: 10px;
}

.mobile-overview-tip {
  border: 1px dashed #fff;
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 10px 0 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.mobile-overview-tip-img {
  width: 8px;
  margin-left: 6px;
}
.mobile-title-Active {
  color: #9439ff;
  font-size: 22px;
  font-weight: bold;
}
.mr20 {
  margin-right: 20px;
}
.mobile-second-title {
  margin: 20px 0;
}
.mobile-second-title-Active {
  color: #9439ff;
  font-size: 20px;
  font-weight: bold;
}
.mobile-overview {
  margin-top: 50px;
}
</style>
