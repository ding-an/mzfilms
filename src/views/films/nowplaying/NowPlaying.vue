<template>
    <div class="nowPalying">
        <film-item :film='film' v-for="film in films" :key="film.filmId"></film-item>
    </div>
</template>

<script>
import FilmItem from '../FilmItem'

import { mapState } from 'vuex'

export default {
    name: 'NowPlaying',
    components: {
        FilmItem
    },
    computed: {
        ...mapState(['films'])
    }
}
</script>

<style scoped>

</style>