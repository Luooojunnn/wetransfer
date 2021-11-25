<template>
  <div class="toast-mask">
    <div class="mobile-toast-bg">
      <div class="mobile-close-box">
        <img
          src="../../assets/close.png"
          alt=""
          class="mobile-toast-close-img"
          @click="closeToast"
        />
      </div>
      <div class="mobile-language-box row">
        <div
          @click="changeMenu(index)"
          v-for="(item, index) in menu"
          :key="index"
          :class="[
            'mobile-langusge-item',
            idx == index ? 'mobile-langusge-item-active' : '',
          ]"
        >
          {{ item }}
        </div>
      </div>
      <div class="mobile-menu-icons">
        <div
          class="row mobile-menu-icon-item"
          v-for="(item, index) in menuIcons"
          :key="index"
        >
          <img :src="item.icon" alt="" />
          <p>{{ item.text }}</p>
        </div>
      </div>
      <div class="mobile-menu-footer row flex-sp">
        <p>audit</p>
        <p>doc</p>
        <p>faq</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: ["Englist", "中文"],
      idx: 0,
      menuIcons: [
        {
          icon: require("../../assets/telegram-icon.png"),
          text: "Telegram",
        },
        {
          icon: require("../../assets/wechat-icon.png"),
          text: "Wechat",
        },
        {
          icon: require("../../assets/twitter-icon.png"),
          text: "Twitter",
        },
        {
          icon: require("../../assets/discord-icon.png"),
          text: "Discord",
        },
        {
          icon: require("../../assets/github-icon.png"),
          text: "Github",
        },
      ],
    };
  },
  methods: {
    closeToast() {
      this.$emit("closeToast");
    },
    changeMenu(idx) {
      this.idx = idx;
    },
  },
};
</script>
<style scoped>
.mobile-toast-bg {
  height: 21rem;
  padding-top: 0.9375rem;
}
.mobile-close-box {
  text-align: right;
  margin-bottom: 1.75rem;
}
.mobile-language-box {
  width: 10.75rem;
  height: 2.4375rem;
  line-height: 2.4375rem;
  border: 0.0625rem solid #8a3de5;
  color: #8a3de5;
  margin: 0 auto;
  font-size: 0.75rem;
  margin-bottom: 2.125rem;
}
.mobile-langusge-item {
  width: 50%;
  text-align: center;
}
.mobile-langusge-item-active {
  background: #8a3de5;
  color: #fff;
}
.mobile-menu-icons {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.mobile-menu-icon-item {
  width: 50%;
  margin-bottom: 2.1875rem;
  padding-left: 12%;
  box-sizing: border-box;
}
.mobile-menu-icon-item img {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}
.mobile-menu-icon-item p {
  font-size: 0.9375rem;
  color: #fff;
}
.mobile-menu-footer {
  width: 7.875rem;
  padding-bottom: 1.0625rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  color: #fff;
  font-size: 0.9375rem;
}
</style>