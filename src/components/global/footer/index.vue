<template>
    <footer class="main-footer">
        <div class="pull-left hidden-xs">
            <b>Version</b> {{ version }}
        </div>
        <div class="social-link">
            <a href="https://github.com/duandun/workflow-vue" class="github-link" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        </div>
    </footer>
</template>

<script>
    export default {
        replace: true,
        data() {
            return {
                version: '0.0.1'
            };
        },
        computed: {
        },
        methods: {
        },
        components: {
        }
    };
</script>


<style lang="sass" scoped>
    .main-footer {
        display: block;
        padding: 15px;
        transition: transform .3s ease-in-out, margin-left .3s ease-in-out;
        margin-left: 230px;
        z-index: 800;
    }
    .fa-github {
        color: #8d99ab;
        transition: .3s;
        font-size: 32px;

        &:hover {
            transform: scale(1.2);
        }
    }
    .github-link {
        display: inline-block;
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
    }
    .social-link {
        float: right;
    }
    .sidebar-collapse .main-footer {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
      margin-left: 0 !important;
      z-index: 800;
    }
</style>
