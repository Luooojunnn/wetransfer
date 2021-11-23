<template>
  <div id="app">
    <TopHeader v-if="!mobileShow" />
    <MobileTopHeader v-if="mobileShow" />
    <router-view></router-view>
    <div class="global-big-wrap" v-if="loginIng">
      <WalletToast  v-if="toastType === 1"></WalletToast>
      <DepositToast  v-if="toastType === 2"></DepositToast>
    </div>
    <MobileMenu v-if="mobileShow"></MobileMenu>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import MobileTopHeader from "./components/mobile/mobile-header.vue";
import MobileMenu from "./components/mobile/mobile-menu";
import WalletToast from "./components/Wallet-toast.vue";
import DepositToast from "./components/Deposit-toast";
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
    DepositToast
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
  min-width: 1920px;
    overflow-x: scroll;
}
.global-big-wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background: #fff; */
  filter: 0.2;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
}
</style>
