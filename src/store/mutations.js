import { SET_CURRENT_CITY } from './mutations.type'

export default {
    [SET_CURRENT_CITY] (state, city) {
        state.currentCity = city
    }
}