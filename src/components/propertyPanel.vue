<template lang="html">
    <div class="property-panel" :style="styleObj" @mousedown.stop="onMouseDown">
        <div class="header">
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
import { mapGetters } from 'vuex';
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters({
            styleObj: 'getPropertyPanelPos'
        })
    },
    created() {

    },
    methods: {
        onMouseDown() {
            return false;
        }
    }
};
</script>

<style lang="sass" scoped>
    .property-panel {
        width: 200px;
        height: auto;
        position: absolute;
        background: #fff;
        border: 1px solid #74a70e;
        z-index: 990;

        .container {
            width: 100%;
            height: 200px;
        }
    }
</style>
