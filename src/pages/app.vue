<template>
    <div class="wrapper" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
        <Headers></Headers>
        <Sidebar></Sidebar>
        <router-view></router-view>
        <Footers></Footers>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { mapActions, mapGetters } from 'vuex';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-default/index.css';
  import Footers from '../components/global/footer/index.vue';
  import Headers from '../components/global/header/index.vue';
  import Sidebar from '../components/global/sidebar/index.vue';
  import { CONF } from '../constant';
  Vue.use(ElementUI);

  export default {
      data() {
          return {

          };
      },
      computed: {
          ...mapGetters([
              'getMousePos'
          ])
      },
      created() {

      },
      methods: {
          ...mapActions([
              'changeMousePos',
              'startToDrag',
              'stopDrag',
              'setCurNode',
              'setCurNodePos',
              'resetCurNode'
          ]),
          onMouseDown(event) {
              let elem = event.target;
              let elemType = elem.getAttribute('data-type');
              let dataKey = elem.getAttribute('data-key');
              if (CONF.DRAGGABLE_ELEM.indexOf(elemType) !== -1 && dataKey) {
                  this.setCurNode(dataKey).then(() => {
                      this.startToDrag();
                  });
              }
          },
          onMouseMove(event) {
              this.changeMousePos({
                  mouseX: event.clientX,
                  mouseY: event.clientY
              });
          },
          onMouseUp(event) {
              this.stopDrag();
              this.resetCurNode();
          }
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
