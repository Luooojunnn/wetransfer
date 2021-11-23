<template>
  <div class="mobile-footer row flex-sp">
    <div
      :class="[
        'mobile-footer-item',
        index == idx ? 'mobile-footer-item-active' : '',
      ]"
      v-for="(item, index) in footerList"
      :key="index"
      @click="toMobilePage(item.text, index)"
    >
      <img :src="item.src" alt="" class="mobile-footer-img" />
      {{ item.text }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curAc: "Home",
      footerList: [
        {
          src: require("../../assets/mobile-home.png"),
          text: "Home",
        },
        {
          src: require("../../assets/mobile-lend.png"),
          text: "Lend",
        },
        {
          src: require("../../assets/mobile-farm.png"),
          text: "Farm",
        },
      ],
      idx: 0,
    };
  },
  mounted() {
    // 刷新页面时的tab-active
    let that = this;
    setTimeout(function () {
      let no = that.$route.path.replace("/mobile", "");
      no == "Home"
        ? (that.idx = 0)
        : no == "Lend"
        ? (that.idx = 1)
        : no == "Farm"
        ? (that.idx = 2)
        : 0;
    }, 100);
  },
  methods: {
    toMobilePage(page, idx) {
      this.idx = idx;
      this.curAc = "mobile" + page;
      this.$router.push({ path: this.curAc, query: {} });
    },
  },
};
</script>
<style scoped>
.mobile-footer {
  width: 100%;
  height: 5.625rem;
  background: #000;
  position: fixed;
  left: 0;
  bottom: 0rem;
  z-index: 10;
  padding: 0.3125rem 2.125rem 0;
  box-sizing: border-box;
}
.mobile-footer-img {
  width: 1.6875rem;
  margin-bottom: 0.625rem;
}
.mobile-footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18%;
}
.mobile-footer-item-active {
  background: linear-gradient(90deg, #a4e1c2 26%, #9439ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
</style>