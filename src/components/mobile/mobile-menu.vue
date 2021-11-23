<template>
  <div class="mobile-footer row flex-sp">
    <div
      class="mobile-footer-item"
      v-for="(item, index) in footerList"
      :key="index"
      @click="toMobilePage(item.text)"
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
      curAc: "home",
      footerList: [
        {
          src: require("../../assets/mobile-home.png"),
          text: "home",
        },
        {
          src: require("../../assets/mobile-lend.png"),
          text: "lend",
        },
        {
          src: require("../../assets/mobile-farm.png"),
          text: "farm",
        },
      ],
    };
  },
  methods: {
    toMobilePage(page) {
      this.curAc = "mobile" + page;
      this.$router.push({ path: this.curAc, query: {} });
    },
  },
};
</script>
<style scoped>
.mobile-footer {
  width: 100%;
  height: 90px;
  background: #000;
  position: fixed;
  left: 0;
  bottom: 0px;
  z-index: 10;
  padding: 5px 34px 0;
  box-sizing: border-box;
}
.mobile-footer-img {
  width: 27px;
  margin-bottom: 10px;
}
.mobile-footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>