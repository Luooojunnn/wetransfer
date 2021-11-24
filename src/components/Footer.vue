<template>
  <div class="bottom row">
    <p class="link-txt">Docs</p>
    <p class="link-txt">faq</p>
    <p class="link-txt">Audit</p>
    <div class="row">
      <img src="../assets/ss.png" alt="" class="bottom-icon" />
      <img src="../assets/wechat.png" alt="" class="bottom-icon" />
      <img src="../assets/tw.png" alt="" class="bottom-icon" />
      <img src="../assets/sy.png" alt="" class="bottom-icon" />
      <img src="../assets/git.png" alt="" class="bottom-icon" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
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
  cursor: pointer;

}
.bottom-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
}
.link-txt {
  height: 15px;
  font-size: 20px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #6b6b6b;
  cursor: pointer;

}
</style>
