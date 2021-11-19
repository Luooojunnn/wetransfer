<template>
  <div class="bottom row">
    <p>Docs</p>
    <p>faq</p>
    <p>Audit</p>
    <div class="row">
      <img src="../assets/bct.png" alt="" class="bottom-icon" />
      <img src="../assets/bct.png" alt="" class="bottom-icon" />
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
}
.bottom-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>