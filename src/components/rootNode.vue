<template lang="html">
    <g id="LAYER_NODE">
        <use :xlink:href="item.name" v-for="item in allNodes" :x="item.x" :y="item.y" data-type="node"
            :data-key="item.dataKey"
        ></use>
    </g>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { CONF } from '../constant';

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

        };
    },
    computed: {
        ...mapGetters({
            allNodes: 'getAllNodes',
            mousePos: 'getMousePos'
        })
    },
    watch: {
        'mousePos': function() {
            this.setCurNodePos(handlePosValue(this.mousePos));
        }
    },
    created() {

    },
    methods: {
        ...mapActions([
            'setCurNodePos'
        ])
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
