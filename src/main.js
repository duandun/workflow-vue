import Vue from 'vue';
import VueRouter from 'vue-router';
import 'whatwg-fetch';
import IView from 'iview';
import 'iview/dist/styles/iview.css';

import routes from './routers';
import store from './store';
import App from './pages/app.vue';
import $ from 'webpack-zepto';

Vue.use(VueRouter);
Vue.use(IView);

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
    store,
    router,
    render: h => h(App)
});
