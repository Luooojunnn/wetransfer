<template>
  <div id="Notice-wrap">
    <div class="out-kuang">
      <img src="../assets/bct.png" alt="" class="notice-img" />
      <span class="notice-desc">Notice: Important message notification window </span>
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
  },
  components: {
    // currentAc: 'Home'
  },
};
</script>

<style>
#Notice-wrap {
}
.notice-img {
  vertical-align: sub;
  width: 23px;
  height: 27px;
  background: linear-gradient(125deg, #80b6ff, #e539ff);
}
.notice-desc {
  width: 528px;
  height: 23px;
  font-size: 24px;
  font-family: Barlow Condensed;
  font-weight: 500;
  color: #ffffff;
}
.out-kuang {
  margin: 0 auto;
  text-align: center;
  width: 870px;
  height: 50px;
  line-height: 50px;
  background: rgba(148, 57, 255, 0.1);
  border-radius: 16px;
}
</style>
