
import * as CONST from './const.js';
import { MODE } from '../../constant/conf.js';

const state = {
    mode: MODE.MOVE
};

const mutations = {
    [CONST.CHANGE_MODE] (state, mode) {
        state.mode = mode;
    }
};

const getters = {
    getMode(state) {
        return state.mode;
    }
};

const actions = {
    changeMode({ state, commit }, mode) {
        if (state.mode !== mode) {
            commit(CONST.CHANGE_MODE, mode);
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
