<template>
    <div class="container"  @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
        <svg xmlns="http://www.w3c.org/2000/svg" width="100%" height="100%">
            <defs id="defs">
                <pattern id="grid" x="0" y="0" width="20"z height="20" patternUnits="userSpaceOnUse">
        			<polyline points="0,20 20,20 20,0" style="fill:none;stroke:#f0f0f0;stroke-width:1" />
        		</pattern>
                <marker id="markerArrow" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 z" stroke="#909090" fill="#909090"></path>
                </marker>
                <g id="auto_icon">
					<rect x="1" y="1" width="38" height="38" fill="#fff" stroke="#1388D6" stroke-width="2"/>
					<path d="M36 21.969v-4l-4.781-1.992c-0.133-0.375-0.273-0.738-0.445-1.094l1.93-4.805-2.829-2.828-4.762 1.961c-0.363-0.176-0.734-0.324-1.117-0.461l-2.027-4.75h-4l-1.977 4.734c-0.398 0.141-0.781 0.289-1.16 0.469l-4.754-1.91-2.828 2.828 1.938 4.711c-0.188 0.387-0.34 0.781-0.485 1.188l-4.703 2.011v4l4.707 1.961c0.145 0.406 0.301 0.801 0.488 1.188l-1.902 4.742 2.828 2.828 4.723-1.945c0.379 0.18 0.766 0.324 1.164 0.461l2.023 4.734h4l1.98-4.758c0.379-0.141 0.754-0.289 1.113-0.461l4.797 1.922 2.828-2.828-1.969-4.773c0.168-0.359 0.305-0.723 0.438-1.094l4.782-2.039zM19.969 26c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z" fill="#1388D6" transform="matrix(0.91,0,0,0.91,1.8,1.8)" xmlns="http://www.w3.org/2000/svg"></path>
				</g>
				<g id="end_icon">
					<rect width="38" height="38" x="1" y="1" fill="#fff" stroke="#1388D6" stroke-width="2"/>
					<path d="M8 8h24v24h-24z" fill="#1388D6"></path>
				</g>
				<g id="start_icon">
					<rect x="1" y="1" width="38" height="38" fill="#fff" stroke="#1388D6" stroke-width="2"/>
					<path d="M33.567 18.629l-22.877-14.174c-1.668-1.093-3.030-0.286-3.030 1.79v27.514c0 2.076 1.366 2.881 3.030 1.788l22.88-14.174c0 0 0.812-0.572 0.812-1.374-0.003-0.799-0.815-1.371-0.815-1.371z" fill="#1388D6" transform="matrix(0.87,0,0,0.87,2.738,2.604)" xmlns="http://www.w3.org/2000/svg"></path>
				</g>
				<g id="branch_icon">
					<rect x="1" y="1" width="38" height="38" fill="#fff" stroke="#1388D6" stroke-width="2"/>
					<path d="M31.998 28c-0.969 0-1.828 0.391-2.523 0.965l-6.096-4.352c0.387-0.797 0.621-1.672 0.621-2.613 0-1.293-0.422-2.488-1.117-3.465l7.131-7.137c0.593 0.348 1.25 0.602 1.984 0.602 2.211 0 4-1.789 4-4s-1.789-4-4-4-4 1.789-4 4c0 0.738 0.258 1.391 0.602 1.984l-7.131 7.137c-0.985-0.703-2.172-1.121-3.469-1.121-2.289 0-4.258 1.301-5.27 3.191l-4.816-1.609c-0.195-0.898-0.957-1.582-1.914-1.582-1.105 0-2 0.895-2 2s0.895 2 2 2c0.504 0 0.953-0.203 1.305-0.512l4.789 1.598c-0.047 0.301-0.094 0.602-0.094 0.914 0 3.312 2.688 6 6 6 1.648 0 3.145-0.668 4.23-1.746l6.057 4.324c-0.172 0.445-0.289 0.918-0.289 1.422 0 2.207 1.789 4 4 4s4-1.793 4-4-1.789-4-4-4z" fill="#1388D6"></path>
				</g>
				<g id="user_icon">
					<rect width="38" height="38" x="1" y="1" stroke-width="2" fill="#fff" stroke="#1388D6" xmlns="http://www.w3.org/2000/svg" />
					<path d="M23.463 25.96c-0.691-0.11-0.707-2.010-0.707-2.010s2.030-2.010 2.473-4.713c1.19 0 1.926-2.873 0.735-3.884 0.050-1.064 1.53-8.354-5.964-8.354s-6.014 7.29-5.965 8.354c-1.19 1.011-0.455 3.884 0.735 3.884 0.442 2.703 2.473 4.713 2.473 4.713s-0.016 1.9-0.707 2.010c-2.226 0.354-10.537 4.020-10.537 8.040h28c0-4.020-8.311-7.685-10.537-8.040z" fill="#1388D6"></path>
				</g>
				<g id="fork_icon">
					<rect width="38" height="38" x="1" y="1" stroke-width="2" fill="#fff" stroke="#1388D6" xmlns="http://www.w3.org/2000/svg" />
					<path d="M662.092 790.092c51.419 0 92.697-41.28 92.697-92.697s-41.28-92.697-92.697-92.697c-34.038 0-64.454 18.83-80.387 46.348h-76.764l-153.53-139.045 153.529-139.045h76.764c15.932 27.519 45.625 46.348 80.387 46.348 51.419 0 92.697-41.28 92.697-92.697s-41.28-92.697-92.697-92.697c-34.038 0-64.454 18.83-80.387 46.348h-112.974l-204.223 185.394h-78.938c-15.932-27.519-45.625-46.348-80.387-46.348-51.419 0-92.697 41.28-92.697 92.697s41.28 92.697 92.697 92.697c34.038 0 64.454-18.83 80.387-46.348h78.938l204.223 185.394h112.974c15.932 27.519 45.625 46.348 80.387 46.348zM707.716 326.606c0 24.623-20.277 44.9-44.9 44.9s-44.9-20.277-44.9-44.9 20.277-44.9 44.9-44.9 44.9 20.277 44.9 44.9zM62.457 512c0-24.623 20.277-44.9 44.9-44.9s44.9 20.277 44.9 44.9-20.277 44.9-44.9 44.9-44.9-20.277-44.9-44.9zM707.716 697.393c0 24.623-20.277 44.9-44.9 44.9s-44.9-20.277-44.9-44.9 20.277-44.9 44.9-44.9 44.9 20.277 44.9 44.9z" transform="matrix(0.047,0,0,0.047,1.837,-4.133)" xmlns="http://www.w3.org/2000/svg" fill="#1388D6"></path>
				</g>
            </defs>
            <rect id="bg" width="100%" height="99.3%" fill="url(#grid)" def="bg"></rect>
            <root-line></root-line>
            <root-node></root-node>
        </svg>
        <right-menu v-show="showRightMenu" :styleObj="rightMenuPos"
         @closeMenu="showRightMenu = false"
         ></right-menu>
    </div>
</template>
<script>
import RootNode from '../../components/rootNode.vue';
import RootLine from '../../components/rootLine.vue';
import { mapActions, mapGetters } from 'vuex';
import { MODE } from '../../constant/conf.js';
import RightMenu from '../../components/rightMenu.vue';

export default {
    data() {
        return {
            showRightMenu: false,
            rightMenuPos: {},
            leftMouseDown: false
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
                this.leftMouseDown = false;
                return;
            }
            this.showRightMenu = false;
            this.leftMouseDown = true;
        },
        onMouseMove(event) {
            if (!this.leftMouseDown) {
                return;
            }
            this.changeMousePos({
                mouseX: event.clientX,
                mouseY: event.clientY
            });
        },
        onMouseUp(event) {
            this.leftMouseDown = false;
            if (this.mode === MODE.LINK) {
                this.changeDragLineVisible(false);
                return;
            }
            this.stopDrag();
            this.resetCurNode();
        }
    },
    components: {
        RootNode,
        RootLine,
        RightMenu
    }
};
</script>
<style lang="sass" scoped>
    .container {
        transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
        margin-left: 230px;
        width: 100%;
        height: 80%;
    }
    .sidebar-collapse .container {
        margin-left: 0 !important;
    }

</style>
