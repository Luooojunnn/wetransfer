<template>
  <div class="mobile-app">
    <Header></Header>

    <Lend v-if="lendShow"></Lend>
    <Farm v-if="farmShow"></Farm>
    <Menu @toMobilePage="toMobilePage"></Menu>
  </div>
</template>
<script>
import Header from "../../components/mobile/mobile-header";
import Menu from "../../components/mobile/mobile-menu";
import Lend from "./lend";
import Farm from "./farm";
export default {
  components: {
    Header,
    Lend,
    Farm,
    Menu,
  },
  data() {
    return {
      lendShow: true,
      farmShow: false,
      homeShow: false,
    };
  },
  methods:{
toMobilePage(page) {
      console.log(page)
    if (page == "lend") {
      this.lendShow = true
      this.farmShow = false
      this.homeShow = false;
    }
    if (page == "farm") {
      this.lendShow = false
      this.farmShow = true
      this.homeShow = false;
    }
    if (page == "home") {
      this.lendShow = false
      this.farmShow = false
      this.homeShow = true;
    }
  },
  }
  
};
</script>
<style scoped>
.mobile-app {
  background: #0a0b0b;
}
</style>
