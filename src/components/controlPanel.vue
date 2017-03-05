<template lang="html">
    <div class="control-panel-wrap">

    </div>
</template>

<script>
/** TODO control panel in the left part  */

import { mapActions } from 'vuex';
import StartNode from './nodes/start.vue';
import EndNode from './nodes/end.vue';
import ForkNode from './nodes/fork.vue';
import UserNode from './nodes/user.vue';

export default {
    data() {
        return {

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
        })
    }
};
</script>

<style lang="sass" scoped>
</style>
