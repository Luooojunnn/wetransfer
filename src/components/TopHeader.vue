<template>
  <div id="top-header">
    <div class="icon-wrap">
      <div class="top-header-icon"></div>
      <div class="deMac">DeMac</div>
    </div>
    <div class="top-header-menus">
      <div v-for="item in lists" :key="item" @click="goto(item)" :class="{ 'menus-active': item === curAc }">
        {{ item }}
      </div>
    </div>
    <div class="end-menus">
      <div class="yuyan-menus" @click="changeLanguage">
        <img src="../assets/language.png" alt="" class="mobile-wallet" />
        <span class="lan-desc">
          {{ $t("lang.changeLanguageDesc") }}
        </span>
        <!-- <span class="yuyan-menus-icon"></span> -->
      </div>
      <div class="swap-menus">
        <img src="../assets/sw.png" alt="" class="mobile-wallet" />
        <span class="sw-desc">Swap</span>
      </div>

      <div class="wallet-menus" @click="changeLoginToastFc" v-if="!userInfo.adr">
        <img src="../assets/wallet.png" alt="" class="mobile-wallet" />
        <span class="wallet-desc">Wallet</span>
      </div>
      <div v-else class="login-info-about-wallet">
        <div class="login-info-about-wallet-num">
          {{ userInfo.etherString }}
        </div>
        <div class="login-info-about-wallet-account">
          {{ userInfo.walletAdressShow }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "top-header",
  data() {
    return {
      lists: ["Home", "Lend", "Farm"],
      curAc: "Home",
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
    goto(l) {
      this.curAc = l;
      this.$router.push({ path: l, query: {} });
    },
    changeLoginToastFc() {
      this.changeLoginToast({
        toastType: 1,
      });
    },
    changeLanguage() {
      console.log(this.$i18n.locale);
      this.$i18n.locale = this.$i18n.locale === "zh-CN" ? "en-US" : "zh-CN";
    },
  },
  components: {
    // currentAc: 'Home'
  },
};
</script>

<style scoped>
#top-header {
  height: 120px;
  background: #080808;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-wrap {
  display: flex;
  flex: 1;
  align-items: baseline;
}
.icon-wrap .deMac {
  width: 84px;
  height: 27px;
  font-size: 36px;
  font-family: Barlow Condensed;
  font-weight: 800;
  color: #9439ff;
  margin-left: 17px;
}
.top-header-menus {
  flex: 2;
  display: flex;
  margin-right: 23 px;
  width: 40vw;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
}
.menus-active {
  /* width: 84px; */
  /* height: 27px; */
  font-size: 36px;
  font-family: Barlow Condensed;
  font-weight: 800;
  color: #9439ff;

  background: linear-gradient(125deg, #a4e1c2 0.5126953125%, #9439ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.top-header-icon {
  width: 50px;
  height: 50px;
  background-size: cover;
  margin-right: 17 px;
  background-image: url(../assets/icon.png);
}
.end-menus {
  display: flex;
}
.end-menus > div {
  margin-right: 10px;
}
.yuyan-menus,
.lan-desc {
  color: #9439ff;
}
.yuyan-menus-icon {
}
.login-info-about-wallet {
  padding: 3px 3px 3px 24px;
  border: 1px solid #641aff;
  box-sizing: border-box;
  border-radius: 24px;
  display: flex;
  align-items: center;
}
.login-info-about-wallet-account {
  background: red;
}
.wallet-menus,
.swap-menus,
.yuyan-menus {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  background: #131313;
  border: 1px solid #9439ff;
  border-radius: 16px;
}
.yuyan-menus {
  outline: none;
  border: none;
  background: transparent;
}
.mobile-wallet {
  width: 22px;
  height: 22px;
  margin-right: 16px;
}
.wallet-desc,
.sw-desc {
  /* width: 50px;
  height: 16px; */
  height: 22px;
  line-height: 22px;
  font-size: 20px;
  font-family: Barlow Condensed;
  font-weight: 600;
  color: #9439ff;
}
.sw-desc {
  color: #fff;
}
.swap-menus {
  background: #9439ff;
  border: 1px solid #6f2ebc;
  border-radius: 16px;
}
</style>
