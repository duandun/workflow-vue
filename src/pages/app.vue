<template>
    <div class="wrapper" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
        <Headers></Headers>
        <Sidebar></Sidebar>
        <router-view></router-view>
        <Footers></Footers>
        <right-menu v-show="showRightMenu" :styleObj="rightMenuPos"
         @closeMenu="showRightMenu = false"
         ></right-menu>
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
  import RightMenu from '../components/rightMenu.vue';
  import { MODE } from '../constant/conf.js';
  Vue.use(ElementUI);

  export default {
      data() {
          return {
              showRightMenu: false,
              rightMenuPos: {}
          };
      },
      computed: {
          ...mapGetters({
              getMousePos: 'getMousePos',
              mode: 'getMode'
          })
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
              'resetCurNode',
              'changeDragLineVisible'
          ]),
          onMouseDown(event) {
              if (event.button === 2) {
                  document.oncontextmenu = function(ev) {
                      ev.preventDefault();
                      return false;
                  }
                  let mouseX = event.clientX || 0;
                  let mouseY = event.clientY || 0;
                  this.rightMenuPos = {
                      top: mouseY + 'px',
                      left: mouseX + 'px'
                  };
                  this.showRightMenu = true;
                  return;
              }
              this.showRightMenu = false;
            //   let elem = event.target;
            //   let elemType = elem.getAttribute('data-type');
            //   let dataKey = elem.getAttribute('data-key');
            //   if (CONF.DRAGGABLE_ELEM.indexOf(elemType) !== -1 && dataKey) {
            //       this.setCurNode(dataKey).then(() => {
            //           this.startToDrag();
            //       });
            //   }
          },
          onMouseMove(event) {
              this.changeMousePos({
                  mouseX: event.clientX,
                  mouseY: event.clientY
              });
          },
          onMouseUp(event) {
              if (this.mode === MODE.LINK) {
                  this.changeDragLineVisible(false);
                  return;
              }
              this.stopDrag();
              this.resetCurNode();
          }
      },
      components: {
          Headers,
          Sidebar,
          Footers,
          RightMenu
      }
  };
</script>

<style type="css">
    .wrapper {
        width: 100%;
        height: 100%;
    }
</style>
