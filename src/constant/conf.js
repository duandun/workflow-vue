
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

export const MODE = {
    LINK: 'link',
    MOVE: 'move'
};

export const RIGHTMENU_CONF = [
    {
        name: '连线模式',
        dataType: MODE.LINK
    },
    {
        name: '移动模式',
        dataType: MODE.MOVE
    },
    {
        name: '节点属性',
        dataType: 'properties'
    },
    {
        name: '删除节点',
        dataType: 'delete'
    }
];
