<template>
  <div id="app">
    <TopHeader @change-login-toast='changeLoginToast'/>
    <router-view></router-view>
    <div class="global-big-wrap" v-if="loginIng">
      <WalletToast @change-login-toast='changeLoginToast'></WalletToast>
    </div>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader.vue";
import WalletToast from "./components/Wallet-toast.vue";

export default {
  name: "App",
  data(){
    return {
      loginIng: false
    }
  },
  methods:{
    changeLoginToast(){
      this.loginIng = !this.loginIng
    }
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
