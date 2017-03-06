<template lang="html">
    <aside class="main-sidebar">
        <section class="sidebar">
            <!-- <ul class="sidebar-menu">
                <li>首页</li>
            </ul> -->
            <control-panel></control-panel>
        </section>
    </aside>
</template>

<script>
import ControlPanel from '../../controlPanel.vue';

export default {
    data() {
        return {

        };
    },
    created() {

    },
    methods: {

    },
    components: {
        ControlPanel
    }
};
</script>

<style lang="sass" scoped>
    .main-sidebar {
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 50px;
        width: 230px;
        min-height: 100%;
        z-index: 800;
        transition: transform .3s ease-in-out, width .3s ease-in-out;
        font-size: 14px;
        background: #eee;
    }
    .sidebar-menu {
        list-style: none;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;

        li {
            padding: 12px 5px;
        }
    }

    .sidebar-collapse .main-sidebar {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
      width: 0 !important;
      z-index: 850;
    }

    .sidebar {
        padding-bottom: 10px;
    }

</style>
