<template lang="html">
    <g id="LAYER_NODE">
        <use :xlink:href="item.name" v-for="item in allNodes" :x="item.x" :y="item.y" data-type="node"
            :data-key="item.dataKey"
            @mousemove="onMouseMove($event, item)"
            @mouseleave="onMouseLeave($event, item)"
            @mousedown="onMouseDown($event, item)"
        ></use>
    </g>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { CONF } from '../constant';
import { MODE } from '../constant/conf.js';
import _ from 'lodash';

const handlePosValue = (pos) => {
    let screenSize = window.screenSize || 'small';
    let x = pos.mouseX - CONF.SCREEN_SIZE[screenSize].offsetX - 15;
    let y = pos.mouseY - CONF.SCREEN_SIZE[screenSize].offsetY - 10;
    return {
        x,
        y
    };
};

const createLinkDiv = () => {
    let div = document.createElement('div');
    let body = document.getElementsByTagName('body')[0];
    div.style.position = 'absolute';
    div.style.display = 'none';
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.border = '1px solid #000';
    div.style.borderRadius = '25px';
    div.style.zIndex = '1000';
    div.addEventListener('mouseleave', function() {
        this.style.display = 'none';
    });
    body.appendChild(div);
    return div;
}

export default {
    props: {

    },
    data() {
        return {
            linkDiv: createLinkDiv()
        };
    },
    computed: {
        ...mapGetters({
            allNodes: 'getAllNodes',
            mousePos: 'getMousePos',
            mode: 'getMode'
        })
    },
    watch: {
        'mousePos': function() {
            if (this.mode === MODE.LINK) {
                return;
            }
            this.setCurNodePos(handlePosValue(this.mousePos));
        }
    },
    created() {

    },
    methods: {
        ...mapActions([
            'setCurNodePos'
        ]),
        onMouseDown(event, node) {

        },
        onMouseLeave(event, node) {
        //    this.linkDiv.style.display = 'none';
        },
        onMouseMove(event, node) {
            // let screenSize = window.screenSize || 'small';
            let mouseX = event.clientX || 0;
            let mouseY = event.clientY || 0;
            // if (mouseX - CONF.SCREEN_SIZE[screenSize].offsetX > node.x + 35) {
            //     let left = node.x + CONF.SCREEN_SIZE[screenSize].offsetX + 35 + 'px';
            //     let top = node.y + CONF.SCREEN_SIZE[screenSize].offsetY + 16 + 'px';
            //     this.displayLinkDiv(top, left);
            // }
            let results = this.calcBoundDiv(mouseX, mouseY, node);
            if (!_.isEmpty(results)) {
                let left = results.x + 'px';
                let top = results.y + 'px';
                this.displayLinkDiv(top, left);
            }
        },
        calcBoundDiv(mouseX, mouseY, node) {
            // 计算连线 div 的出现位置
            let screenSize = window.screenSize || 'small';
            let pointA = {
                x: mouseX,
                y: mouseY
            };
            let cx = node.x + CONF.SCREEN_SIZE[screenSize].offsetX;
            let cy = node.y + CONF.SCREEN_SIZE[screenSize].offsetY;
            let pointBArr = [{
                    x: cx,
                    y: cy + 18
                }, {
                    x: cx + 18,
                    y: cy
                }, {
                    x: cx + 37,
                    y: cy + 19
                }, {
                    x: cx + 19,
                    y: cy + 37
                }
            ];

            return this.calcPointsDistence(pointA, pointBArr);
        },
        calcPointsDistence(pointA, pointBArr) {
            let results = {};
            pointBArr.forEach((item) => {
                let res = Math.pow(Math.pow(pointA.x - item.x, 2) + Math.pow(pointA.y - item.y, 2), 0.5);
                if (res > -0.01 && res < 0.01) {
                    results = item;
                }
            });
            return results;
        },
        displayLinkDiv(top, left) {
            let div = this.linkDiv;
            div.style.top = top;
            div.style.left = left;
            div.style.display = 'block';
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
