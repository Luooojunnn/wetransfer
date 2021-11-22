<template>
  <div id="Notice-wrap">
    <div class="out-kuang row">
      <img src="../../assets/bct.png" alt="" class="notice-img" />
      <span class="notice-desc"
        >Notice: Important message notification window
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    // currentAc: 'Home'
  },
};
</script>

<style>
#Notice-wrap {
  margin-top: 5px;
}
.notice-img {
  width: 20px;
  background: linear-gradient(125deg, #80b6ff, #e539ff);
  margin-right: 10px;
}
.notice-desc {
  font-family: Barlow Condensed;
  font-weight: 500;
  font-size: 10px;
}
.out-kuang {
  margin: 0 auto;
  text-align: center;
  width: 80%;
  height: 28px;
  line-height: 28px;
  background: rgba(148, 57, 255, 0.1);
  border-radius: 16px;
}
</style>
