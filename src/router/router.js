
const routes = [
    { path: '/', component: resolve => require(['../pages/home'], resolve)},
    { path: '/home', component: resolve => require(['../pages/home'], resolve)},
    { path: '/farm', component: resolve => require(['../pages/farm'], resolve)},

];

export default routes
