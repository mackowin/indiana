import VueRouter from 'vue-router';
// Pages

import HomeIndiana from "./ideas/indiana/HomeIndiana";
import OrderedIndiana from "./ideas/indiana/OrderedIndiana";


export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: HomeIndiana },
      { path: '/order-confirmation', component: OrderedIndiana },
      
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page

    next();
})
