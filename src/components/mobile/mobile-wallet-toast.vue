<template>
  <div class="toast-mask">
    <div id="Wallet-toast" :class="['mobile-toast-bg', isLogin ? 'h231' : '']">
      <div class="mobile-close-box row flex-sp">
        <span class="f15">{{ title }}</span>
        <img
          src="../../assets/close.png"
          alt=""
          class="Wallet-toast-title-notice-img"
          @click="changeLoginToastFc"
        />
      </div>
      <div class="Wallet-toast-detail-wrap">
        <div class="Wallet-toast-detail-wrap-item">
          <div
            v-if="!isLogin"
            class="Wallet-toast-detail-wrap-item-no-login"
            @click="showLoginMetaMask"
          >
            <div>
              <img
                src="../../assets/huli.png"
                alt=""
                class="Wallet-toast-title-notice-huli"
              />
            </div>
            <div class="Wallet-toast-title-notice-metamask">MetaMask</div>
          </div>
          <div class="already-login-Connect-Wallet-box" v-else>
            <div class="already-login-Connect-Wallet">
              <p class="Connect-Wallet-tips">Connected MetaMask</p>
              <div class="lanquan-wrap row">
                <span class="lanse-quan"></span>
                <span class="lanse-quan-desc f13">{{ walletAdressShow }}</span>
              </div>
              <div class="Copy-Address-BSC-wrap">
                <div class="Copy-wrap row" @click="copyData">
                  <img
                    src="../../assets/copy.png"
                    alt=""
                    class="copy-img-wallet-toast"
                  />
                  <p class="Copy-Address">Copy Address</p>
                </div>
                <div class="BSC-wrap row">
                  <img
                    src="../../assets/share.png"
                    alt=""
                    class="copy-img-wallet-toast"
                  />
                  <p class="BSC">View on BSC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="global-back-toast"></div> -->
  </div>
</template>

<script>
import { getSigner } from "../../utils/index";
import { mapMutations } from "vuex";

export default {
  props: {
    // isLogin: Boolean
  },
  data() {
    return {
      title: "Connect Wallet",
      isLogin: false,
      walletAdress: "",
      walletAdressShow: "", // 展示地址打码
    };
  },
  mounted() {},
  methods: {
    ...mapMutations({
      changeLoginToast: "changeGlobalMask", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
      setUserInfo: "setUserInfo",
    }),
    changeLoginToastFc() {
      this.changeLoginToast({
        toastType: -1,
      });
    },
    async showLoginMetaMask() {
      const res = await getSigner(this);
      if (res) {
        this.title = "Account";
        this.isLogin = true;
        const adr = res.adr;
        const etherString = res.etherString;

        this.walletAdress = adr;
        this.walletAdressShow = adr.slice(0, 4) + "..." + adr.slice(-4);
        this.setUserInfo({
          adr,
          etherString,
          walletAdressShow: this.walletAdressShow,
        });
        // this.$emit("change-isLogin-status", res);
      }
      // const provider = new this.$ethers.providers.Web3Provider(window.ethereum, "any");
      // // Prompt user for account connections
      // await provider.send("eth_requestAccounts", []);
      // const signer = provider.getSigner();
      // console.log("Account:", await signer.getAddress());
    },
    copyData() {
      //如果需要回调：
      this.$copyText(this.walletAdress).then(
        () => {
          this.$message({
            message: "复制成功",
            type: "success",
          });
        },
        function () {
          this.$message.error("复制失败");
        }
      );
    },
  },
};
</script>

<style scoped>
#Wallet-toast {
  height: 10.3125rem;
  padding-top: 1.5rem;
}
.h231 {
  height: 14.4375rem !important;
}
.mobile-close-box {
  margin-bottom: 1.875rem;
  color: #fff;
}
.Wallet-toast-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.625rem;
}
.Wallet-toast-title-desc {
  width: 9.625rem;
  height: 1.375rem;
  font-size: 1.875rem;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  flex: 3;
}
.Wallet-toast-title-notice-img {
  width: 1.1875rem;
  height: 1.1875rem;
  cursor: pointer;
}
.Wallet-toast-detail-wrap {
  /* width: 28.125rem;
  background: rgba(148, 57, 255, 0.1);
  border: 0.0625rem solid;
  border-radius: 1.25rem;
  border-image: linear-gradient(157deg, #a4e1c2, #9439ff) 10 10;
  background-image: linear-gradient(157deg, #a4e1c2, #9439ff);
  padding: 0.0625rem;
  box-sizing: border-box; */
}
.Wallet-toast-detail-wrap-item {
  /* background: #000;
  width: 27.875rem;
  border-radius: 1.25rem;
  padding: 1.125rem 2.5625rem;
  box-sizing: border-box; */
}
.Wallet-toast-title-notice-huli {
  width: 1.5625rem;
  height: 1.4375rem;
}
.Wallet-toast-title-notice-metamask {
  font-size: 0.9375rem;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  margin-left: 5rem;
}
#global-back-toast {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(0.3125rem);
}
.Connect-Wallet-tips {
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.lanse-quan {
  display: inline-block;
  width: 0.625rem;
  height: 0.625rem;
  background: #592cbd;
  border: 1px solid #000000;
  border-radius: 50%;
  vertical-align: text-top;
}
.lanse-quan-desc {
  margin-left: 0.375rem;
  color: #fff;
}
.Copy-Address {
  font-family: Barlow;
  font-weight: normal;
  color: #ffffff;
  text-shadow: 0rem 0rem 0.75rem rgba(105, 26, 199, 0.16);
  opacity: 1;
}
.copy-img-wallet-toast {
  width: 9x;
  height: 0.625rem;
  margin-right: 0.375rem;
  vertical-align: sub;
}
.Copy-Address,
.BSC {
  display: inline-block;
  /* width: 5.25rem;
height: 1.0625rem; */
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  white-space: pre;
}
.BSC-wrap {
  margin-left: 3.25rem;
}
.Copy-Address-BSC-wrap {
  display: flex;
}
.Wallet-toast-detail-wrap-item-no-login {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 2.25rem;
  padding: 0.375rem 0.9375rem;
  box-sizing: border-box;
  background: #10071b;
  border: 1px solid #8032dd;
  border-radius: 0.5rem;
}
.lanquan-wrap,
.Copy-Address-BSC-wrap {
  margin-top: 0.8125rem;
}
.Copy-wrap,
.BSC-wrap {
  cursor: pointer;
}
.already-login-Connect-Wallet-box {
  width: 100%;
  padding: 1px;
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
}
.already-login-Connect-Wallet {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 0.5rem;
  padding: 0.5rem 0.625rem;
  box-sizing: border-box;
  font-size: 0.625rem;
}
</style>
