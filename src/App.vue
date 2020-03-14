<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  @import './assets/css/border.css';
  @import './assets/css/reset.css';
  @import url('./assets/iconfont/iconfont.css');
</style>
