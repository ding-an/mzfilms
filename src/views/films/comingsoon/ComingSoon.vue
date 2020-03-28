<template>
    <div class="comingSoon">
        <film-item 
            :film='film'
            :isPlaying = 'false' 
            v-for="film in films" :key="film.filmId"></film-item>
    </div>
</template>

<script>
import FilmItem from '../FilmItem'

import { mapState } from 'vuex'

export default {
    name: 'ComingSoon',
    components: {
        FilmItem
    },
    computed: {
        ...mapState(['films'])
    }
}
</script>

<style scoped>
    .comingSoon {
        margin-bottom: 50px;
    }
</style>