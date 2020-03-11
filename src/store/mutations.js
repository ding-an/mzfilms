import { SET_CURRENT_CITY, GET_FILMS } from './mutations.type'

export default {
    [SET_CURRENT_CITY] (state, city) {
        state.currentCity = city
    },
    [GET_FILMS] (state, films) {
        state.films = films
    }
}