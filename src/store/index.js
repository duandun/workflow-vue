import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import Drag from './drag';
import Global from './global';
import State from './state.js';
import Lines from './lines';
import Nodes from './nodes';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state: {
        ...State
    },
    mutations: {
        ...Global.mutations,
        ...Lines.mutations,
        ...Nodes.mutations
    },
    actions: {
        ...Global.actions,
        ...Lines.actions,
        ...Nodes.actions
    },
    getters: {
        ...Global.getters,
        ...Lines.getters,
        ...Nodes.getters
    },
    modules: {
        Drag
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
