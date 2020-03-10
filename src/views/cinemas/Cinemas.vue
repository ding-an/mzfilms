<template>
    <div>
        cinemas
        <button @click="toCity">城市</button>
        <main-tab-bar/>
    </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'

import request from '@/network/request'

export default {
    name: 'Cinemas',
    components: {
        MainTabBar
    },
    methods: {
        toCity () {
            this.$router.push('/city'),
            request('mall.film-ticket.film.list', {
                type: 2,
                cityId: 440100,
                k: 1954490,
                pageNum: 1,
                pageSize: 10
            }).then(res => console.log(res))
        }
    }
}
</script>

<style scoped>

</style>