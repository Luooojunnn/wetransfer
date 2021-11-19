
const routes = [
    { path: '/', component: resolve => require(['../pages/home'], resolve)},
    { path: '/home', component: resolve => require(['../pages/home'], resolve)},
    { path: '/sy', component: resolve => require(['../pages/sy'], resolve)},
    { path: '/farm', component: resolve => require(['../pages/farm'], resolve)},

    { path: '/test', component: resolve => require(['../components/Wallet-toast'], resolve)},


];

export default routes
