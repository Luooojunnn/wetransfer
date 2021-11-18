<template>
  <div class="Home-wrap">
    <Notice></Notice>
    <div class="Home-wrap-tit-wrap">
      <span class="Home-wrap-tit"> New Era for Lend & Leverage Yield Farm </span>
    </div>
    <div class="Home-tit-detail-wrap">
      <p class="Home-tit-detail">Skyrocket your payoff by maxmizing your investing utilization rate</p>
    </div>
    <div class="Home-wrap-num-detail">
      <div class="Home-wrap-num-detail-item">
        <div class="num-detail-item">
          <span>$</span>
          <span>2,748,234,980</span>
        </div>
        <div class="num-detail-item-bottom-desc">Total value locked</div>
      </div>
      <div class="Home-wrap-num-detail-item">
        <div class="num-detail-item">
          <span>$</span>
          <span>1122</span>
          <span class="num-icon">DMC</span>
        </div>
        <div class="num-detail-item">
          <span>$</span>
          <span>1122</span>
          <span class="num-icon">DMC</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notice from "../components/Notice";
export default {
  data() {
    return {};
  },
  components: {
    Notice,
  },
};
</script>
<style>
.Home-wrap-tit-wrap {
  margin-top: 23px;
}
.Home-wrap-tit {
  display: block;
  width: 603px;
  height: 128px;
  margin: 0 auto;
  font-size: 60px;
  font-family: Barlow Condensed;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(125deg, #a4e1c2 0.5126953125%, #9439ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.Home-tit-detail {
  text-align: center;
  font-size: 30px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.Home-wrap-num-detail {
  display: flex;
  justify-content: space-around;
}
.Home-wrap-num-detail-item {
  margin: 59px;
  text-align: center;
  background: rebeccapurple;
  width: 500px;
  height: 200px;
}
.num-detail-item {
  width: 412px;
  height: 55px;
  font-size: 36px;
  font-family: Barlow Condensed;
  font-weight: 800;
  color: #ffffff;
  width: 100%;
}
.num-detail-item-bottom-desc {
  /* width: 232px;
height: 23px; */
  font-size: 32px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.8;
  background: linear-gradient(0deg, #a4e1c2 0.5126953125%, #9439ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.num-icon{
    width: 33px;
height: 17px;
font-size: 22px;
font-family: Barlow Condensed;
font-weight: 500;
color: #FFFFFF;
opacity: 0.8;
background: linear-gradient(125deg, #A4E1C2 0.5126953125%, #9439FF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
</style>