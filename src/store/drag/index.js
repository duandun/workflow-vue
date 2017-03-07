
import * as CONST from './const.js';

const state = {
    pos: {
        mouseX: 0,
        mouseY: 0
    },
    startDrag: false
};

const mutations = {
    [CONST.TOGGLE_DRAG] (state, flag) {
        state.startDrag = flag;
    },
    [CONST.MOUSE_POS] (state, pos) {
        state.pos = pos;
    }
};

const getters = {
    getMousePos(state) {
        return state.pos;
    },
    getStartDrag(state) {
        return state.startDrag;
    }
};

const actions = {
    startToDrag({ commit }, payload) {
        commit(CONST.TOGGLE_DRAG, true);
    },
    stopDrag({ commit }, payload) {
        commit(CONST.TOGGLE_DRAG, false);
    },
    changeMousePos({ commit, state }, pos) {
        if (state.startDrag) {
            commit(CONST.MOUSE_POS, pos);
        }
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
