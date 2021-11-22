<template>
  <div>
    <div id="Wallet-toast">
      <div class="Wallet-toast-title">
        <span class="Wallet-toast-title-desc">{{ title }}</span>
        <img src="../assets/close.png" alt="" class="Wallet-toast-title-notice-img" @click="changeLoginToastFc" />
      </div>
      <div class="Wallet-toast-detail-wrap">
        <div class="Wallet-toast-detail-wrap-item">
          <div v-if="!isLogin" class="Wallet-toast-detail-wrap-item-no-login" @click="showLoginMetaMask">
            <div>
              <img src="../assets/huli.png" alt="" class="Wallet-toast-title-notice-huli" />
            </div>
            <div class="Wallet-toast-title-notice-metamask">MetaMask</div>
          </div>
          <div class="already-login-Connect-Wallet" v-else>
            <p class="Connect-Wallet-tips">Connected MetaMask</p>
            <div class="lanquan-wrap">
              <span class="lanse-quan"></span>
              <span class="lanse-quan-desc">{{ walletAdressShow }}</span>
            </div>
            <div class="Copy-Address-BSC-wrap">
              <div class="Copy-wrap" @click="copyData">
                <img src="../assets/copy.png" alt="" class="copy-img-wallet-toast" />
                <p class="Copy-Address">Copy Address</p>
              </div>
              <div class="BSC-wrap">
                <img src="../assets/share.png" alt="" class="copy-img-wallet-toast" />
                <p class="BSC">View on BSC</p>
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
import { getSigner } from "../utils/index";
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
      setUserInfo: 'setUserInfo'
    }),
    changeLoginToastFc(){
      this.changeLoginToast({
        toastType: -1
      })
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
          walletAdressShow: this.walletAdressShow
        })
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

<style>
#Wallet-toast {
  box-sizing: border-box;
  padding: 20px 23px;
  width: 490px;
  background: #000000;
  opacity: 0.9;
  border-radius: 20px;
  margin: 119px auto;
}
.Wallet-toast-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
}
.Wallet-toast-title-desc {
  width: 154px;
  height: 22px;
  font-size: 30px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  flex: 3;
}
.Wallet-toast-title-notice-img {
  width: 28px;
  height: 28px;
  cursor: pointer;
}
.Wallet-toast-detail-wrap {
  width: 450px;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid;
  border-radius: 20px;
  border-image: linear-gradient(157deg, #a4e1c2, #9439ff) 10 10;
  background-image: linear-gradient(157deg, #a4e1c2, #9439ff);
  padding: 1px;
  box-sizing: border-box;
}
.Wallet-toast-detail-wrap-item {
  background: #000;
  width: 446px;
  border-radius: 20px;
  padding: 18px 41px;
  box-sizing: border-box;
}
.Wallet-toast-title-notice-huli {
  width: 50px;
  height: 45px;
}
.Wallet-toast-title-notice-metamask {
  font-size: 30px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  margin-left: 87px;
}
#global-back-toast {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(5px);
}
.Connect-Wallet-tips {
  font-size: 18px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.lanse-quan {
  display: inline-block;
  width: 21px;
  height: 21px;
  background: #592cbd;
  border: 1px solid #000000;
  border-radius: 50%;
  vertical-align: text-top;
}
.lanse-quan-desc {
  margin-left: 15px;
}
.Copy-Address {
  font-size: 20px;
  font-family: Barlow;
  font-weight: normal;
  line-height: 24px;
  color: #ffffff;
  text-shadow: 0px 0px 12px rgba(105, 26, 199, 0.16);
  opacity: 1;
}
.copy-img-wallet-toast {
  width: 20px;
  height: 23px;
  margin-right: 15px;
  vertical-align: sub;
}
.Copy-Address,
.BSC {
  display: inline-block;
  /* width: 84px;
height: 17px; */
  font-size: 18px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
  white-space: pre;
}
.BSC-wrap {
  margin-left: 52px;
}
.Copy-Address-BSC-wrap {
  display: flex;
}
.Wallet-toast-detail-wrap-item-no-login {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.lanquan-wrap,
.Copy-Address-BSC-wrap {
  margin-top: 20px;
}
.Copy-wrap,
.BSC-wrap {
  cursor: pointer;
}
</style>
