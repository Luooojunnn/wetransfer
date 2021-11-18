<template>
  <div id="app">
   <TopHeader/>
   <router-view></router-view>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue'

export default {
  name: 'App',
  components: {
    TopHeader
  }
}
</script>

<style>
body{
  background: #111111;
  color: #fff;
}
*{
  padding: 0;
  margin: 0;
}
#app {
 
}
</style>
