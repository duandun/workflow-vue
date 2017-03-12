<template lang="html">
    <rootPanel>
        <div class="" slot="header">

        </div>
        <p slot="content" @mousedown.stop="onMouseDown">哈哈哈哈的的的啦啦啦</p>
        <div class="" slot="footer">

        </div>
    </rootPanel>
</template>

<script>
import rootPanel from './propertyPanel.vue';
export default {
    data() {
        return {

        };
    },
    created() {

    },
    methods: {
        onMouseDown() {
            alert('click!');
        }
    },
    components: {
        rootPanel
    }
};
</script>

<style lang="css">
</style>
