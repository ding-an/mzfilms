<template>
    <div id="midTabBar">
        <tab-bar>
            <tab-bar-item @click.native='getNowPlayingFilms' path='/films/nowPlaying'>
                <span>正在热映</span>
            </tab-bar-item>
            <tab-bar-item @click.native='getComingSoonFilms' path='/films/comingSoon'>
                <span>即将上映</span>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

import request from '@/network/request'
import getNowPlayingFilms from '@/utils/getNowPlayingFilms'

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'MidTabBar',
    components: {
        TabBar,
        TabBarItem
    },
    data () {
        return {

        }
    },
    mixins: [getNowPlayingFilms],
    computed: {
        ...mapState(['currentCity', 'films'])
    },
    methods: {
        ...mapMutations(['GET_FILMS']),
        getComingSoonFilms () {
            request('mall.film-ticket.film.list', {
                cityId: this.currentCity.cityId,
                pageNum: 1,
                pageSize: 10,
                type: 2,
                k: 8038781
            }).then(res => this.GET_FILMS(res.data.data.films))
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