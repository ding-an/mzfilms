import request from '@/network/request'

export default {
    methods: {
        getNowPlayingFilms () {
            request('mall.film-ticket.film.list', {
                cityId: this.currentCity.cityId,
                pageNum: 1,
                pageSize: 10,
                type: 1,
                k: 127927
            }).then(res => this.GET_FILMS(res.data.data.films))
        }
    }
}