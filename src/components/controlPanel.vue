<template lang="html">
    <div class="control-panel-wrap">
        <ul class="nodes-classify">
            <li v-for="item in nodesList" :class="{ active: item.isActive }"
                @click="onClickNode($event, item)"
            >
                {{ item.title }}
            </li>
        </ul>
        <!-- <frame-box v-if="activated"></frame-box> -->
    </div>
</template>

<script>
/** TODO control panel in the left part  */
import { mapActions, mapGetters } from 'vuex';
import { CONF } from '../constant';
import _ from 'lodash';

const handlePosValue = (pos) => {
    let x = pos.mouseX - 16;
    let y = pos.mouseY - 10;
    return {
        x,
        y
    };
};

const FrameBox = {
    template: '<div class="drag-box" :style="styleObject" data-type="frameBox"></div>',
    props: {

    },
    data() {
        return {
            freeze: true,
            styleObject: {
                top: '100px',
                left: '240px'
            }
        };
    },
    computed: {
        ...mapGetters({
            mousePos: 'getMousePos'
        })
    },
    watch: {
        mousePos: function() {
            this.setStyleObject(handlePosValue(this.mousePos));
        }
    },
    created() {

    },
    methods: {
        ...mapActions([
            'setCurNodePos'
        ]),
        setStyleObject(pos) {
            this.styleObject.top = pos.y + 'px';
            this.styleObject.left = pos.x + 'px';
        }
    }
};

export default {
    data() {
        return {
            nodesList: CONF.NODES_LIST,
            activated: false
        };
    },
    created() {

    },
    methods: {
        ...mapActions({
            addOneNode: 'addOneNode'
        }),
        onClickNode(event, node) {
            this.nodesList.forEach((item) => {
                item.isActive = item === node;
            });
            let tmpConf = _.cloneDeep(node);
            // generates unique key_ for node
            tmpConf['dataKey'] = _.uniqueId('key_');
            this.addOneNode(tmpConf);
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
