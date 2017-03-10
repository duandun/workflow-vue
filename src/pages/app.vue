<template>
    <div class="wrapper">
        <Headers></Headers>
        <Sidebar></Sidebar>
        <router-view></router-view>
        <Footers></Footers>
    </div>
</template>

<script>
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-default/index.css';
  import Footers from '../components/global/footer/index.vue';
  import Headers from '../components/global/header/index.vue';
  import Sidebar from '../components/global/sidebar/index.vue';
  Vue.use(ElementUI);

  export default {
      data() {
          return {

          };
      },
      computed: {

      },
      created() {

      },
      methods: {

      },
      components: {
          Headers,
          Sidebar,
          Footers
      }
  };
</script>

<style type="css">
    .wrapper {
        width: 100%;
        height: 100%;
    }
</style>
