<template>
  <div>
    <Notice></Notice>
    <p class="mobile-title">High Profit Leverage Farm</p>
    <div class="mobile-main">
      <div class="row">
        <img src="../../assets/bct.png" alt="" class="mobile-position-img" />
        <p>Your position</p>
      </div>
      <div class="row flex-sp"></div>
    </div>
  </div>
</template>
<script>
import Notice from "../../components/mobile/notice";
export default {
  components: {
    Notice,
  },
  data() {
    return {
      lendShow: true,
    };
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
  padding: 0 16px;
}
.mobile-position-img {
  width: 16px;
  margin-right: 10px;
}
</style>
