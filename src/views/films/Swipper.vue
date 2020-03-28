<template>
    <div id="swipper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="img in imgs" :key="img.bannerId">
                <img :src="img.imgUrl" alt=""/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require("swiper/dist/css/swiper.css");

export default {
    name: 'Swipper',
    components: {
        swiper,
        swiperSlide
    },
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOption: {
                //循环
                loop: true,
                //自动播放
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    /* 触摸滑动后是否继续轮播 */
                    disableOnInteraction: false
                },
                //用户操作swiper之后，是否禁止autoplay
                autoplayDisableOnInteraction: false,
                //滑动速度
                speed: 800,
                //设定初始化时slide的索引
                initialSlide: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: "bullets"
                }
            }
        }
    }
}
</script>

<style scoped>
    #swipper {
        height: 192px;
        background-color: #fff;
        border: none;
    }
    #swipper img {
        height: 192px;
        width: 100%;
    }
</style>