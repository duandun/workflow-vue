<template lang="html">
    <div class="property-panel" :style="styleObj" @mousedown.stop="" @mouseup="onMouseUp">
        <div class="header" @mousedown="onMouseDown">
            <slot name="header"></slot>
        </div>
        <div class="container">
            <slot name="content" ></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import R from 'ramda';

export default {
    props: {

    },
    data() {
        return {
            mousedowned: false,
            offsetX: 0,
            offsetY: 0
        };
    },
    computed: {
        ...mapGetters({
            styleObj: 'getPropertyPanelPos',
            mousePos: 'getMousePos',
            mode: 'getMode',
            startDrag: 'getStartDrag'
        })
    },
    watch: {
        'mousePos': function() {
            if (!this.startDrag || !this.mousedowned) {
                return;
            }
            this.setPropertyPanelPos(this.handlePosValue(this.mousePos));
        }
    },
    created() {

    },
    methods: {
        ...mapActions([
            'startToDrag',
            'setPropertyPanelPos'
        ]),
        handlePosValue(pos) {
            let x = Number(pos.mouseX) - this.offsetX;
            let y = Number(pos.mouseY) - this.offsetY;
            return {
                top: y + 'px',
                left: x + 'px'
            };
        },
        onMouseDown(event) {
            if (event.button === 2) {
                return true;
            }
            let mouseX = event.clientX || 0;
            let mouseY = event.clientY || 0;
            let styleObj = this.styleObj;
            let top = Number(R.replace(/px/g, '', styleObj.top));
            let left = Number(R.replace(/px/g, '', styleObj.left));
            this.offsetX = mouseX - left;
            this.offsetY = mouseY - top;

            this.mousedowned = true;
            this.startToDrag();
            return false;
        },
        onMouseUp() {
            this.mousedowned = false;
        }
    }
};
</script>

<style lang="sass" scoped>
    .property-panel {
        position: absolute;
        background: #fff;
        border: 1px solid #74a70e;
        z-index: 990;

        .container {
            width: 100%;
            height: auto;
            padding: 5px;
        }

        .header {
            cursor: move;
            padding: 5px;
            background: #155cc7;
            color: #fff;
        }
    }
</style>
