<template lang="html">
    <g id="LAYER_CONNECTION">
        <!-- data-startNode 保存线段开始节点 data-key，
            data-endNode 保存线段结束节点 data-end -->
        <polyline v-for="item in allLines" fill="none" stroke="#909090" stroke-width="2"
            cursor="pointer" marker-end="url(#markerArrow)" marker-start=""
            :points="filterPos(`${item.startNode.x},${item.startNode.y} ${item.endNode.x},${item.endNode.y}`)"
            :data-key="item.dataKey"
         ></polyline>

         <polyline fill="none" stroke="#909090" stroke-width="2" v-if="dragLineVisible"
             cursor="pointer" marker-end="url(#markerArrow)" marker-start=""
             :points="filterDragPos(`${dragLine.startNode.x},${dragLine.startNode.y} ${dragLine.endNode.x},${dragLine.endNode.y}`)"
          ></polyline>
    </g>
</template>

<script>
/** TODO line main logics, includes link func  */
import { mapGetters, mapActions } from 'vuex';
import { MODE } from '../constant/conf.js';
import { CONF } from '../constant';
import R from 'ramda';

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

        };
    },
    computed: {
        ...mapGetters({
            allLines: 'getAllLines',
            affectedLines: 'getAffectedLines',
            mousePos: 'getMousePos',
            mode: 'getMode',
            dragLineVisible: 'getDragLineVisible',
            dragLine: 'getDragLine'
        })
    },
    watch: {
        'mousePos': function() {
            if (this.mode === MODE.MOVE) {
                return;
            }
            if (this.dragLineVisible) {
                let line = Object.assign({}, this.dragLine, {
                    endNode: handlePosValue(this.mousePos)
                });
                this.setDragLine(line);
            }
        }
    },
    created() {

    },
    methods: {
        ...mapActions([
            'addOneLine',
            'setLinesPos',
            'setDragLine'
        ]),
        filterDragPos(pos) {
            // FIXME 这个方法和 filterPos 重复了，需要做一下重构
            let arr = pos.split(' ');
            let startPos = arr[0].split(',');
            let endPos = arr[1].split(',');
            let add = a => Number(a) + 19;
            startPos = R.map(add, startPos);
            return `${startPos[0]},${startPos[1]} ${endPos[0]},${endPos[1]}`;
        },
        filterPos(pos) {
            let arr = pos.split(' ');
            let startPos = arr[0].split(',');
            let endPos = arr[1].split(',');
            let add = a => Number(a) + 19;
            startPos = R.map(add, startPos);
            endPos = R.map(add, endPos);
            endPos = this.calcEndPos(startPos, endPos);
            return `${startPos[0]},${startPos[1]} ${endPos[0]},${endPos[1]}`;
        },
        calcEndPos(startPos, endPos) {
            function squire(x) {
                return Math.pow(x, 2);
            }

            let startObjX = startPos[0];
            let startObjY = startPos[1];
            let endObjX = endPos[0];
            let endObjY = endPos[1];

            // 四个点距离起始位置的距离
            let bottom = Math.pow((squire(endObjY + 20 - startObjY) + squire(endObjX - startObjX)), 0.5);
            let top = Math.pow((squire(endObjY - 20 - startObjY) + squire(endObjX - startObjX)), 0.5);
            let left = Math.pow((squire(endObjY - startObjY) + squire(endObjX - 20 - startObjX)), 0.5);
            let right = Math.pow((squire(endObjY - startObjY) + squire(endObjX + 20 - startObjX)), 0.5);

            // 从小到大排序
            let array = [bottom, top, left, right];
            array.sort(function(a,b) {
                return a > b ? 1 : -1;
            });

            switch (array[0]) {
                case bottom:
                    return [endObjX, endObjY + 23];
                case top:
                    return [endObjX, endObjY - 23];
                case left:
                    return [endObjX - 23, endObjY];
                case right:
                    return [endObjX + 23, endObjY];
            }
        }
    }
};
</script>

<style lang="sass" scoped>

</style>
