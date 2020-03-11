<template>
    <div>
        <div v-html="info.content"></div>
        <main-tab-bar/>
    </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'

import request from '@/network/request'

export default {
    name: 'Info',
    components: {
        MainTabBar
    },
    data () {
        return {
            info: ''
        }
    },
    created () {
        this.getInfo()
    },
    methods: {
        getInfo () {
            request ('mall.act.static-page.info', {
                    actId: 'ElzMZU125260'
            }).then(res => this.info = res.data.data.data)
        }
    }
}
</script>

<style scoped>

</style>