import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import Lines from './lines';
import nodes from './nodes';
import Drag from './drag';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions: {
    },
    getters: {
    },
    modules: {
        Drag,
        Lines,
        nodes
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
