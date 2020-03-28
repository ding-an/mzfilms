<template>
    <div id="midTabBar">
        <tab-bar>
            <tab-bar-item @click.native='changeNowTab(nowPlaying)' path='/films/nowPlaying'>
                <span>正在热映</span>
            </tab-bar-item>
            <tab-bar-item @click.native='changeNowTab(comingSoon)' path='/films/comingSoon'>
                <span>即将上映</span>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

/* import getFilms from '@/utils/getFilms' */

/* import { mapState, mapMutations } from 'vuex' */

export default {
    name: 'MidTabBar',
    components: {
        TabBar,
        TabBarItem
    },
    data () {
        return {
            nowPlaying: 'nowPlaying',
            comingSoon: 'comingSoon'
        }
    },
    methods: {
        changeNowTab (value) {
            this.$emit('changeNowTab', value)
        }
    }
}
</script>

<style scoped>
    #midTabBar {
        border-bottom: 1px solid rgba(200,200,200,.2);
    }
    #midTabBar span {
        width: 56px;
    }
</style>