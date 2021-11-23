
const routes = [
    { path: '/', component: resolve => require(['../pages/home'], resolve)},
    { path: '/Home', component: resolve => require(['../pages/home'], resolve)},
    { path: '/Farm', component: resolve => require(['../pages/farm'], resolve)},
    { path: '/Lend', component: resolve => require(['../pages/lend'], resolve)},
    { path: '/mobileLend', component: resolve => require(['../pages/mobile/lend'], resolve)},
    { path: '/mobileFarm', component: resolve => require(['../pages/mobile/farm'], resolve)},
    { path: '/mobileHome', component: resolve => require(['../pages/mobile/home'], resolve)},

    { path: '/test', component: resolve => require(['../components/Wa-kuang'], resolve)},


];

export default routes
