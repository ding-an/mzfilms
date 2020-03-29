<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="film in films" :key="film.filmId">
            <img class="filmImg" :src="film.poster" />
        </swiper-slide>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require("swiper/dist/css/swiper.css");

let _ = null;
export default {
    name: 'Swipper',
    components: {
        swiper,
        swiperSlide
    },
    props: {
        films: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            currentSlide: 0,
            swiperOption: {
                //滑动速度
                speed: 800,
                //设定初始化时slide的索引
                initialSlide: 0,
                //鼠标可点击
                slideToClickedSlide: true,
                slidesPerView : 4,
                centeredSlides: true,
                effect: 'coverflow',
                coverflowEffect: {
                    //Y轴的旋转角度
                    rotate: 0,
                    //每个slide之间的拉伸值，越大slide靠得越紧
                    stretch: 0,
                    //slide的位置深度。值越大z轴距离越远，看起来越小
                    depth: 100,
                    //depth和rotate和stretch的倍率
                    modifier: 3,
                    //是否开启slide阴影
                    slideShadows : false
                },
                on: {
                    //点击触发
                    tap () {
                        _.$emit('changeCurrentFilmIndex', this.activeIndex)
                    },
                    //过度结束触发
                    transitionEnd () {
                        _.$emit('changeCurrentFilmIndex', this.activeIndex)
                    }
                }
            }
        }
    },
    created () {
        _ = this;
    }
}
</script>

<style scoped>
    .swiper {
        width: 90px;
        display: flex; 
    }
    .filmImg {
        width: 90px;
        height: 130px;
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>