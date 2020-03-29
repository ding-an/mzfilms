<template>
    <div id="cinemas">
        <!-- 顶部导航栏 -->
        <nav-bar>
            <div class="currentCity" slot="left" @click="toCity">
                {{currentCity.name}}
                <img src="@/assets/img/click.png" />
            </div>
            <div slot="center">影院</div>
            <div slot="right" @click="toSearch">
                <span class="iconfont">&#xe61c;</span>
            </div>
        </nav-bar>
        <!-- 切换栏 -->
        <mid-tab-bar :cinemas="cinemas" @isShow="toggleBgc" @toggleDistrict="getDistrictCinemas"></mid-tab-bar>
        <!-- 电影院列表 -->
        <div class="bscroll" ref="bscroll">
            <div :class="{ 'isDeep': isShow }">
                <cinema-item 
                    v-for="cinema in districtCinemas" 
                    :cinema='cinema'
                    :key="cinema.cinemaId"></cinema-item>
            </div>
        </div>
        <main-tab-bar/>
    </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'
import NavBar from '@/components/content/NavBar'

import MidTabBar from './MidTabBar'
import CinemaItem from './CinemaItem'

import request from '@/network/request'
import BScroll from 'better-scroll'

import { mapState } from 'vuex'

export default {
    name: 'Cinemas',
    components: {
        MainTabBar,
        NavBar,
        MidTabBar,
        CinemaItem
    },
    data () {
        return {
            //所有电影院数据
            cinemas: [],
            //区域电影院数据
            districtCinemas: [],
            isShow: false
        }
    },
    computed: {
        ...mapState(['currentCity'])
    },
    created () {
        this.getInitCinemas();
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.bscroll, {
            probeType: 1,
            click: true,
            scrollbar: true
        });
    },
    methods: {
        //跳转路由city选择界面
        toCity () {
            this.$router.push('/city');
        },
        //路由跳转
        toSearch () {
            this.$router.push({ path: '/cinemas/search', query: {
                cinemas: this.cinemas
            } });
        },
        //获取初始电影院数据
        getInitCinemas () {
            request('mall.film-ticket.cinema.list', {
                cityId: this.currentCity.cityId,
                ticketFlag: 1,
                k: 7103482
            }).then(res => {
                this.cinemas = res.data.data.cinemas;
                this.districtCinemas = res.data.data.cinemas;
            })
        },
        //点击tabbar切换背景颜色
        toggleBgc (isShow) {
            this.isShow = isShow;
        },
        //子组件获取当前区域电影院数据
        getDistrictCinemas (districtCinemas) {
            this.districtCinemas = districtCinemas;
        }
    }
}
</script>

<style scoped>
    #cinemas {
        margin-bottom: 49px;
    }
    .currentCity {
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 13px;
    }
    .currentCity img {
        width: 6px;
    }
    .isDeep {
        background-color: #ccc;
    }
    .bscroll{
        width:100%;
        height: calc(100vh - 141px);
        overflow: hidden;
    }
</style>