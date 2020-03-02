<template>
  <div id="app">
    <router-view/>
    <footer>
      <router-link to="/main">首页</router-link>
      <router-link to="/friends">朋友</router-link>
      <router-link to="/mine">我的</router-link>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  display: flex;
}
</style>
