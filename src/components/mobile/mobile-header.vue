<template>
  <div class="mobile-header row flex-sp">
    <div class="row">
      <div class="TopHeader-icon"></div>
      <div class="deMac purple-text f15">DeMac</div>
    </div>
    <div class="row">
      <div
        class="Wallet-menus purple-text row f13"
        @click="changeLoginToastFc"
        v-if="!userInfo.adr"
      >
        <img src="../../assets/wallet.png" alt="" class="mobile-wallet" />
        Wallet
      </div>
      <img
        src="../../assets/mobile-menu.png"
        alt=""
        class="mobile-menu"
        @click="showMenu = true"
      />
    </div>
    <!-- 弹窗 -->
    <Menu @closeToast="showMenu = false" v-if="showMenu"></Menu>
    <Invite @closeToast="showInvite = false" v-if="showInvite"></Invite>
  </div>
</template>
<script>
import Menu from "./mobile-header-menu.vue";
import Invite from "./mobile-invite-toast.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Menu,
    Invite
  },
  data() {
    return {
      showMenu: false,
      showInvite:true
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.setUserInfo.userInfo,
    }),
  },
  mounted() {
    // 刷新页面时的tab-active
    let that = this;
    setTimeout(function () {
      that.curAc = that.$route.path.replace("/", "");
    }, 100);
  },
  methods: {
    ...mapMutations({
      changeLoginToast: "changeGlobalMask", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    changeLoginToastFc() {
      this.changeLoginToast({
        toastType: 1,
      });
    },
  },
};
</script>
<style scoped>
.mobile-header {
  width: 100%;
  padding: 1.25rem 1.25rem;
  box-sizing: border-box;
}
.TopHeader-icon {
  width: 1.5625rem;
  height: 1.5625rem;
  margin-right: 0.625rem;
  background-size: cover;
  background-image: url(../../assets/icon.png);
}
.deMac {
  font-weight: bold;
}
.Wallet-menus {
  width: 4.5625rem;
  height: 1.5625rem;
  border: 0.125rem solid #8a3de5;
  border-radius: 1.5625rem;
  line-height: 1.5625rem;
  justify-content: center;
}
.mobile-wallet {
  width: 0.75rem;
  margin-right: 0.4375rem;
}
.mobile-menu {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.8125rem;
}
</style>