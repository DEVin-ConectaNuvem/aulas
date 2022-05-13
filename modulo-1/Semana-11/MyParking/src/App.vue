<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>
<style>
  .text-right {
    text-align: right;
  }
</style>
<script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    components: {
      NavBar
    }
  }
</script>