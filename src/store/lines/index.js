
import * as CONST from './const.js';
import R from 'ramda';

// line struct
// const struct = {
//     dataKey: helper.guid(),
//     startNode: node,
//     endNode: node
// };

const state = {
    allLines: [],
    affectedLines: [],
    dragLine: {},
    dragLineVisible: false
};

const mutations = {
    [CONST.ADD_ONE_LINE] (state, line) {
        state.allLines.push(line);
    },
    [CONST.AFFECT_LINES] (state, lines) {
        state.affectedLines = [];
        state.affectedLines = lines;
    },
    [CONST.SET_LINES_POS] (state, pos) {

    },
    [CONST.DRAG_LINE_VISIBLE] (state, flag) {
        state.dragLineVisible = flag;
    },
    [CONST.DRAG_LINE] (state, line) {
        state.dragLine = line;
    }
};

const getters = {
    getAllLines(state) {
        return state.allLines;
    },
    getAffectedLines(state) {
        return state.affectedLines;
    },
    getDragLineVisible(state) {
        return state.dragLineVisible;
    },
    getDragLine(state) {
        return state.dragLine;
    }
};

const actions = {
    addOneLine({ commit, state }, line) {
        // 去掉重复线段
        let eq = (item) =>
            item.startNode === line.startNode && item.endNode === line.endNode;
        let res = R.findIndex(eq)(state.allLines);
        if (res !== -1) {
            return;
        }
        commit(CONST.ADD_ONE_LINE, line);
    },
    setLinesPos({ commit }, pos) {

    },
    setAffectedLines({ commit }, lines) {
        commit(CONST.AFFECT_LINES, lines);
    },
    changeDragLineVisible({ commit }, flag) {
        commit(CONST.DRAG_LINE_VISIBLE, flag);
    },
    setDragLine({ commit }, line) {
        commit(CONST.DRAG_LINE, line);
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
