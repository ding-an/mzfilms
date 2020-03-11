<template>
    <div id="city">
        <!-- 顶部导航栏 -->
        <nav-bar>
            <span class="iconfont" slot="left">&#xe608;</span>
            <div slot="center">当前城市-{{currentCity.name}}</div>
        </nav-bar>
        <!-- 搜索城市 -->
        <search 
            @changeIsInput='changeIsInput' 
            @getInputValue='getInputValue' 
            @cancelInput='cancelInput'
            :isShow='isInput' />
        <div v-if="!isInput">
            <!-- 中间 -->
            <div class="recommend">
                <div class="indexTitle">GPS定位你所在的城市</div>
                <div class="indexDetail">
                    <city-item @click="selectCity"/>
                </div>
                <div class="indexTitle">热门城市</div>
                <div class="indexDetail">
                    <city-item 
                        v-for="city in hotCities" 
                        :key="city.cityId" 
                        :cityName="city.name"
                        @click.native="selectCity(city)"/>
                </div>
            </div>
            <!-- A-Z渲染 -->
            <div class="cityRender" ref="cityRender">
                <div v-for="(cities, index) in citiesByWord" :key="String.fromCharCode(index+65)">
                    <div class="wordSelector" v-show="cities.length">{{String.fromCharCode(index+65)}}</div>
                    <div class="citySelector"
                        v-for="city in cities"
                        :key="city.cityId"
                        @click="selectCity(city)">{{city.name}}</div>
                </div>
            </div>
            <!-- 侧边栏 -->
            <div class="sideWord">
                <ul>
                    <li v-for="(_, index) in citiesByWord" 
                        :key="String.fromCharCode(index+65)"
                        @click="sideWordClick(index)">
                        {{String.fromCharCode(index+65)}}
                    </li>
                </ul>
            </div>
        </div>
        <!-- 搜索城市时候显示 -->
        <div v-else>
            <div class="citySelector"
                        v-for="city in searchCities"
                        :key="city.cityId"
                        @click="selectCity(city)">{{city.name}}</div>
        </div>
        
    </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'
import Search from '@/components/content/Search'

import CityItem from './CityItem'

import request from '@/network/request'

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'City',
    components: {
        NavBar,
        Search,
        CityItem
    },
    data () {
        return {
            cities: [],
            searchCities: [],
            isInput: false
        }
    },
    computed: {
        ...mapState(['currentCity']),
        //热门城市列表
        hotCities () {
            return this.cities.filter(city => city.isHot === 1)
        },
        //按A-Z排序的二维数组
        citiesByWord () {
            let citiesByWord = Array(26).fill(0).map(() => []);
            this.cities.forEach(city => {
                let num = city.pinyin.charCodeAt(0)-97;
                citiesByWord[num].push(city)
            })
            return citiesByWord;
        }
    },
    created () {
        this.getInitCities();
    },
    methods: {
        ...mapMutations(['SET_CURRENT_CITY']),
        //获取城市列表
        getInitCities () {
            request('mall.film-ticket.city.list',{
                k: 5782148
            }).then(res => this.cities = res.data.data.cities);
        },
        //点击侧边字母跳转城市选择
        sideWordClick (index) {
            //距浏览器顶部距离
            const offsetTop = this.$refs.cityRender.children[index].offsetTop;
            //const scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
            const scrollTop = offsetTop - 50;
            //兼容IE chrome 更改滚动距离
            document.body.scrollTop ? 
            document.body.scrollTop = scrollTop : document.documentElement.scrollTop = scrollTop;
        },
        //选择当前城市
        selectCity (city) {
            this.SET_CURRENT_CITY(city)
            this.$router.back();
        },
        //判断输入框是否聚焦
        changeIsInput () {
            this.isInput = true;
        },
        //判断输入框是否失焦
        cancelInput () {
            this.isInput = false
        },
        //拿到input框的值,筛选搜索城市
        getInputValue (value) {
            if(value.length > 0) {
                this.searchCities = this.cities.filter(
                    city => city.name.indexOf(value) !== -1 || city.pinyin.indexOf(value) !== -1
                );
            } else {
                this.searchCities = [];
            }
        }
    }
}
</script>

<style scoped>
    #city {
        position: relative;
    }
    .recommend {
        padding: 15px 0 0 15px;
    }
    .indexTitle {
        margin-bottom: 10px;
        color: #797d82;
    }
    .indexDetail {
        display: flex;
        flex-wrap: wrap;
    }
    .cityRender {
        width: calc(100% - 17px);
    }
    .wordSelector {
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
        background-color: #f4f4f4;
    }
    .citySelector {
        height: 48px;
        line-height: 48px;
        padding-left: 20px;
        border-bottom: 1px solid rgb(245,245,245);
    }
    .sideWord {
        position: fixed;
        top: 200px;
        right: 0;
        width: 17px;
    }
    .sideWord ul {
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .sideWord ul li {
        font-size: 11px;
        flex: 1;
    }
</style>   