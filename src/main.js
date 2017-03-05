import Vue from 'vue';
import VueRouter from 'vue-router';
import 'whatwg-fetch';

import routes from './routers/';
import App from './pages/app.vue';

Vue.use(VueRouter);

var $ = window.jQuery;
$.ajaxSettings.crossDomain = true;

// 实例化VueRouter
const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    data() {
        return {
            settings: {}
        };
    },

    created() {
    },

    router,
    render: h => h(App)
});
