<template>
  <div>
    <user-header
        :hasLogin="hasLogin"
    ></user-header>
    <div class="func">
      <mt-cell v-if="hasLogin" :is-link="true" title="修改资料" :to="{name: 'edit'}"></mt-cell>
      <mt-cell :is-link="true" title="设置中心" :to="{name: 'setting'}"></mt-cell>
      <mt-cell :is-link="true" title="关于应用" :to="{name: 'about'}"></mt-cell>
    </div>
  </div>
</template>

<script>
  import UserHeader from '../../components/UserHeader.vue';

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
