<template>
  <div>
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
</style>
