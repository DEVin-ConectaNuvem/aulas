import { createStore } from 'vuex';
import userModule from './modules/userModule';
import autenticacaoModule from './modules/autenticacaoModule';
import reservaModule from './modules/reservaModule';

const store = createStore({
    modules: {
        autenticacaoModule,
        userModule,
        reservaModule
    }
});

export default store;