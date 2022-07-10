import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
    state:{
        count: 0
},
    mutations: {
        increment (state) {
            state.count++
        }
    }
})