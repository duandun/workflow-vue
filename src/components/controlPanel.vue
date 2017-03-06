<template lang="html">
    <div class="control-panel-wrap">
        <ul class="nodes-classify">
            <li v-for="item in nodesList" :class="{ active: item.isActive }" @mousedown.stop="onClickNode($event, item)">
                {{ item.name }}
            </li>
        </ul>
        <frame-box v-if="activated" :styleObject="frameStyle" @frame-move="frameMove" ref="myFrame"></frame-box>
    </div>
</template>

<script>
/** TODO control panel in the left part  */

import { mapActions } from 'vuex';
import StartNode from './nodes/start.vue';
import EndNode from './nodes/end.vue';
import ForkNode from './nodes/fork.vue';
import UserNode from './nodes/user.vue';
import { CONF } from '../constant';

const handleClientXY = (event) => {
    let cx = event.clientX - 16;
    let cy = event.clientY - 10;
    return {
        cx,
        cy
    };
};

const FrameBox = {
    template: '<div class="drag-box" :style="styleObject" @mousemove="mouseMove" @click="onFrameClick" @mouseup="onMouseUp"></div>',
    props: {
        styleObject: {
            type: Object,
            default: function() {
                return {
                    top: 0,
                    left: 0
                };
            }
        }
    },
    data() {
        return {
            freeze: true
        };
    },
    created() {
        this.freeze = false;
    },
    methods: {
        onMouseUp(event) {
            this.freeze = true;
        },
        mouseMove(event) {
            if (!this.freeze) {
                this.$emit('frame-move', handleClientXY(event));
            }
        },
        onFrameClick(event) {

        }
    }
};

export default {
    data() {
        return {
            nodesList: CONF.NODES_LIST,
            activated: false,
            frameStyle: {}
        };
    },
    created() {
        // TODO for test
        this.addOneNode(StartNode);
        this.addOneNode(EndNode);
        this.addOneNode(ForkNode);
        this.addOneNode(UserNode);
    },
    methods: {
        ...mapActions({
            addOneNode: 'addOneNode'
        }),
        onClickNode(event, node) {
            this.nodesList.forEach((item) => {
                item.isActive = item === node;
            });
            this.activated = true;
            this.frameMove(event);
        },
        frameMove(event) {
            let cx = event.clientX || event.cx;
            let cy = event.clientY || event.cy;
            this.frameStyle = {
                top: cy + 'px',
                left: cx + 'px'
            }
        }
    },
    components: {
        FrameBox
    }
};
</script>

<style lang="sass" scoped>
    .control-panel-wrap {
        margin-top: 20px;
    }
    .nodes-classify {
        list-style: none;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;

        li {
            padding: 12px 20px;
            cursor: pointer;
            &.active {
                background: #a9dbf4;
                &:hover {
                    background: #a9dbf4;
                }
            }
            &:hover {
                background: #fff;
            }
        }
    }
    .drag-box {
        position: absolute;
        width: 40px;
        height: 40px;
        border: 1px solid #489fdf;
        background: #fff;
    }
</style>
