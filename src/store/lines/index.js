import * as CONST from './const.js';

// const struct = {
//     startPos: '',
//     endPos: '',
//     dataKey: '',
//     startNodeKey: '',
//     endNodeKey: ''
// }

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
    addOneLine({ commit }, line) {
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
