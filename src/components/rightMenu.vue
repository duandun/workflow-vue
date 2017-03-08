<template lang="html">
    <div class="context-menu" :style="styleObj">
        <ul @mousedown.stop="onMouseDown">
            <li :data-type="modeType.LINK">连线模式</li>
            <li :data-type="modeType.MOVE">移动模式</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { MODE } from '../constant/conf.js';

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
        }
    },
    data() {
        return {
            modeType: MODE
        };
    },
    computed: {
        ...mapGetters({
            mode: 'getMode'
        })
    },
    created() {

    },
    methods: {
        ...mapActions([
            'changeMode'
        ]),
        onMouseDown(event) {
            let target = event.target || event.srcElement;
            let modeType = target.getAttribute('data-type');
            this.changeMode(modeType);
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
