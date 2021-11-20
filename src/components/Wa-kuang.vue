<template>
  <div id="Wa-kuang-wrap">
    <div class="Wa-kuang-toast-title">
      <span class="Wa-kuang-toast-title-desc">{{ title }}</span>
      <img src="../assets/close.png" alt="" class="Wa-kuang-toast-title-notice-img" />
    </div>
    <div class="farm-table-item row wakuang-change-ipt-wrap">
      <div style="width: 5%">
        <img src="../assets/list-icon.png" alt="" class="wakuang-list-icon" />
      </div>
      <div class="wakuang-pool">
        <input type="number" value="123" class="wakuang-btc-wrap" />
      </div>
      <div class="wakuang-last">BTC</div>
    </div>
    <el-slider v-model="value1" :step="10" show-stops> </el-slider>

    <div class="farm-table-item row wakuang-change-ipt-wrap">
      <div style="width: 5%">
        <img src="../assets/list-icon.png" alt="" class="wakuang-list-icon" />
      </div>
      <div class="wakuang-pool">
        <input type="number" value="123" class="wakuang-btc-wrap" />
      </div>
      <div class="wakuang-last">BTC</div>
    </div>
    <el-slider v-model="value2" :step="10" show-stops> </el-slider>

    <div class="wakuang-Leverage-wrap">
      <span class="wakuang-Leverage"> Leverage </span>
      <div class="wakuang-Leverage-slider">
        <el-slider v-model="value1" :step="10" show-stops> </el-slider>
      </div>
    </div>

    <div class="wakuang-available-tips">
      <span>Remaining BTC/BUSD available:</span>
      <span>100.00231568 BTC</span>
    </div>

    <div class="wakuang-Optimum-wrap">
      <span class="wakuang-Optimum">Borrow</span>
      <div class="wakuang-Optimum-item">
        <div>Optimum</div>
        <div>BTC</div>
        <div>BUSD</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "BTC/BUSD",
      value1: 0,
      value2: 0,
    };
  },
};
</script>

<style>
#Wa-kuang-wrap {
  /* width: 490px;
  background: #000000;
  opacity: 0.9;
  border-radius: 20px; */

  box-sizing: border-box;
  padding: 20px 23px;
  width: 490px;
  background: #000000;
  opacity: 0.9;
  border-radius: 20px;
  margin: 119px auto;
}
.Wa-kuang-toast-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  /* padding: 55px 28px 39px;  */
}
.Wa-kuang-toast-title-desc {
  width: 154px;
  font-size: 30px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  flex: 3;
}
.Wa-kuang-toast-title-notice-img {
  width: 28px;
  height: 28px;
  cursor: pointer;
}
.btc-change-wrap {
  text-align: center;
  font-size: 24px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px 0;
  background: url("../assets/bg.png") center center no-repeat;
  background-size: cover;
}
.wakuang-list-icon {
  width: 34px;
  height: 34px;
}
.wakuang-pool {
  font-size: 24px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.wakuang-last {
  /* width: 38px;
height: 22px; */
  font-size: 30px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.wakuang-change-ipt-wrap {
  padding: 6px 16px 10px;
}
.wakuang-btc-wrap {
  border: none;
  background: none;
  color: #fff;
}
.wakuang-Leverage-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wakuang-Leverage {
  background: #000000;
  opacity: 0.9;
  border-radius: 20px;
}
.wakuang-Leverage-slider {
  width: 318px;
  display: inline-block;
}
.wakuang-available-tips {
  display: flex;
  justify-content: space-between;
}
.wakuang-available-tips > span {
  font-size: 16px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
}
.wakuang-Optimum-wrap {
  display: flex;
}
.wakuang-Optimum {
  font-size: 18px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.wakuang-Optimum-item {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.wakuang-Optimum-item > div {
  font-size: 18px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 16px;
  width: 91px;
  height: 41px;
  line-height: 41px;
  text-align: center;
}
.wakuang-Optimum-item > div:hover{
  cursor: pointer;
}
</style>
