
const Home = resolve => {
    require(['../pages/home/index.vue'], resolve);
};
const routers = [{
    path: '/',
    name: 'home',
    component: Home
}].concat(
    [{
        path: '*',
        component: Home
    }]
);

export default routers;
