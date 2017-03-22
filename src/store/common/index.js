
import * as CONST from '../const.js';
import R from 'ramda';

const mutations = {
    // global
    [CONST.CHANGE_MODE] (state, mode) {
        state.mode = mode;
    },
    [CONST.DELETE_NODE] (state, node) {
        let allNodes = state.allNodes;
        allNodes.splice(allNodes.indexOf(node), 1);
    },
    [CONST.DELETE_LINES] (state, lines) {
        let allLines = state.allLines;
        let deleteOneLine = item => {
            allLines.splice(allLines.indexOf(item), 1);
        };
        R.forEach(deleteOneLine)(lines);
    },
    [CONST.SET_RIGHTMENU_POS] (state, pos) {
        state.rightMenuPos = pos;
    }
};

const getters = {
    // global
    getMode(state) {
        return state.mode;
    },
    getRightMenuPos(state) {
        return state.rightMenuPos;
    }
};

const actions = {
    // global
    changeMode({ state, commit }, mode) {
        if (state.mode !== mode) {
            commit(CONST.CHANGE_MODE, mode);
        }
    },
    deleteNode({ state, commit }, node) {
        if (!node) {
            return;
        }
        commit(CONST.DELETE_NODE, node);
        let comp = item => {
            return item.startNode === node || item.endNode === node;
        };
        let lines = R.filter(comp)(state.allLines);
        commit(CONST.DELETE_LINES, lines);
    },
    setRightMenuPos({ commit }, pos) {
        commit(CONST.SET_RIGHTMENU_POS, pos);
    }
};

export default {
    getters,
    mutations,
    actions
};
