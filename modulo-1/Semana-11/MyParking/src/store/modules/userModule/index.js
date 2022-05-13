import { getUser, newUser } from './actions';

export default {
    namespaced: true,
    state() {
        return {
            user: {}
        }
    },
    actions: {
        getUser,
        newUser
    }
}