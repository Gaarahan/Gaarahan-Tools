<template>
  <div class="friends-container">
    <header class="friends-header">
      朋友
      <span class="search">搜索</span>
    </header>
    <div class="contacts">
      <mt-cell v-for="(itm, i) in friends" :title="itm" icon="more" :key="i">
        <img slot="icon" src="../assets/logo.png"
             width="200" height="200"
             class="friends-head-img"
             alt="friend-head-img"
        >
      </mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Friends",
    data() {
      return {
        friends: ['gaara', 'han', 'zhao', 'feng','gaara', 'han', 'zhao', 'feng','gaara', 'han', 'zhao', 'feng','gaara', 'han', 'zhao', 'feng','gaara', 'han', 'zhao', 'feng','gaara', 'han', 'zhao', 'feng']
      }
    }
  }
</script>

<style scoped lang="less">
  .friends-container{
    display: flex;
    flex-direction: column;

    .friends-header{
      text-align: center;
      height: 6vh;
      line-height: 6vh;
      box-shadow: 0 1px 2px 0 grey;
      margin-bottom: 3px;

      .search {
        position: fixed;
        right: 0;
        margin: 0 4vw;
      }
    }
    .contacts{
      height: calc(100vh - 6vh - 6vh);
      width: 100vw;
      overflow: auto;

      .friends-head-img{
        width: 20px;
        height: 20px;
      }
    }
  }
</style>