<template>
  <div>
    <div class="header">
      <img src="../assets/logo.png" alt="head-pic" class="head-pic">
      <p class="user-name">Gaarahan</p>
    </div>
    <div class="func">
      <mt-cell :is-link="true" title="修改资料" :to="{name: 'edit'}"></mt-cell>
      <mt-cell :is-link="true" title="设置中心" :to="{name: 'setting'}"></mt-cell>
      <mt-cell :is-link="true" title="关于应用" :to="{name: 'about'}"></mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserHeader"
  }
</script>

<style lang="less" scoped>
  .header{
    height: 40vh;
    background-image: url("../assets/background-pic.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .head-pic{
      height: 10vh;
      border:1px solid gainsboro;
      border-radius: 50%;
      background-color: white;
    }
    .user-name{
      font-size: 20px;
      margin-top: 1vh;
      text-shadow: 0 0 6px white;
    }
  }
</style>