
const routes = [
    { path: '/', component: resolve => require(['../pages/home'], resolve)},
    { path: '/home', component: resolve => require(['../pages/home'], resolve)},

];

export default routes
