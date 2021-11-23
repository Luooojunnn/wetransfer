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
  margin-top: 0.3125rem;
}
.notice-img {
  width: 1.25rem;
  background: linear-gradient(125deg, #80b6ff, #e539ff);
  margin-right: 0.625rem;
}
.notice-desc {
  font-family: Barlow Condensed;
  font-weight: 500;
  font-size: 0.625rem;
}
.out-kuang {
  margin: 0 auto;
  text-align: center;
  width: 82%;
  height: 1.75rem;
  line-height: 1.75rem;
  background: rgba(148, 57, 255, 0.1);
  border-radius: 1rem;
}
</style>
