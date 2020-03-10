<template>
    <div>
        <Tab-Bar>
            <Tab-bar-Item path='/films'>电影</Tab-bar-Item>
            <Tab-bar-Item path='/cinemas'>影院</Tab-bar-Item>
            <Tab-bar-Item path='/info'>资讯</Tab-bar-Item>
            <Tab-bar-Item path='/profile'>我的</Tab-bar-Item>
        </Tab-Bar>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>

</style>