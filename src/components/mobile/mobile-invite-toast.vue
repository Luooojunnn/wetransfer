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
      <div class="mobile-invite-ipt-box">
        <div class="mobile-invite-ipt-bg row">
          <div class="mobile-invite-img-box">
            <img src="../../assets/user.png" class="mobile-invite-img" alt="" />
          </div>
          <input
            type="text"
            v-model="user"
            placeholder="Username"
            class="mobile-invite-ipt"
          />
        </div>
      </div>
      <div class="mobile-invite-ipt-box">
        <div class="mobile-invite-ipt-bg row">
          <div class="mobile-invite-img-box">
            <img
              src="../../assets/idcard.png"
              class="mobile-invite-img"
              alt=""
            />
          </div>
          <input
            type="text"
            v-model="user"
            placeholder="ID"
            class="mobile-invite-ipt"
          />
        </div>
      </div>
      <div class="mobile-invite-ipt-box">
        <div class="mobile-invite-ipt-bg row">
          <div class="mobile-invite-img-box">
            <img src="../../assets/code.png" class="mobile-invite-img" alt="" />
          </div>
          <input
            type="text"
            v-model="user"
            placeholder="Invitation code"
            class="mobile-invite-ipt"
          />
        </div>
      </div>
      <p class="mobile-invite-text">
        ID is the invitation code for inviting others
      </p>
      <div class="mobile-deposit-toast-btn">Confirm</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "",
      id: "",
      code: "",
    };
  },
  methods: {
    closeToast() {
      this.$emit("closeToast");
    },
  },
};
</script>
<style scoped>
.mobile-toast-bg {
  height: 459px;
  padding-top: 12px;
}
.mobile-close-box {
  text-align: right;
  margin-bottom: 58px;
}
.mobile-invite-ipt-box {
  width: 100%;
  height: 36px;
  background: rgba(148, 57, 255, 0.1);
  background: linear-gradient(157deg, #a4e1c2, #9439ff);
  border-radius: 10px;
  padding: 1px;
  box-sizing: border-box;
  margin: 28px auto 16px;
}
.mobile-invite-img-box {
  width: 26px;
}
.mobile-invite-img {
  width: 20px;
}
.mobile-invite-ipt-bg {
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 10px;
  padding: 0 18px;
  box-sizing: border-box;
}
.mobile-invite-ipt {
  flex-grow: 1;
  padding: 0 10px;
  border: none;
  background: #000;
  font-size: 17px;
  color: #fff;
}
.mobile-invite-ipt::-webkit-input-placeholder {
  color: #fff;
}
.mobile-invite-text {
  margin-left: 22px;
  font-size: 12px;
  color: #fff;
}
.mobile-deposit-toast-btn {
  height: 29px;
  background: rgba(148, 57, 255, 0.1);
  border: 1px solid #9439ff;
  border-radius: 8px;
  margin-top: 72px;
  color: #fff;
  font-size: 17px;
}
</style>