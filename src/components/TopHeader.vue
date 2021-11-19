<template>
  <div id="TopHeader">
    <div class="icon-wrap">
      <div class="TopHeader-icon"></div>
      <div class="deMac">DeMac</div>
    </div>
    <div class="TopHeader-menus">
      <div v-for="item in lists" :key="item" @click="goto(item)" :class="{ 'menus-active': item === curAc }">
        {{ item }}
      </div>
    </div>
    <div class="end-menus">
      <div class="yuyan-menus">
        <span class="yuyan-menus-icon"></span>
        English
      </div>
      <div class="Swap-menus">Swap</div>
      <div class="Wallet-menus" @click="showLoginToMetaMask">Wallet</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {
      lists: ["Home", "Lend", "Farm", "Bonus"],
      curAc: "Home",
    };
  },
  methods: {
    goto(l) {
      this.curAc = l;
      this.$router.push({ path: l, query: {} });
    },
    
    
    async showLoginToMetaMask() {
      this.$emit('change-login-toast')

      //       const provider = new this.$ethers.providers.Web3Provider(window.ethereum)
      // //Metamask插件支持签名交易和信息，来发送交易信息改变区块链的状态
      // //因此需要一个账户联名
      // const signer = provider.getSigner()
      // console.log(signer)
      // console.log(this.$ethers)
      // let provider = this.$ethers.getDefaultProvider('ropsten');
      // console.log(provider)
      // let provider = new this.$ethers.providers.Web3Provider(web3.currentProvider);
    },
  },
  components: {
    // currentAc: 'Home'
  },
};
</script>

<style>
#TopHeader {
  height: 120px;
  background: #080808;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.icon-wrap {
  display: flex;
}
.icon-wrap .deMac {
  width: 84px;
  height: 27px;
  font-size: 36px;
  font-family: Barlow Condensed;
  font-weight: 800;
  color: #9439ff;
}
.TopHeader-menus {
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
.TopHeader-icon {
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
.yuyan-menus {
  color: #9439ff;
}
.yuyan-menus-icon {
}
</style>
