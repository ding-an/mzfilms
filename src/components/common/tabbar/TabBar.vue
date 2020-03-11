<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #fff;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2 );
  }
</style>