
const Home = resolve => {
    require(['../pages/home/index.vue'], resolve);
};
const TestEcharts = resolve => {
    require(['../pages/echarts-test/echarts-test.vue'], resolve);
};
const TestD3 = resolve => {
    require(['../pages/d3-test/d3-test.vue'], resolve);
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
    }]
);

export default routers;
