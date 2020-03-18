<template>
    <div id="profile">
        <div class="avatar">
            <img src="@/assets/img/head.png" />
            <span>立即登录</span>
        </div>
        <div class="myOrder">
            <div class="filmsOrder">
                <img src="@/assets/img/film.png" />
                <div>电影订单</div>
            </div>
            <div class="goodsOrder">
                <img src="@/assets/img/goods.png" />
                <div>商品订单</div>
            </div>
        </div>
        <List :imgUrl="cardUrl" text="卖座券"></List>
        <List :imgUrl="hongbaoUrl" text="组合红包"></List>
        <List :imgUrl="moneyUrl" text="余额"></List>
        <List :imgUrl="settingUrl" text="设置"></List>
        <main-tab-bar/>
    </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'

import List from './List'
import card from '@/assets/img/card.png'
import hongbao from '@/assets/img/hongbao.png'
import money from '@/assets/img/money.png'
import setting from '@/assets/img/setting.png'

export default {
    name: 'Profile',
    components: {
        MainTabBar,
        List
    },
    data () {
        return {
            cardUrl: '',
            hongbaoUrl: '',
            moneyUrl: '',
            settingUrl: ''
        }
    },
    mounted () {
        this.cardUrl = card;
        this.hongbaoUrl = hongbao;
        this.moneyUrl = money;
        this.settingUrl = setting;
    }
}
</script>

<style scoped>
    #profile {
        background-color: #eee;
    }
    .avatar {
        height: 160px;
        line-height: 120px;
        padding: 22px 0 0 22px;
        box-sizing: border-box;
        background: url('~@/assets/img/bgc.png');
    }
    .avatar img {
        height: 63px;
        width: 63px;
        margin-right: 20px;
        border-radius: 50%;
    }
    .avatar span {
        font-size: 16px;
        color: #fff;
    }
    .myOrder {
        height: 79px;
        margin-bottom: 10px;
        display: flex;
        background-color: #fff;
    }
    .myOrder img {
        width: 23px;
        height: 23px;
    }
    .filmsOrder {
        flex: 1;
        text-align: center;
        font-size: 13px;
        color: #797d82;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .goodsOrder {
        flex: 1;
        text-align: center;
        font-size: 13px;
        color: #797d82;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>