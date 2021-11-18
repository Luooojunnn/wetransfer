<template>
  <div id="TopHeader">
    <div class="icon-wrap">
      <div class="TopHeader-icon"></div>
      <div class="deMac">DeMac</div>
    </div>
    <div class="TopHeader-menus">
      <div v-for="item in lists" :key="item" @click="goto(item)" :class="{'menus-active':item === curAc }">
        {{item}}
      </div>
    </div>
    <div class="end-menus">
      <div class="yuyan-menus">
        <span class="yuyan-menus-icon"></span>
        English</div>
      <div class="Swap-menus">Swap</div>
      <div class="Wallet-menus">Wallet</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {
      lists:[
         'Home',
         'Lend',
         'Farm',
         'Bonus'
      ],
      curAc: 'Home'
    }
  },
  methods: {
    goto(l) {
      this.curAc = l
      this.$router.push(
        { path: l, query: {  }}
      )
    }
  },
  components: {
    // currentAc: 'Home'
  },
};
</script>

<style>
#TopHeader {
  height: 120px;
  background: #080808;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.icon-wrap {
  display: flex;
}
.icon-wrap .deMac {
  width: 84px;
  height: 27px;
  font-size: 36px;
  font-family: Barlow Condensed;
  font-weight: 800;
  color: #9439ff;
  
}
.TopHeader-menus {
  display: flex;
  margin-right: 23 px;
  width: 40vw;
  justify-content: space-evenly;
align-items: center;
font-size: 24px;
font-family: Barlow Condensed;
font-weight: 500;
color: #FFFFFF;
cursor: pointer;
}
.menus-active{
  /* width: 84px; */
/* height: 27px; */
font-size: 36px;
font-family: Barlow Condensed;
font-weight: 800;
color: #9439FF;

background: linear-gradient(125deg, #A4E1C2 0.5126953125%, #9439FF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
.TopHeader-icon{
  width: 50px;
height: 50px;
background-size: cover;
    margin-right: 17
px
;
  background-image: url(../assets/icon.png);
}
.end-menus{
  display: flex;
}
.end-menus>div{
  margin-right: 10px;
}
.yuyan-menus{
  color:#9439FF;
}
.yuyan-menus-icon{
  
}
</style>
