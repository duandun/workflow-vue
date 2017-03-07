
import { StartNode, ForkNode, EndNode, UserNode } from '../components/nodes';

export const NODES_LIST = [
    {
        title: '开始节点',
        isActive: false,
        ...StartNode
    },
    {
        title: '结束节点',
        isActive: false,
        ...EndNode
    },
    {
        title: '分支节点',
        isActive: false,
        ...ForkNode
    },
    {
        title: '用户节点',
        isActive: false,
        ...UserNode
    }
];

export const DRAGGABLE_ELEM = [
    'node',
    'line',
    'frameBox'
];

export const SCREEN_SIZE = {
    small: {
        offsetX: 230,
        offsetY: 50
    },
    large: {
        offsetX: 0,
        offsetY: 50
    }
};
