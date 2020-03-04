<template>
  <div id="app">
    <mt-tab-container :swipeable="true" v-model="selected" class="content">
      <mt-tab-container-item id="tab-main">
        <Main></Main>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-friends">
        <Friends></Friends>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-mine">
        <Mine></Mine>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab-main">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab-friends">
        朋友
      </mt-tab-item>
      <mt-tab-item id="tab-mine">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Friends from "./Pages/Friends";
import Main from "./Pages/Main";
import Mine from "./Pages/Mine";

export default {

  name: 'App',
  data() {
    return {
      hasLogin: true,
      selected: "tab-main"
    }
  },
  components: {
    Friends,
    Main,
    Mine
  }
}
</script>

<style lang="less" scoped>
  .content{
    height: calc(100% - 50px);
  }
  /deep/ div.mint-tabbar{
    height: 6vh;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
  }
</style>
