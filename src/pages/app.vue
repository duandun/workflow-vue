<template>
<div class="wrapper">
    <div class="content-wrapper">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-default/index.css';
  Vue.use(ElementUI);

  export default {

  };
</script>

<style>

</style>
