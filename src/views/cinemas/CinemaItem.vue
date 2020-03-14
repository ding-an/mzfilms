<template>
    <div class="wrap" @click="toCinemaFilm">
        <div class="left">
            <div class="name">{{cinema.name}}</div>
            <div class="address">{{cinema.address}}</div>
        </div>
        <div class="right">
            <div>￥{{price}}起</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CinemaItem',
    props: {
        cinema: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    computed: {
        price () {
            return this.cinema.lowPrice/100
        }
    },
    methods: {
        //点击跳转电影院电影页面
        toCinemaFilm () {
            this.$router.push({
                path: `/cinemas/${this.cinema.cinemaId}/film`   
            })
        },
    }
}
</script>

<style scoped>
    .wrap {
        height: 75px;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
    }
    .left {
        flex: 1;
    }
    .name {
        font-size: 15px;
    }
    .address {
        color: #797d82;
        font-size: 13px;
        padding-top: 5px;
    }
    .right {
        width: 70px;
    }
    .right div {
        color: #FF5F16;
        font-size: 15px;
    }
</style>