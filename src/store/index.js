import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import Lines from './lines';
import Nodes from './nodes';
import Drag from './drag';
import Global from './global';

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
        Nodes,
        Global
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
