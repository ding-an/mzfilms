<template>
    <div id="films">
        <div class="topBar" v-show="isTop">
            <nav-bar>
                <router-link slot="left" to="/city">
                    <div class="navLeft">
                        {{currentCity.name}}
                        <img src="@/assets/img/click.png" />
                    </div>
                </router-link>
                <div slot="center">
                    电影
                </div>
            </nav-bar>
            <mid-tab-bar @changeNowTab='changeNowTab'/>
        </div>
        
        <div class="bscroll" ref="bscroll">
            <div>
                <router-link to="/city">
                    <div class="currentCity">
                        {{currentCity.name}}
                        <img src="@/assets/img/click.png" />
                    </div>
                </router-link>
                <swipper :imgs='bannerImg' v-show="isSwipperDisplay"/>
                <mid-tab-bar @changeNowTab='changeNowTab'/>
                <router-view/>
            </div>
        </div>
        
        <main-tab-bar/>
    </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'
import MainTabBar from '@/components/content/MainTabBar'
import Swipper from './Swipper'
import MidTabBar from './MidTabBar'

import request from '@/network/request'
import throttling from '@/utils/throttling'

import BScroll from 'better-scroll'

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Films',
    components: {
        NavBar,
        MainTabBar,
        Swipper,
        MidTabBar
    },
    data () {
        return {
            //是否吸顶
            isTop: false,
            bannerImg: [],
            nowTab: 'nowPlaying',
            //nowPlaying
            pageNum1: 1,
            //comingSoon
            pageNum2: 1,
            scroll: null
        }
    },
    created () {
        this.$route.path === '/films/nowPlaying' ?
        this.getFilms(this.pageNum1, 1, this.GET_FILMS) :
        this.getFilms(this.pageNum1, 2, this.GET_FILMS);
        this.getBannerImg();
    },
    mounted () {
        //设置Bscroll
        this.scroll = new BScroll(this.$refs.bscroll, {
            probeType: 1,
            click: true,
            scrollbar: true,
            mouseWheel: true,
            pullUpLoad: {
                threshold: 50
            }
        });
        const scrollTop = throttling((p) => {
            if(-p.y > 192) {
                this.isTop = true
            } else {
                this.isTop = false
            }
        }, 100);
        this.scroll.on('scroll', p => {
            scrollTop(p)
        })
        //上拉加载更多
        this.nowTab === 'nowPlaying' ? 
        this.scrollToGetMoreFilms(this.pageNum1, 1) :
        this.scrollToGetMoreFilms(this.pageNum2, 2);
    },
    computed: {
        ...mapState(['currentCity', 'films']),
        isSwipperDisplay () {
            return this.bannerImg ? true : false
        } 
    },
    methods: {
        ...mapMutations(['GET_FILMS', 'PUSH_FILMS']),
        //获取头条数据
        getBannerImg () {
            request('mall.cfg.common-banner', {
                type: 2,
                cityId: this.currentCity.cityId,
                k: 9458745
            }).then(res => this.bannerImg = res.data.data)
        },
        //获取电影数据
        getFilms (pageNum, type, func) {
            return request('mall.film-ticket.film.list', {
                cityId: this.currentCity.cityId,
                pageNum,
                pageSize: 10,
                type,
                k: 127927
            }).then(res => func(res.data.data.films))
        },
        //滑动加载更多
        scrollToGetMoreFilms (pageNum, type) {
            this.scroll.on('pullingUp', () => {
                this.getFilms(++pageNum, type, this.PUSH_FILMS).then(() => {
                    this.scroll.finishPullUp();
                    this.scroll.refresh();
                });
            })
        },
        //切换TAB
        changeNowTab (value) {
            //数据清除
            this.GET_FILMS([])
            //获取第一页数据
            value === 'nowPlaying' ? this.getFilms(this.pageNum1, 1, this.GET_FILMS) 
                    : this.getFilms(this.pageNum1, 2, this.GET_FILMS);
            //切换TAB清除监听
            this.scroll.off('pullingUp');
            //清除吸顶
            this.isTop = false;
            //重新设置监听，上拉加载更多
            let num = this.$route.path.split('/').length;
            this.nowTab = this.$route.path.split('/')[num-1];
            this.nowTab === 'nowPlaying' ? 
            this.scrollToGetMoreFilms(this.pageNum1, 1) :
            this.scrollToGetMoreFilms(this.pageNum2, 2);
        }
    }
}
</script>

<style scoped>
    #films {
        position: relative;
    }
    .topBar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }
    .navLeft {
        color: #191a1b;
    }
    .navLeft img {
        width: 6px;
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
    .currentCity img {
        width: 6px;
    }
    .bscroll{
        width:100%;
        height: calc(100vh - 49px);
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
</style>