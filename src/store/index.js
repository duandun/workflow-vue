import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import Drag from './drag';
import Common from './common';
import State from './state.js';
import Lines from './lines';
import Nodes from './nodes';
import Property from './property';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state: {
        ...State
    },
    mutations: {
        ...Common.mutations,
        ...Lines.mutations,
        ...Nodes.mutations,
        ...Property.mutations,
        ...Drag.mutations
    },
    actions: {
        ...Common.actions,
        ...Lines.actions,
        ...Nodes.actions,
        ...Property.actions,
        ...Drag.actions
    },
    getters: {
        ...Common.getters,
        ...Lines.getters,
        ...Nodes.getters,
        ...Property.getters,
        ...Drag.getters
    },
    modules: {
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
