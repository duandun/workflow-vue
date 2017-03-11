import * as CONST from '../global/const.js';
import { CONF } from '../../constant';

const handlePosValue = (pos) => {
    let screenSize = window.screenSize || 'small';
    let x = pos.mouseX - CONF.SCREEN_SIZE[screenSize].offsetX - 15;
    let y = pos.mouseY - CONF.SCREEN_SIZE[screenSize].offsetY - 10;
    return {
        top: y + 'px',
        left: x + 'px'
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
            let pos = handlePosValue(state.pos);
            commit(CONST.SET_PROPERTY_PANEL_POS, pos);
        }
        commit(CONST.SHOW_PROPERTY_PANEL, flag);
    }
};

export default {
    mutations,
    getters,
    actions
};
