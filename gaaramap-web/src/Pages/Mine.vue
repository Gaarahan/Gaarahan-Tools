<template>
  <div>
    <header>
      <a v-if="hasLogin">登录/注册</a>
      <user-header v-else></user-header>
    </header>
  </div>
</template>

<script>
  import UserHeader from '../components/UserHeader.vue';

  export default {
    name: "Mine",
    props: ["hasLogin"],
    components: {
      UserHeader
    }
  }
</script>

<style scoped>

</style>