
const Home = resolve => {
    require(['../pages/home/index.vue'], resolve);
};
const TestEcharts = resolve => {
    require(['../pages/echarts-test/echarts-test.vue'], resolve);
};
const TestD3 = resolve => {
    require(['../pages/d3-test/d3-test.vue'], resolve);
};
const TestCanvas = resolve => {
    require(['../pages/canvas-test/canvas-test.vue'], resolve);
};

const routers = [{
    path: '/',
    name: 'home',
    component: Home
}].concat(
    [{
        path: '*',
        component: Home
    }, {
        path: '/test/echarts',
        component: TestEcharts
    }, {
        path: '/test/d3',
        component: TestD3
    }, {
        path: '/test/canvas',
        component: TestCanvas
    }]
);

export default routers;
