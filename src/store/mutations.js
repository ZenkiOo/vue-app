import { SET_TODOS } from '@/store/mutations-types';

export default {
    [SET_TODOS]: (state, payload) => {
        state.todos = payload
    }
}