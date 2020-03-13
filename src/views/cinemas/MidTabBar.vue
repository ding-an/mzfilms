<template>
    <div>
        <!-- tabbar -->
        <div class="midTabBar" :class="{ 'districtsBarColor': isShow }">
            <div class="districtsBar" @click="toggleShow">
                {{district}}
                <img src="@/assets/img/click.png" />
            </div>
        </div>
        <!-- 点击tabbar显示区域 -->
        <div class="districts" v-show="isShow">
            <div 
                :class="{ 'activeDiv': item.districtName === district }"
                v-for="item in districts" 
                :key="item.districtId" 
                @click="toggleDistrict(item.districtName)">
                {{item.districtName}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MidTabBar',
    data () {
        return {
            //是否显示区域列表
            isShow: false,
            //当前区域
            district: '全城',
            districtCinemas: []
        }
    },
    props: {
        cinemas: {
            type: Array,
            default () {
                return []
            }
        }
    },
    computed: {
        //保存props cinemas
        ownCinemas() {
            return this.cinemas;
        },
        //计算区域数组
        districts () {
            const districts = this.ownCinemas.map(cinema => {
                return {
                    districtName: cinema.districtName,
                    districtId: cinema.districtId
                }
            });
            //去重,第一项加全城元素
            let newObj = {};
            return [{ districtName: '全城', districtId: 'quancheng' }, 
                ...districts.reduce((item, next) => {
                    newObj[next.districtId] ? '' : newObj[next.districtId] = item.push(next);
                    return item;
                }, [])]
        }
    },
    methods: {
        //点击是否显示区域选择，主背景改为暗色
        toggleShow () {
            this.isShow = !this.isShow;
            this.$emit('isShow', this.isShow);
        },
        //点击切换区域,传递数据
        toggleDistrict (districtName) {
            this.district = districtName;
            this.isShow = false;
            if(districtName === '全城') {
                this.districtCinemas = this.ownCinemas;
            } else {
                this.districtCinemas = this.ownCinemas.filter(cinema => cinema.districtName === districtName);
            }
            this.$emit('toggleDistrict', this.districtCinemas);
            this.$emit('isShow', this.isShow);
        }
    }
}
</script>

<style scoped>
    .midTabBar {
        height: 48px;
        line-height: 48px;
        display: flex;
        text-align: center;
        z-index: 1;
    }
    .midTabBar img {
        width: 6px;
    }
    .districtsBar {
        flex: 1;
        border-bottom: 1px solid rgba(222, 222, 222, .3);
    }
    .districtsBarColor {
        color: #ff5f16;
    }
    .districts {
        position: absolute;
        top: 92px;
        left: 0;
        right: 0;
        padding-top: 10px;
        padding-left: 10px;
        background-color: #fff;
        z-index: 101;
        display: flex;
        flex-wrap: wrap;
    }
    .districts div  {
        width: 76px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 12px;
        border-radius: 4px;
        margin: 0 10px 15px 0;
    }
    .activeDiv {
        border: 1px solid #ff5f16;
        color: #ff5f16;
    }
</style>