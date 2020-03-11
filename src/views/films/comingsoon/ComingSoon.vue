<template>
    <div>
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
    },
    mounted () {
        console.log(this.films)
    }
}
</script>

<style scoped>

</style>