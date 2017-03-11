import { MODE } from '../constant/conf.js';

export default {
    // global mode
    mode: MODE.MOVE,

    // lines
    allLines: [],
    affectedLines: [],
    dragLine: {},
    dragLineVisible: false,

    // nodes
    allNodes: [],
    currentNode: {}
};
