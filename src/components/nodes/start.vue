<template lang="html">
    <div class="start-panel" :style="styleObj">
        <div class="container">

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

    }
};
</script>

<style lang="sass" scoped>
    .start-panel {
        width: 200px;
        height: auto;
        position: absolute;
        background: #bbb;
        z-index: 990;

        .container {
            width: 100%;
            height: 200px;
        }
    }
</style>
