import * as CONST from './const.js';

const state = {
    allLines: []
};

const mutations = {
    [CONST.ADD_ONE_LINE] (state, line) {
        state.allLines.push(line);
    }
};

const getters = {
    getAllLines(state) {
        return state.allLines;
    }
};

const actions = {
    addOneLine({ commit }, node) {
        commit(CONST.ADD_ONE_LINE, node);
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
