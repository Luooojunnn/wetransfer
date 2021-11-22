<template>
  <div class="mobile-app">
    <Header></Header>

    <Lend v-if="lendShow"></Lend>
    <Farm v-if="farmShow"></Farm>
  </div>
</template>
<script>
import Header from "../../components/mobile/mobile-header";
import Lend from "./lend";
import Farm from "./farm";
export default {
  components: {
    Header,
    Lend,
    Farm,
  },
  data() {
    return {
      lendShow: true,
      farmShow: false,
    };
  },
};
</script>
<style scoped>
.mobile-app {
  background: #0a0b0b;
}
</style>
