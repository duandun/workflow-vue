import * as CONST from './const.js';

const state = {
    allNodes: []
};

const mutations = {
    [CONST.ADD_ONE_NODE] (state, node) {
        state.allNodes.push(node);
    }
};

const getters = {
    getAllNodes(state) {
        return state.allNodes;
    }
};

const actions = {
    addOneNode({ commit }, node) {
        commit(CONST.ADD_ONE_NODE, node);
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
