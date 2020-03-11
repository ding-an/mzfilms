<template>
    <div id="mainTabBar">
        <tab-bar>
            <tab-bar-item path='/films'>
                <img class="img" src="@/assets/img/films.png">
                <span class="text">电影</span>
            </tab-bar-item>
            <tab-bar-item path='/cinemas'>
                <img class="img" src="@/assets/img/cinema.png">
                <span class="text">影院</span>
            </tab-bar-item>
            <tab-bar-item path='/info'>
                <img class="img" src="@/assets/img/info.png">
                <span class="text">资讯</span>
            </tab-bar-item>
            <tab-bar-item path='/profile'>
                <img class="img" src="@/assets/img/profile.png">
                <span class="text">我的</span>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
    name: 'MaintabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
    #mainTabBar {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .img {
        height: 21px;
        width: 21px;
        padding-top: 8px;
    }
    .text {
        height: 20px;
        line-height: 20px;
    }
</style>