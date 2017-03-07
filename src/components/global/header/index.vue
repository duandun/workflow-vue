<template lang="html">
  <header class="main-header">
      <a href="/" class="logo">
          <span class="logo-lg">Workflow</span>
      </a>
      <nav class="navbar">
          <a href="javascript:;" @click="toggleMenu" class="sidebar-toggle"></a>
      </nav>
  </header>
</template>

<script>
import $ from 'webpack-zepto';

export default {
    data() {
        return {

        };
    },
    created() {

    },
    methods: {
        toggleMenu() {
            $('body').toggleClass('sidebar-collapse');
            window.screenSize = window.screenSize === 'large' ? 'small' : 'large';
        }
    }
};
</script>

<style lang="sass" scoped>
    header {
        position: relative;
        z-index: 1000;
        width: 100%;
        height: 50px;
        background: #489fdf;

        .logo {
            display: block;
            float: left;
            padding: 0 15px;
            width: 230px;
            height: 50px;
            font-size: 20px;
            line-height: 50px;
            text-align: center;
            letter-spacing: 4px;
            color: #fff;
            overflow: hidden;
        }
    }
    .navbar {
        transition: margin-left .3s ease-in-out;
        margin-bottom: 0;
        margin-left: 230px;
        border: none;
        height: inherit;
        border-radius: 0;
    }
    .sidebar-toggle {
        float: left;
        background-color: transparent;
        background-image: none;
        padding: 15px 15px;
        font-family: fontAwesome;
        color: #fff;

        &:before {
            content: "\f0c9";
        }

        &:hover {
            color: #286090;
        }
        &:focus, &:active {
            background: transparent;
        }
        .icon-bar {
            display: none;
        }
    }
</style>
