<template lang="html">
    <g id="LAYER_NODE">
        <use :xlink:href="item.name" v-for="item in allNodes" :x="item.x" :y="item.y" data-type="node"
            :data-key="item.dataKey"
            @mousemove="onMouseMove($event, item)"
            @mouseleave="onMouseLeave($event, item)"
            @mousedown="onMouseDown($event, item)"
            @mouseup="onMouseUp($event, item)"
            :style="{cursor: mouseCursor}"
        ></use>
    </g>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { CONF } from '../constant';
import { MODE } from '../constant/conf.js';
import { helper } from '../utils';

const handlePosValue = (pos) => {
    let screenSize = window.screenSize || 'small';
    let x = pos.mouseX - CONF.SCREEN_SIZE[screenSize].offsetX;
    let y = pos.mouseY - CONF.SCREEN_SIZE[screenSize].offsetY;
    return {
        x,
        y
    };
};

export default {
    props: {

    },
    data() {
        return {
            mouseCursor: 'move',
            mousedowned: false
        };
    },
    computed: {
        ...mapGetters({
            allNodes: 'getAllNodes',
            mousePos: 'getMousePos',
            mode: 'getMode',
            dragLineVisible: 'getDragLineVisible',
            dragLine: 'getDragLine',
            startDrag: 'getStartDrag'
        })
    },
    watch: {
        'mousePos': function() {
            if (this.mode === MODE.LINK) {
                return;
            }
            if (!this.startDrag || !this.mousedowned) {
                return;
            }
            this.setCurNodePos(handlePosValue(this.mousePos));
        },
        'mode': function() {
            this.mouseCursor = this.mode === MODE.LINK ? 'pointer' : 'move';
        }
    },
    created() {

    },
    methods: {
        ...mapActions([
            'addOneLine',
            'startToDrag',
            'setCurNode',
            'setCurNodePos',
            'setDragLine',
            'changeDragLineVisible',
            'resetCurNode'
        ]),
        onMouseDown(event, node) {
            let tmp = handlePosValue({
                mouseX: event.clientX || 0,
                mouseY: event.clientY || 0
            });
            node['offsetX'] = tmp.x - (Number(node.x) || 0);
            node['offsetY'] = tmp.y - (Number(node.y) || 0);
            this.setCurNode(node);
            if (event.button === 2) {
                return true;
            }
            if (this.mode === MODE.MOVE) {
                this.mousedowned = true;
                this.startToDrag();
                return;
            }
            // 显示连接线段
            let line = {
                dataKey: helper.guid(),
                startNode: node,
                endNode: node
            };
            this.changeDragLineVisible(true);
            this.setDragLine(line);
        },
        onMouseUp(event, node) {
            // 若在 node 上 mouseup 则需要检测是否有相关连线操作
            if (this.dragLineVisible) {
                let line = {
                    dataKey: helper.guid(),
                    startNode: this.dragLine.startNode,
                    endNode: node
                }
                this.addOneLine(line);
            }
            this.mousedowned = false;
            this.resetCurNode();
        },
        onMouseLeave(event, node) {

        },
        onMouseMove(event, node) {

        }
    },
    components: {
    }
};
</script>

<style lang="sass" scoped>
    use {
        cursor: move;
    }
</style>
