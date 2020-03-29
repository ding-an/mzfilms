<template>
    <div class="navbar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .navbar {
        height: 44px;
        line-height: 44px;
        background-color: #fff;
        display: flex;
    }
    .left {
        width: 56px;
        text-align: center;
    }
    .center {
        flex: 1;
        font-size: 17px;
        text-align: center;
    }
    .right {
        width: 56px;
        text-align: center;
    }
</style>