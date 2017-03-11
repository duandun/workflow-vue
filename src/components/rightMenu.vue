<template lang="html">
    <div class="context-menu" :style="styleObj">
        <ul @mousedown.stop="onMouseDown">
            <li v-for="item in menus" :data-type="item.dataType">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { MODE } from '../constant/conf.js';
import R from 'ramda';

export default {
    props: {
        styleObj: {
            type: Object,
            default: function() {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        menus: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data() {
        return {
        };
    },
    computed: {
        ...mapGetters({
            mode: 'getMode',
            curNode: 'getCurNode'
        })
    },
    created() {

    },
    methods: {
        ...mapActions([
            'changeMode',
            'deleteNode'
        ]),
        onMouseDown(event) {
            let target = event.target || event.srcElement;
            let modeType = target.getAttribute('data-type');
            if (R.contains(modeType, R.values(MODE))) {
                this.changeMode(modeType);
            } else {
                this.deleteNode(this.curNode);
            }
            this.$emit('closeMenu');
        }
    }
};
</script>

<style lang="sass" scoped>
    .context-menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: auto;
        background: #bbb;
        overflow: hidden;
        z-index: 1000;
        ul {
            list-style: none;
            text-align: center;
            margin: 0 auto;
            padding: 0;
            li {
                padding: 5px;
                cursor: pointer;
                overflow: hidden;
                &:hover {
                    background: #489fdf;
                    color: #fff;
                }
            }
        }
    }
</style>
