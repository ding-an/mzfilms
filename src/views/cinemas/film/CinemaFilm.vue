<template>
    <div id="cinemaFilm">
        <!-- 导航区域 -->
        <nav-bar class="navBar">
            <span slot="left" @click="$router.back()">
                <img src="@/assets/img/back.png" />
            </span>
        </nav-bar>
        <nav-bar class="navBar">
            <div slot="center">{{cinema.name}}</div>
        </nav-bar>
        <!-- 地址栏 -->
        <div class="address">
            <span>
                <img src="@/assets/img/address.png" />
            </span>
            <span>
                {{cinema.address}}
            </span>
        </div>
        <!-- 电影列表 -->
        <div class="filmListWrap">
            <div class="filmList" ref="filmlist">
                <div v-for="(film, index) in films" :key="film.filmId" @click="changeCurrentFilmIndex(index)">
                    <img class="filmImg" :class="{ 'filmIsActive': index === currentFilmIndex }" :src="film.poster" />
                </div>
            </div>
            <img class="arrow" src="@/assets/img/arrow.png" />
        </div>
        <div class="filmInfo" v-if="currentFilm">
            <div class="head">
                <span>{{currentFilm.name}}</span>
                <span class="grade">{{currentFilm.grade}}分</span>
            </div>
            <div class="desc">
                {{`${currentFilm.category} | ${currentFilm.runtime}分钟 
                    | ${currentFilm.director} 
                    | ${currentFilm.actors.map(actor => actor.name).join(' ')}`}}
            </div>
        </div>
        <!-- 日期 -->
        <div class="showDate" v-if="currentFilm">
            <div 
                :class="{ 'dateIsActive': index === currentDateIndex }" 
                v-for="(date, index) in showDates" 
                :key="date.D"
                @click="changeCurrentDateIndex(index)">
                {{`周${date.W}${date.M}月${date.D}日`}}
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'

import request from '@/network/request'

export default {
    name: 'CinemaFilm',
    components: {
        NavBar
    },
    data () {
        return {
            //电影院信息
            cinema: {},
            //电影数据
            films: [],
            //当前选中电影
            currentFilmIndex: 0,
            currentDateIndex: 0
        }
    },
    computed: {
        //当前选中的电影
        currentFilm () {
            return this.films[this.currentFilmIndex];
        },
        //时间戳转换
        showDates () {
            return this.currentFilm.showDate.map(date => this.formateDate(date));
        }
    },
    mounted () {
        this.getInitCinema();
        this.getInitFilms()/* .then(
            () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        console.log('bbb');
                        resolve();
                    },1000)
                })
            }
        ).then(console.log('aa')) */;
    },
    methods: {
        //获取初始电影院
        getInitCinema () {
            request('mall.film-ticket.cinema.info', {
                cinemaId: this.$route.params.cinemaId,
                k: 8327646
            }).then(res => this.cinema = res.data.data.cinema);
        },
        //获取初始电影
        getInitFilms () {
            return request('mall.film-ticket.film.cinema-show-film', {
                cinemaId: this.$route.params.cinemaId,
                k: 6245444
            }).then(res => {
                this.films = res.data.data.films;
                this.getSchedule();
            });
        },
        //获取场次
        getSchedule (filmId, date) {
            request('mall.film-ticket.schedule.list', {
                filmId,
                cinemaId: this.cinemaId,
                date,
                k: 4796576
            }).then(res => console.log(res));
        },
        //改变当前激活的电影
        changeCurrentFilmIndex (index) {
            this.currentFilmIndex = index;
            this.getSchedule(this.currentFilm.filmId, this.currentFilm.showDate[0]);
            this.$refs.filmlist.style.setProperty('--offset', document.body.clientWidth/2 - 45 - index*100 + 'px');
            console.log(document.body.clientWidth);

        },
        //改变当前激活的日期
        changeCurrentDateIndex (index) {
            this.currentDateIndex = index;
            this.getSchedule(this.currentFilm.filmId, this.currentFilm.showDate[index])

        },
        //时间戳转换方法
        formateDate (date) {
            let oDate = new Date(date*1000);
            let arr = ['一', '二', '三', '四', '五', '六', '日'];
            return {
            "W": arr[oDate.getDay()],
            "M": oDate.getMonth() + 1, // 月份
            "D": oDate.getDate(), // 日
    }
        }
    }
}
</script>

<style scoped>
    #cinemaFilm {
        --offset: calc(50% - 45px);
    }
    .navBar img {
        width: 11px;
        height: 18px;
    }
    .address {
        height: 50px;
        line-height: 50px;
        text-align: center;
        padding-left: 17px;
    }
    .address span {
        margin-right: 15px;
    }
    .address img {
        width: 14px;
        height: 21px;
    }
    .filmListWrap {
        position: relative;
        background-color: #ccc;
    }
    .filmList {
        width: 100%;
        height: 130px;
        padding: 15px 0;       
        display: flex;
        transform: translateX(var(--offset));
    }
    .filmList div {
        width: 90px;
        margin-right: 10px;
        position: relative;
    }
    .filmImg {
        height: 100px;
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .arrow {
        width: 20px;
        position: absolute;
        left: 50%;
        bottom: 0;
    }
    .filmIsActive {
        width: 90px !important;
        height: 130px !important;
    }
    .filmInfo {
        height: 50px;
        padding: 15px 0;
    }
    .head {
        height: 20px;
        margin-bottom: 10px;
        text-align: center;
    }
    .grade {
        color: #ffb232;
        margin-left: 10px;
    }
    .desc {
        height: 18px;
        text-align: center;
        color: #797d82;
        font-size: 13px;
    }
    .showDate {
        display: flex;
        height: 49px;
        line-height: 49px;
    }
    .showDate div {
        margin-left: 20px;
    }
    .dateIsActive {
        color: #ff5f16 !important;
        border-bottom: 1px solid #ff5f16 !important;
    }
</style>