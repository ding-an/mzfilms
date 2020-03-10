<template>
    <div class="tab-bar-item" :style="isActive ? { color: itemColor } : {}" @click="tabBarClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem', 
    data () {
        return {
            /* isActive: false */
        }
    },
    props: {
        path: String,
        itemColor: {
            type: String,
            default: 'red'
        }
    },
    methods: {
        tabBarClick () {
            if(this.$route.path === this.path) return;
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive () {
            return this.$route.path.indexOf(this.path) !== -1;
        }
    }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    line-height: 49px;
    cursor: pointer;
  }
</style>