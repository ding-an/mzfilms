<template>
    <div>
        <div class="searchWrap">
            <CommonSearch 
                placeHolder='输入影城名字' 
                :isShow='isInput'
                @cancelInput='cancelInput'
                @getInputValue='getInputValue'/>
        </div>
        <div>
            <cinema-item 
                v-for="cinema in searchCinemas" 
                :cinema='cinema'
                :key="cinema.cinemaId"></cinema-item>
        </div>
    </div>
</template>

<script>
import CommonSearch from '@/components/content/Search'
import CinemaItem from '../CinemaItem'

export default {
    name: 'Search',
    components: {
        CommonSearch,
        CinemaItem
    },
    data () {
        return {
            isInput: true,
            searchCinemas: []
        }
    },
    computed: {
        cinemas () {
            return this.$route.query.cinemas
        }
    },
    methods: {
        cancelInput () {
            this.$router.push('/cinemas');
        },
        //获取输入框的值 
        getInputValue (value) {
            if(value.length > 0) {
                this.searchCinemas = this.cinemas.filter(
                cinema => cinema.name.indexOf(value) !== -1 || cinema.address.indexOf(value) !== -1);
            } else {
                this.searchCinemas = [];
            }
        }
    }
}
</script>

<style scoped>

</style>