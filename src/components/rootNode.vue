<template lang="html">
    <components
        :is="currentComponents">
    </components>
</template>

<script>
/** TODO rootNode bind different components according to the props  */

import StartNode from './nodes/start.vue';

export default {
    props: {
        currentComponents: {
            type: Object,
            default: function() {
                return StartNode;
            }
        }
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    components: {
    }
};
</script>

<style lang="css">
</style>
