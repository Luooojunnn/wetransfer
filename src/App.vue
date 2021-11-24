<template>
  <div id="app" :class="!mobileShow ? 'min1920' : ''">
    <TopHeader v-if="!mobileShow" />
    <MobileTopHeader v-if="mobileShow" />
    <router-view></router-view>
    <!-- <div class="global-big-wrap" v-if="loginIng"> -->
      <WalletToast v-if="!mobileShow&&toastType === 1"></WalletToast>
      <MobileWalletToast v-if="mobileShow&&toastType === 1"></MobileWalletToast>
      <!-- <DepositToast v-if="toastType === 2"></DepositToast> -->
    <!-- </div> -->
    <MobileMenu v-if="mobileShow"></MobileMenu>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import MobileTopHeader from "./components/mobile/mobile-header.vue";
import MobileMenu from "./components/mobile/mobile-menu";
import WalletToast from "./components/Wallet-toast.vue";
import MobileWalletToast from "./components/mobile/mobile-wallet-toast";
// import DepositToast from "./components/Deposit-toast";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      mobileShow: false,
    };
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      loginIng: (state) => state.globalMmask.loginIng,
      toastType: (state) => state.globalMmask.toastType,
    }),
  },
  mounted() {
    console.log(this.loginIng);
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    if (flag) {
      this.mobileShow = true;
    }
  },
  methods: {
    ...mapMutations({
      changeLoginToast: "changeGlobalMask", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
  },
  components: {
    TopHeader,
    MobileTopHeader,
    MobileMenu,
    WalletToast,
    // DepositToast,
    MobileWalletToast
  },
};
</script>

<style scoped>
body {
  background: #111111;
  color: #fff;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  background: #000;
}
.min1920 {
  min-width: 1920px;
  overflow-x: scroll;
}

</style>
