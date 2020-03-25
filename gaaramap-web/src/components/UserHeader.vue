<template>
  <div>
    <div class="header">
      <img src="../assets/logo.png" alt="head-pic" class="head-pic">
      <router-link
          v-if="!hasLogin"
          :to="{name: 'login'}"
          id="to-account"
      >登录/注册</router-link>
      <p v-else class="user-name">Gaarahan</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserHeader",
    props: ['hasLogin'],
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

    #to-account {
      text-decoration: none;
      color: white;
    }
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
