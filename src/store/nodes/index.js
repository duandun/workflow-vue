import * as CONST from '../global/const.js';
import R from 'ramda';

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
    },
    getCurNode(state) {
        return state.currentNode;
    }
};

const actions = {
    addOneNode({ commit }, node) {
        commit(CONST.ADD_ONE_NODE, node);
    },
    setCurNodePos({ commit, state }, pos) {
        if (!R.isEmpty(state.currentNode)) {
            commit(CONST.SET_POS, pos);
        }
    },
    setCurNode({ commit, state }, node) {
        return new Promise((resolve, reject) => {
            let curNode = state.allNodes.find((item) => {
                    return item === node;
                });
            if (curNode) {
                commit(CONST.SET_CUR_NODE, curNode);
                resolve();
            }
        });
    },
    resetCurNode({ commit }) {
        commit(CONST.SET_CUR_NODE, {});
    },
    findNodeByKey({ state }, key) {
        let allNodes = state.allNodes;
        return allNodes.find(item => {
            return item.dataKey === key;
        });
    }
};

export default {
    mutations,
    getters,
    actions
};
