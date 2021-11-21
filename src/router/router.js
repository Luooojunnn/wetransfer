
const routes = [
    { path: '/', component: resolve => require(['../pages/home'], resolve)},
    { path: '/home', component: resolve => require(['../pages/sy'], resolve)},
    { path: '/sy2', component: resolve => require(['../pages/home'], resolve)},
    { path: '/farm', component: resolve => require(['../pages/farm'], resolve)},
    { path: '/lend', component: resolve => require(['../pages/lend'], resolve)},

    { path: '/test', component: resolve => require(['../components/Wa-kuang'], resolve)},


];

export default routes
