<template>
    <div id="films">
        <router-link to="/city">
            <div class="currentCity">{{currentCity.name}}</div>
        </router-link>
        <swipper :imgs='bannerImg' v-show="isSwipperDisplay"/>
        <mid-tab-bar/>
        <router-view/>
        <main-tab-bar/>
    </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'
import Swipper from './Swipper'
import MidTabBar from './MidTabBar'

import request from '@/network/request'
import getNowPlayingFilms from '@/utils/getNowPlayingFilms'

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Films',
    components: {
        MainTabBar,
        Swipper,
        MidTabBar
    },
    data () {
        return {
            bannerImg: []
        }
    },
    mixins: [getNowPlayingFilms],
    created () {
        this.getNowPlayingFilms();
        this.getBannerImg();
    },
    computed: {
        ...mapState(['currentCity', 'films']),
        isSwipperDisplay () {
            return this.bannerImg ? true : false
        } 
    },
    methods: {
        ...mapMutations(['GET_FILMS']),
        getBannerImg () {
            request('mall.cfg.common-banner', {
                type: 2,
                cityId: this.currentCity.cityId,
                k: 9458745
            }).then(res => this.bannerImg = res.data.data)
        }
    }
}
</script>

<style scoped>
    #films {
        position: relative;
    }
    .currentCity {
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: rgba(0,0,0,.2);
        border-radius: 15px;
        position: absolute;
        top: 18px;
        left: 7px;
        z-index: 9;
    }
</style>