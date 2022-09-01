import { createStore } from 'vuex'
import rootData from '@/root.json'


const store = createStore({
    state: {
        data: rootData
    },
    getters: {
        data(state){
            return state.data
        }
    }
})

export default store