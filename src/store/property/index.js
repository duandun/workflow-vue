import * as CONST from '../global/const.js';
import R from 'ramda';

const handlePosValue = (pos) => {
    let top = Number(R.replace(/px/g, '', pos.top));
    let left = Number(R.replace(/px/g, '', pos.left));
    left += 20;

    return {
        top: top + 'px',
        left: left + 'px'
    };
};

const mutations = {
    [CONST.SHOW_PROPERTY_PANEL] (state, flag) {
        state.showPropertyPanel = flag;
    },
    [CONST.SET_PROPERTY_PANEL_POS] (state, pos) {
        state.propertyPanelPos = pos;
    }
};

const getters = {
    getShowPropertyPanel(state) {
        return state.showPropertyPanel;
    },
    getPropertyPanelPos(state) {
        return state.propertyPanelPos;
    }
};

const actions = {
    changeShowPropertyPanel({ commit, state }, flag) {
        if (flag) {
            let pos = handlePosValue(state.rightMenuPos);
            commit(CONST.SET_PROPERTY_PANEL_POS, pos);
        }
        commit(CONST.SHOW_PROPERTY_PANEL, flag);
    },
    setPropertyPanelPos({ commit }, pos) {
        commit(CONST.SET_PROPERTY_PANEL_POS, pos);
    }
};

export default {
    mutations,
    getters,
    actions
};
