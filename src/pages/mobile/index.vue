<template>
  <div class="mobile-app">
    <Header></Header>

    <Lend v-if="lendShow"></Lend>
  </div>
</template>
<script>
import Header from "../../components/mobile/mobile-header";
import Lend from "./lend";
export default {
  components: {
    Header,
    Lend,
  },
  data() {
    return {
      lendShow: true,
    };
  },
};
</script>
<style scoped>
.mobile-app{
    background: #0A0B0B;
}
</style>
