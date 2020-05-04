import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Stocks from '../views/Stocks.vue';
import StocksForm from '../views/StocksForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks,
  },
  {
    path: '/stocks/:stocks_id?/edit',
    name: 'stocks_edit',
    component: StocksForm,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
