<template>
    <div>
        films
        <router-link to="/city">
            <button>城市</button>
        </router-link>
        <main-tab-bar/>
    </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'

import request from '@/network/request'

import { mapState } from 'vuex'

export default {
    name: 'Films',
    components: {
        MainTabBar
    },
    created () {
        this.getInitFilms();
    },
    computed: {
        ...mapState(['currentCity'])
    },
    methods: {
        getInitFilms () {
            request('mall.film-ticket.film.list', {
                cityId: this.currentCity,
                pageNum: 1,
                pageSize: 10,
                type: 1,
                k: 127927
            }).then(res => console.log(res))
        }
    }
}
</script>

<style scoped>

</style>