<template>
    <div class="container">
        <svg xmlns="http://www.w3c.org/2000/svg" width="100%" height="100%">
            <defs id="defs">
                <pattern id="grid" x="0" y="0" width="20"z height="20" patternUnits="userSpaceOnUse">
        			<polyline points="0,20 20,20 20,0" style="fill:none;stroke:#f0f0f0;stroke-width:1" />
        		</pattern>
            </defs>
            <rect id="bg" width="100%" height="99.3%" fill="url(#grid)" def="bg"></rect>
            <g id="LAYER_CONNECTION">
            </g>
            <g id="LAYER_DRAGGING">
            </g>
            <g id="LAYER_NODE">
                <root-node v-for="item in allNodes" :currentComponents="item"></root-node>
            </g>
        </svg>

        <control-panel></control-panel>
    </div>
</template>
<script>
import ControlPanel from '../../components/controlPanel.vue';
import RootNode from '../../components/rootNode.vue';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters({
            allNodes: 'getAllNodes',
            allLines: 'getAllLines'
        })
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components: {
        ControlPanel,
        RootNode
    }
};
</script>
<style lang="sass" scoped>
    .container {
        transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
        margin-left: 230px;
        width: 100%;
        height: 80%;
    }
    .sidebar-collapse .container {
        margin-left: 0 !important;
    }
</style>
