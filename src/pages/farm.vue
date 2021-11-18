<template>
  <div class="page">
    <div class="main">
      <div class="notic row">
        <img src="../assets/bct.png" alt="" class="notice-img" />
        <p>Notice：Important message notification window</p>
      </div>
      <div class="page-big-tit">
        <span class="big-tit">High Profit Leverage Farm</span>
      </div>
      <!-- <img src="../assets/home-title.png" alt="" class="home-title" /> -->
      <div class="home-position">
        <div class="position-title row">
          <img src="../assets/bct.png" alt="" class="notice-img" />
          <p>Your position</p>
        </div>
      </div>
      <div class="bct row">
        <div class="row">
          <img src="../assets/bct.png" alt="" class="bct-img" />
          <p>BCT/usdt</p>
        </div>
        <div class="row">
          <p>5MDX+6DEMA</p>

          <img src="../assets/bct.png" alt="" class="gift-img" />
        </div>
      </div>
      <div class="bct-box">
        <table class="table">
          <tr>
            <th width="10%">#</th>
            <th width="25%">Asset</th>
            <th width="12%">Debt</th>
            <th width="12%">
              APY<img src="../assets/tip.png" alt="" class="tip-img" />
            </th>
            <th width="12%">Risk</th>
            <th width="29%"></th>
          </tr>
          <tr v-for="(item, index) in bctList" :key="index">
            <td>{{ item.no }}</td>
            <td>
              {{ item.asset }}
              <p class="f14">USDT</p>
            </td>
            <td>
              {{ item.debt }}
              <p class="f14">USDT</p>
            </td>
            <td>
              {{ item.apy }}
              <p class="f14">%</p>
            </td>
            <td>
              {{ item.risk }}
              <p class="f14">%</p>
            </td>
            <td class="row" style="justify-content: flex-end">
              <div class="table-btn">Add</div>
              <div class="table-btn">Redeem</div>
            </td>
          </tr>
        </table>
      </div>
      <div class="farm-title">Farm</div>
      <div class="farm-content">
        <div class="farm-left">
          <div class="farm-left-top row">
            <p>Leverage</p>
            <p>Leverage-Plus</p>
          </div>
          <ul class="farm-list row">
            <li class="farm-active">ALL</li>
            <li>USDT</li>
            <li>BUSD</li>
            <li>Others</li>
          </ul>
        </div>
        <div class="farm-right">
          <div class="farm-ipt-box">
            <input type="text" class="farm-ipt" />
            <img src="../assets/search-icon.png" alt="" class="ipt-img" />
          </div>
          <div class="farm-right-bottom">
            <img src="../assets/bct.png" alt="" class="farm-img" />
            <p>Impermanent Loss Calculator</p>
          </div>
        </div>
      </div>

      <div class="farm-table">
        <div class="farm-table-thead row">
          <div class="pool">Pool</div>
          <div class="tvl">tvl</div>
          <div class="dema">DEMA/w</div>
          <div class="apy">
            APY<img src="../assets/tip.png" alt="" class="tip-img" />
          </div>
          <div class="last"></div>
        </div>
        <div
          class="farm-table-item row"
          v-for="(item, index) in farmTable"
          :key="index"
        >
          <div class="pool row">
            <img src="../assets/bct.png" alt="" class="farm-table-item-img" />{{
              item.pool
            }}
          </div>
          <div class="tvl">{{ item.tvl }}</div>
          <div class="dema">{{ item.dema }}</div>
          <div class="apy">
            {{ item.apy }}<img src="../assets/tip.png" alt="" class="tip-img" />
          </div>
          <div class="last">
            <div class="last-btn purple-text">3x Farm</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom row">
      <p>Docs</p>
      <p>faq</p>
      <p>Audit</p>
      <div class="row">
        <img src="../assets/bct.png" alt="" class="bottom-icon" />
        <img src="../assets/bct.png" alt="" class="bottom-icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bctList: [
        {
          no: "12347",
          asset: "436,560,460.71",
          debt: "2.50k",
          apy: "350.12",
          risk: "60.12",
        },
        {
          no: "12347",
          asset: "436,560,460.71",
          debt: "2.50k",
          apy: "350.12",
          risk: "60.12",
        },
      ],
      farmTable: [
        {
          pool: "BCT/usdt",
          tvl: "256,571,210.52",
          dema: "9,000",
          apy: "2033.12%",
        },
        {
          pool: "BCT/usdt",
          tvl: "256,571,210.52",
          dema: "9,000",
          apy: "2033.12%",
        },
      ],
    };
  },
};
</script>

<style>
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
  margin-left: 12px;
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
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 20px;
  content: "";
  z-index: -1;
}

.farm-table,
.table {
  width: 100%;
  text-align: center;
}
.table th {
  font-size: 24px;
}
.table td {
  line-height: 26px;
  height: 74px;
  font-size: 28px;
}
.table-btn {
  background: rgba(148, 57, 255, 0.1);
  color: #9439ff;
  min-width: 80px;
  padding: 12px;
  border: 1px solid #9439ff;
  border-radius: 16px;
  text-align: center;
  font-size: 20px;
}
.table td .table-btn:first-child {
  margin-right: 17px;
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
  margin-bottom: 40px;
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
  margin-bottom: 22px;
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
  text-align: center;
  font-size: 24px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px 0;
  background: url("../assets/bg.png") center center no-repeat;
  background-size: cover;
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
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 28px;
  content: "";
  z-index: -1;
}
.farm-table-item-img {
  width: 49px;
  height: 30px;
  margin-right: 18px;
  margin-left: 12px;
}
.farm-table-item .tvl,
.farm-table-item .dema,
.farm-table-item .apy {
  font-size: 28px;
}

.farm-table .pool {
  width: 25%;
}

.farm-table .tvl {
  width: 20%;
}

.farm-table .dema {
  width: 15%;
}

.farm-table .apy {
  width: 25%;
}

.farm-table .last {
  width: 15%;
}

.farm-table .last-btn {
  width: 100px;
  height: 40px;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 16px;
  text-align: center;
  line-height: 40px;
  float: right;
  margin-right: 8px;
  font-size: 20px;
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
.page-big-tit .big-tit{
  width: 549px;
height: 57px;
font-size: 60px;
font-family: Barlow Condensed;
font-weight: 600;
color: #FFFFFF;
text-align: center;
} 
</style>