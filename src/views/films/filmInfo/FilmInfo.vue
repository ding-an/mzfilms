<template>
    <div>
        <div v-if="isShowPhotos">
            <nav-bar class="navBar">
                <div class="navBarLeft" slot="left" @click="toggleShowPhotos">
                    <img src="@/assets/img/back.png" />
                </div>
                <div slot="center">剧照({{filmInfo.photos.length}})</div>
            </nav-bar>
            <div class="photosList2">
                    <div v-for="(photo, index) in filmInfo.photos" :key="index">
                        <img :src="photo" />
                    </div>
            </div>
        </div>
        <div v-else>
            <nav-bar class="navBar">
                <div class="navBarLeft" slot="left" @click="goBack">
                    <img src="@/assets/img/back.png" />
                </div>
            </nav-bar>
            <!-- 图片 -->
            <div class="imgWrap">
                <img :src="filmInfo.poster" />
            </div>
            <!-- 详情 -->
            <div class="filmDetail" v-if="filmInfo.name">
                <div class="col">
                    <div class="filmName">
                        <span>{{filmInfo.name}}</span>
                        <span class="filmItem">{{filmInfo.filmType.name}}</span>
                    </div>
                    <div class="filmGrade">{{filmInfo.grade}}分</div>
                </div>
                <div class="category">
                    {{filmInfo.category}}
                </div>
                <div class="premiereTime">
                    {{`${premiereTime.Y}-${premiereTime.M}-${premiereTime.D}上映`}}
                </div>
                <div class="nationRuntime">
                    {{filmInfo.nation}}|{{filmInfo.runtime}}分钟
                </div>
                <div class="synopsis" :style="{ height: synopsisHeight }">
                    {{filmInfo.synopsis}}
                </div>
                <div class="toggle" @click="toggleOverflow">
                    <img src="@/assets/img/toggle.png" />
                </div>
            </div>
            <!-- 演员列表 -->
            <div class="actors">
                <div class="title">演职人员</div>
                <div class="actorsList">
                    <div class="actor" v-for="(actor, index) in filmInfo.actors" :key="index">
                        <img :src="actor.avatarAddress" />
                        <div class="actorName">{{actor.name}}</div>
                        <div class="actorRole">{{actor.role}}</div>
                    </div>
                </div>
            </div>
            <!-- 剧照 -->
            <div class="photos" v-if="filmInfo.name">
                <div class="title">
                    <span>剧照</span>
                    <span class="titleRight" @click="toggleShowPhotos">全部({{filmInfo.photos.length}})</span>
                </div>
                <div class="photosList">
                    <div v-for="(photo, index) in filmInfo.photos" :key="index">
                        <img :src="photo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'

import request from '@/network/request'
import formateDate from '@/utils/formateDate'

export default {
    name: 'FilmInfo',
    components: {
        NavBar
    },
    data () {
        return {
            filmInfo: {},
            //动态绑定synopsis高度
            synopsisHeight: '38px',
            isShowPhotos: false
        }
    },
    created () {
        this.getInitFilmInfo();
    },
    computed: {
        filmId () {
            return this.$route.params.filmId;
        },
        premiereTime () {
            return formateDate(this.filmInfo.premiereAt);
        }
    },
    methods: {
        //获取初始电影信息
        getInitFilmInfo () {
            request('mall.film-ticket.film.info', {
                filmId: this.filmId,
                k: 1025378
            }).then(res => this.filmInfo = res.data.data.film)
        },
        //点击返回
        goBack () {
            this.$router.back();
        },
        //点击切换描述显示
        toggleOverflow () {
            this.synopsisHeight = this.synopsisHeight === '38px' ? '' : '38px';
        },
        //点击切换剧照显示
        toggleShowPhotos () {
            this.isShowPhotos = !this.isShowPhotos;
        }
    }
}
</script>

<style scoped>
    .navBar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
    .navBarLeft img { 
        width: 14px;
        height: 18px;
        border-radius: 50%;
    }
    .imgWrap img {
        height: 250px;
    }
    .filmDetail {
        padding: 12px 15px;
    }
    .col {
        height: 25px;
        line-height: 25px;
        display: flex;
    }
    .filmName {
        font-size: 18px;
        flex: 1;
    }
    .filmItem {
        margin-left: 8px;
        font-size: 12px;
        color: #fff;
        background-color: #d2d6dc;
    }
    .filmGrade {
        width: 93px;
        color: #ffb232;
    }
    .category {
        height: 15px;
        margin-top: 4px;
        color: #797d82;
        font-size: 13px;
    }
    .premiereTime {
        height: 15px;
        margin-top: 4px;
        color: #797d82;
        font-size: 13px;
    }
    .nationRuntime {
        height: 15px;
        margin-top: 4px;
        color: #797d82;
        font-size: 13px;
    }
    .synopsis {
        margin-top: 13px;
        color: #797d82;
        font-size: 13px;
        overflow: hidden;
    }
    .toggle {
        text-align: center;
    }
    .toggle img {
        width: 8px;
        height: 4px;
    }
    .title {
        height: 22px;
        padding: 15px;
        font-size: 16px;
        position: relative;
    }
    .actorsList {
        display: flex;
        overFlow-x: scroll
    }
    .actor {
        margin-left: 10px;
        text-align: center;
    }
    .actor img {
        width: 85px;
    }
    .actorName {
        font-size: 12px;
        padding-top: 10px;
    }
    .actorRole {  
        font-size: 10px;
        color: #797d82;
    }
    .titleRight {
        position: absolute;
        right: 20px;
        font-size: 13px;
        color: #797d82;
    }
    .photos {
        margin-bottom: 20px;
    }
    .photosList {
        display: flex;
        overflow-x: scroll;
    }
    .photosList img {
        width: 150px;
        height: 79px;
        margin-left: 10px;
    }
    .photosList2 {
        margin-top: 44px;
        display: flex;
        flex-wrap: wrap;
    }
    .photosList2 img {
        height: 122px;
        width: 122px;
        margin-right: 2px;
    }
</style>