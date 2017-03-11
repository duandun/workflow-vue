import { MODE } from '../constant/conf.js';

export default {
    // global mode
    mode: MODE.MOVE,

    // mouse drag
    pos: {
        mouseX: 0,
        mouseY: 0
    },
    startDrag: false,

    // lines
    allLines: [],
    affectedLines: [],
    dragLine: {},
    dragLineVisible: false,

    // nodes
    allNodes: [],
    currentNode: {},

    // properties
    showPropertyPanel: false,
    propertyPanelPos: {}
};
