<template>
  <div class="mobile-header row flex-sp">
    <div class="row">
      <div class="TopHeader-icon"></div>
      <div class="deMac purple-text">DeMac</div>
    </div>
    <div class="row">
      <div class="Wallet-menus purple-text row" @click="changeLoginToast">
        <img src="../../assets/wallet.png" alt="" class="mobile-wallet" />
        Wallet
      </div>
      <img src="../../assets/mobile-menu.png" alt="" class="mobile-menu" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeLoginToast() {},
  },
};
</script>
<style scoped>
.mobile-header {
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
}
.TopHeader-icon {
  width: 30px;
  height: 30px;
  margin-right: 20px;
  background-size: cover;
  background-image: url(../../assets/icon.png);
}
.deMac {
  font-weight: bold;
}
.Wallet-menus {
  width: 116px;
  height: 30px;
  border: 2px solid #8a3de5;
  border-radius: 25px;
  line-height: 30px;
  justify-content: center;
}
.mobile-wallet {
  width: 20px;
  margin-right: 10px;
}
.mobile-menu {
  width: 30px;
  height: 30px;
  margin-left: 24px;
}
</style>