<template>
  <div id="app">
    <TopHeader />
    <router-view></router-view>
    <div class="global-big-wrap" v-if="loginIng">
      <WalletToast @change-login-toast="changeLoginToast"></WalletToast>
    </div>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import WalletToast from "./components/Wallet-toast.vue";
import { mapState,mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
    };
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      loginIng: state => state.globalMmask.loginIng,
    }),
  },
  mounted(){
    console.log(this.loginIng)
  },
  methods: {
    ...mapMutations({
      changeLoginToast: 'changeGlobalMask' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  },
  components: {
    TopHeader,
    WalletToast,
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
}
</style>
