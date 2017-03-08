import * as CONST from './const.js';
import _ from 'lodash';

const state = {
    allNodes: [],
    currentNode: {}
};

const mutations = {
    [CONST.ADD_ONE_NODE] (state, node) {
        state.allNodes.push(node);
    },
    [CONST.SET_CUR_NODE] (state, node) {
        state.currentNode = node;
    },
    [CONST.SET_POS] (state, pos) {
        state.currentNode.x = pos.x;
        state.currentNode.y = pos.y;
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
    },
    setCurNodePos({ commit, state }, pos) {
        if (!_.isEmpty(state.currentNode)) {
            commit(CONST.SET_POS, pos);
        }
    },
    setCurNode({ commit, state }, key) {
        return new Promise((resolve, reject) => {
            let curNode = state.allNodes.find((item) => {
                    return item.dataKey === key;
                });
            if (curNode) {
                commit(CONST.SET_CUR_NODE, curNode);
                resolve();
            }
        });
    },
    resetCurNode({ commit }) {
        commit(CONST.SET_CUR_NODE, {});
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
