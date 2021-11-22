<template>
  <div id="app">
    <!-- <TopHeader /> -->
    <router-view></router-view>
    <div class="global-big-wrap" v-if="loginIng">
      <WalletToast  v-if="toastType === 1"></WalletToast>
      <DepositToast  v-if="toastType === 2"></DepositToast>
    </div>
  </div>
</template>

<script>
// import TopHeader from "./components/TopHeader.vue";
import WalletToast from "./components/Wallet-toast.vue";
import DepositToast from "./components/Deposit-toast";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {};
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
  },
  methods: {
    ...mapMutations({
      changeLoginToast: "changeGlobalMask", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
  },
  components: {
    // TopHeader,
    WalletToast,
    DepositToast
  },
};
</script>

<style>
body {
  background: #111111;
  color: #fff;
}
* {
  padding: 0;
  margin: 0;
}
#app {
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
