
import * as CONST from '../const.js';

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
        commit(CONST.MOUSE_POS, pos);
    }
};

export default {
    mutations,
    getters,
    actions
};
