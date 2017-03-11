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
    let x = pos.mouseX - CONF.SCREEN_SIZE[screenSize].offsetX - 15;
    let y = pos.mouseY - CONF.SCREEN_SIZE[screenSize].offsetY - 10;
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
            mouseCursor: 'move'
        };
    },
    computed: {
        ...mapGetters({
            allNodes: 'getAllNodes',
            mousePos: 'getMousePos',
            mode: 'getMode',
            dragLineVisible: 'getDragLineVisible',
            dragLine: 'getDragLine'
        })
    },
    watch: {
        'mousePos': function() {
            if (this.mode === MODE.LINK) {
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
            'changeDragLineVisible'
        ]),
        onMouseDown(event, node) {
            this.setCurNode(node);
            if (this.mode === MODE.MOVE) {
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
