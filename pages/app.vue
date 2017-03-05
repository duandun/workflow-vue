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

  // 全局扩展form-item组件
  Vue.component('ElFormItem', Vue.component('ElFormItem').extend({
      mounted() {
          this.$on('el.form.change', function() {
              this.dispatch('ElForm', 'change');
          });
      }
  }));

  export default {

  };
</script>

<style>

</style>
